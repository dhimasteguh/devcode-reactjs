import axios from "axios";
const BASE_URL = "https://todo.api.devcode.gethired.id";
const getActivites = async () => {
  return await axios.get(
    BASE_URL + "/activity-groups?email=dhimasteguhp@gmail.com"
    // BASE_URL + "/activity-groups"
  );
};
const createNewActivity = async () => {
  return await axios.post(BASE_URL + `/activity-groups`, {
    title: "New Activity",
    email: "dhimasteguhp@gmail.com",
  });
};
const changeTitleActivity = async (id, data) => {
  return await axios.patch(BASE_URL + `/activity-groups/${id}`, data);
};
const deleteActivity = async (id) => {
  return await axios.delete(BASE_URL + `/activity-groups/${id}`);
};
const getTodos = async (id) => {
  return await axios.get(BASE_URL + `/activity-groups/${id}`);
};
const addNewTodo = async (data) => {
  return await axios.post(BASE_URL + `/todo-items`, data);
};
const editTodo = async (id, data) => {
  return await axios.patch(BASE_URL + `/todo-items/${id}`, data);
};
const deleteTodo = async (id, data) => {
  return await axios.delete(BASE_URL + `/todo-items/${id}`, data);
};
export {
  getActivites,
  getTodos,
  changeTitleActivity,
  createNewActivity,
  deleteActivity,
  addNewTodo,
  editTodo,
  deleteTodo,
};
