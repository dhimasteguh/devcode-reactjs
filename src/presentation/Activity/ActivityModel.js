import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as repo from "../../data/repository/ActivityRepository";
import * as local from "../../data/local/ActivityLocalRepository";
export default function useActivityViewModel() {
  const [isLoading, setIsLoading] = useState(false);
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState({});
  const navigate = useNavigate();
  const modalDelRef = useRef(null);

  async function getActivities() {
    try {
      setIsLoading(true);
      const { data } = await repo.getActivites();
      setIsLoading(false);
      setActivities(data.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }
  const goToDetailActivity = (activity) => {
    local.setActivity(activity);
    navigate(`/detail/${activity.id}`);
  };
  const createNewActivity = async () => {
    await repo.createNewActivity().then(getActivities).catch(console.error);
  };
  const confirmDeleteActivity = async (data) => {
    setActivity(data);
    modalDelRef.current.click();
  };
  const deleteActivity = async (id) => {
    await repo.deleteActivity(id).then(getActivities).catch(console.error);
  };
  useEffect(() => {
    getActivities();
    return () => {
      console.log("remove useActivityViewModel");
    };
  }, []);

  return {
    activities,
    getActivities,
    isLoading,
    goToDetailActivity,
    createNewActivity,
    deleteActivity,
    modalDelRef,
    confirmDeleteActivity,
    activity,
    setActivity,
  };
}
