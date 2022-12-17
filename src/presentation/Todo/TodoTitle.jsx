import React from "react";
import BasicMenu from "../../components/FilterMenu";
import { BackIcon } from "../../constants/icons/Back";
import { EditIcon } from "../../constants/icons/Edit";
import { Sort } from "../../constants/icons/Sort";

const TodoTitle = ({ viewModel }) => {
  const {
    goBack,
    activity,
    handleTitleChange,
    handleClick,
    ref,
    isTitleFocus,
    sort,
    setSort,
  } = viewModel;
  return (
    <div className="activity-title">
      <BackIcon test={"todo-back-button"} onClick={goBack} />
      {isTitleFocus && (
        <input
          data-cy={"todo-title"}
          className="edit-title"
          autoFocus={true}
          style={isTitleFocus ? { display: "block" } : { display: "none" }}
          ref={ref}
          onBlur={handleTitleChange}
          defaultValue={activity.title}
        ></input>
      )}
      <div
        data-cy={"todo-title"}
        style={isTitleFocus ? { display: "none" } : { display: "block" }}
        onClick={handleClick}
      >
        {activity.title}
      </div>
      <EditIcon
        test={"todo-title-edit-button"}
        style={{
          marginLeft: 19,
        }}
        onClick={handleClick}
      />

      <BasicMenu
        sort={sort}
        setSort={setSort}
        componen={(onClick) => (
          <Sort
            data-cy="todo-sort-button"
            className="sort-icon"
            onClick={onClick}
          />
        )}
      />
    </div>
  );
};

export default TodoTitle;
