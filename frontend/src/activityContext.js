import { useState, createContext } from 'react';

const activityContext = createContext();

//Contex Provider used to encapsulate only the components that needs the state in this context
export const ActivityProvider = ({ children }) => {
  const [activity, setActivity] = useState({
    data: [],
    isError: false,
    isLoading: false,
  });

  //Get latest data from bored API and write to MongoDB
  const resetActivity = () => {
    setActivity.isLoading = true;
    return setActivity({});
  };

  //Get all records from MongoDB
  const getAll = () => {
    setActivity.isLoading = true;
    return setActivity({});
  };

  //Get records from MongoDB by type
  const getByType = () => {
    setActivity.isLoading = true;
    return setActivity({});
  };

  return <activityContext.Provider value={{ activity, getAll, getByType, resetActivity }}>{children}</activityContext.Provider>;
};

export default activityContext;
