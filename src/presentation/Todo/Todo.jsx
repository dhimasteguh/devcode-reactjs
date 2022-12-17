import React from "react";
import Navigator from "../../components/Navigator";
import "./Todo.css";
import { Trash } from "../../constants/icons/Trash";
import useTodoViewModel from "./TodoModel";
import PageNotFound from "../../components/PageNotFound";
import TodoTitle from "./TodoTitle";
import NoTodo from "./NoTodo";
import FormTodoModalDialog from "./FormTodo";
import { EditIcon } from "../../constants/icons/Edit";
import { Alert } from "../../constants/icons/Alert";
import ModalDialog from "../../components/ModalDialog";

const Todo = () => {
  const viewModel = useTodoViewModel();
  const {
    isLoading,
    todos,
    activity,
    modalRef,
    btnNewTodo,
    saveAction,
    getPriorityColor,
    btnEditTodo,
    toggleStatusTodo,
    sortArray,
    modalDelRef,
    todo,
    deleteTodo,
    setTodo,
    confirmDeleteTodo,
  } = viewModel;
  if (!activity) return <PageNotFound />;
  return (
    <>
      <div className="container">
        <Navigator
          test={"todo-add-button"}
          onClick={btnNewTodo}
          title={<TodoTitle viewModel={viewModel} />}
        />
        {isLoading ? (
          <div className="loading-container">
            <div className="animate-spin"></div>
          </div>
        ) : todos.length !== 0 ? (
          <div className="todo-container">
            {sortArray(todos).map((data) => {
              return (
                <div
                  data-cy={`todo-item-${data.id}`}
                  className="todo-box"
                  key={data.id}
                >
                  <div className="flex">
                    <input
                      data-cy="todo-item-checkbox"
                      onChange={(e) => toggleStatusTodo(data)}
                      className="check-input"
                      value={0}
                      checked={!(data.is_active === 1)}
                      type={"checkbox"}
                    ></input>
                    <div
                      data-cy="todo-item-priority-indicator"
                      className="todo-box-priority"
                      style={{
                        backgroundColor: getPriorityColor(data.priority),
                      }}
                    ></div>
                    <div
                      data-cy="todo-item-title"
                      className={`todo-box-title ${
                        data.is_active === 0 ? "todo-done" : ""
                      }`}
                    >
                      {data.title}
                    </div>
                    <EditIcon
                      test={"todo-item-edit-button"}
                      size="20"
                      style={{
                        marginLeft: 19,
                      }}
                      onClick={() => {
                        btnEditTodo(data);
                      }}
                    />
                  </div>
                  <Trash
                    test="todo-item-delete-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      confirmDeleteTodo(data);
                    }}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <NoTodo onClick={btnNewTodo} />
        )}
        <FormTodoModalDialog saveAction={saveAction} modalRef={modalRef} />
        <ModalDialog
          modalRef={modalDelRef}
          onClose={() => {
            setTodo(null);
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
              <div style={{ fontWeight: 700 }}>"{todo?.title}"?</div>
            </div>
          }
          onOke={() => {
            deleteTodo(todo?.id);
          }}
        />
      </div>
    </>
  );
};

export default Todo;
