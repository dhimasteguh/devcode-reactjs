const setActivity = (data) => {
  localStorage.setItem("selected-activity", JSON.stringify(data));
};
const setTodo = (data) => {
  localStorage.setItem("selected-todo", JSON.stringify(data));
};
const getActivity = () => {
  const result = localStorage.getItem("selected-activity");
  return JSON.parse(result);
};
const getTodo = () => {
  const result = localStorage.getItem("selected-todo");
  return JSON.parse(result);
};
export { setActivity, getActivity, setTodo, getTodo };
