import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as repo from "../../data/repository/ActivityRepository";
import * as local from "../../data/local/ActivityLocalRepository";
import { priorties } from "../../constants/constant";
export default function useTodoViewModel() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTitleFocus, setIsTitleFocus] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const [sort, setSort] = useState("asc");
  const [activity, setActivity] = useState(local.getActivity());
  const navigate = useNavigate();
  const { id } = useParams();
  const ref = useRef(null);
  const modalRef = useRef(null);
  const modalDelRef = useRef(null);

  useEffect(() => {
    if (activity) {
      getTodos();
      local.setTodo(null);
    }
    return () => {
      local.setActivity(null);
    };
    // eslint-disable-next-line
  }, []);

  async function getTodos() {
    try {
      setIsLoading(true);
      const { data } = await repo.getTodos(id);
      setIsLoading(false);
      setActivity(data);
      setTodos(data.todo_items);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }
  const goBack = () => navigate(`/`);
  const btnNewTodo = () => modalRef.current.click();
  const btnEditTodo = (todo) => {
    local.setTodo(todo);
    modalRef.current.click();
  };
  const handleTitleChange = async (e) => {
    setIsTitleFocus(false);
    const { data } = await repo.changeTitleActivity(id, {
      title: e.target.value,
    });
    setActivity(data);
  };
  const addNewTodo = async (data) => {
    await repo
      .addNewTodo({ ...data, activity_group_id: id })
      .catch(console.error);
  };
  const editTodo = async (data) => {
    await repo
      .editTodo(data.id, { ...data, activity_group_id: id })
      .catch(console.error);
  };
  const saveAction = async (data) => {
    if (!data.id) await addNewTodo(data);
    else await editTodo(data);
    getTodos();
  };
  const handleClick = () => {
    setIsTitleFocus(true);
  };
  const getPriorityColor = (value) => {
    const index = priorties.findIndex((e) => e.value === value);
    return index !== -1 ? priorties[index].color : "red";
  };
  const toggleStatusTodo = async (todo) => {
    todo.is_active = !todo.is_active ? 1 : 0;
    editTodo(todo);
    var index = todos.findIndex((e) => e.id === todo.id);
    if (index !== -1) {
      todo.up = new Date().getTime();
      todos[index] = todo;
      console.log(todo);
      setTodos([...todos]);
    }
  };
  const confirmDeleteTodo = (data) => {
    setTodo(data);
    modalDelRef.current.click();
  };
  const deleteTodo = async (id) => {
    await repo.deleteTodo(id).then(getTodos).catch(console.error);
  };
  const sortArray = (todos) => {
    // return todos;
    switch (sort) {
      case "desc":
        return todos.sort((a, b) => a.id - b.id);
      case "asc":
        return todos.sort((a, b) => b.id - a.id);
      case "a-z":
        return todos.sort((a, b) => a.title.localeCompare(b.title));
      case "z-a":
        return todos.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return todos.sort((a, b) => b.is_active - a.is_active);
    }
  };
  return {
    todos,
    isLoading,
    goBack,
    activity,
    handleTitleChange,
    handleClick,
    ref,
    isTitleFocus,
    modalRef,
    btnNewTodo,
    saveAction,
    getPriorityColor,
    btnEditTodo,
    toggleStatusTodo,
    setSort,
    sort,
    sortArray,
    modalDelRef,
    todo,
    setTodo,
    deleteTodo,
    confirmDeleteTodo,
  };
}
