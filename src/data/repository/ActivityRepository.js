import axios from "axios";
const BASE_URL = "https://todo.api.devcode.gethired.id";
const getActivites = async (data) => {
  return await axios.get(BASE_URL + "/activity-groups");
};
export { getActivites };
