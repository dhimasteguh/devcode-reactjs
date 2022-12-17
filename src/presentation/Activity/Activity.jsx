import React from "react";
import Navigator from "../../components/Navigator";
import ModalDialog from "../../components/ModalDialog";
import "./Activity.css";
import { Trash } from "../../constants/icons/Trash";
import NoActivity from "./NoActivity";
import useActivityViewModel from "./ActivityModel";
import moment from "moment";
import { Alert } from "../../constants/icons/Alert";

const Activity = () => {
  const {
    activities,
    isLoading,
    goToDetailActivity,
    createNewActivity,
    confirmDeleteActivity,
    modalDelRef,
    activity,
    setActivity,
    deleteActivity,
  } = useActivityViewModel();
  return (
    <>
      <div className="container">
        <Navigator test={"activity-add-button"} onClick={createNewActivity} />
        {isLoading ? (
          <div className="loading-container">
            <div className="animate-spin"></div>
          </div>
        ) : activities.length !== 0 ? (
          <div className="activites-container">
            {activities.map((data) => {
              return (
                <div
                  data-cy={`activity-item-${data.id}`}
                  onClick={(e) => {
                    goToDetailActivity(data);
                  }}
                  className="activity-box"
                  key={`id-${data.id}`}
                >
                  <div
                    data-cy="activity-item-title"
                    className="activity-box-title"
                  >
                    {data.title}
                  </div>
                  <div className="flex-between">
                    <div
                      className="activity-box-date"
                      data-cy="activity-item-date"
                    >
                      {moment(data.created_at).format("LL")}
                    </div>
                    <Trash
                      test="activity-item-delete-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        confirmDeleteActivity(data);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <NoActivity onClick={createNewActivity} />
        )}
        <ModalDialog
          modalRef={modalDelRef}
          onClose={() => {
            setActivity(null);
          }}
          title={
            <div
              className="flex-center"
              style={{ paddingTop: 50, paddingBottom: 50 }}
            >
              <Alert />
            </div>
          }
          content={
            <div data-cy="modal-delete-title" className="modal-del-title">
              <div>Apakah anda yakin menghapus activity</div>
              <div style={{ fontWeight: 700 }}>"{activity?.title}"?</div>
            </div>
          }
          onOke={() => {
            deleteActivity(activity?.id);
          }}
        />
      </div>
    </>
  );
};

export default Activity;
