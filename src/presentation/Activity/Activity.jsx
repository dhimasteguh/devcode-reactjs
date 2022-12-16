import React from "react";
import Navigator from "../../components/Navigator";
import "./Activity.css";
import { Trash } from "../../constants/icons/Trash";
import NoActivity from "./NoActivity";
import useActivityViewModel from "./ActivityModel";
import moment from "moment";

const Activity = () => {
  const { activities, isLoading } = useActivityViewModel();
  return (
    <>
      <div className="container">
        <Navigator />
        {isLoading ? (
          <div className="loading-container">
            <div className="animate-spin"></div>
          </div>
        ) : activities.length !== 0 ? (
          <div className="activites-container">
            {activities.map((data) => {
              return (
                <div className="activity-box" key={`id-${data.id}`}>
                  <div className="activity-box-title">{data.title}</div>
                  <div className="flex-between">
                    <div className="activity-box-date">
                      {moment(data.created_at).format("LL")}
                    </div>
                    <Trash />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <NoActivity />
        )}
      </div>
    </>
  );
};

export default Activity;
