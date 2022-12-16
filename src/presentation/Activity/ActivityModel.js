import { useEffect, useState } from "react";
import * as repo from "../../data/repository/ActivityRepository";
export default function useActivityViewModel() {
  const [isLoading, setIsLoading] = useState(false);
  const [activities, setActivities] = useState([]);

  async function getActivities() {
    try {
      setIsLoading(true);
      const { data } = await repo.getActivites({});
      setIsLoading(false);
      setActivities(data.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    getActivities();
    return () => {};
  }, []);

  return {
    activities,
    getActivities,
    isLoading,
  };
}
