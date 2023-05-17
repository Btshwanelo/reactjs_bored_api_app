import { useState, createContext } from 'react';
import axios from 'axios';

const activityContext = createContext();

//Contex Provider used to encapsulate only the components that needs the state in this context
export const ActivityProvider = ({ children }) => {
  const [activity, setActivity] = useState({
    data: [],
    isError: false,
    isLoading: false,
    error: ''
  });

  //Get latest data from bored API and write to MongoDB
  const syncData = () => {
    setActivity.isLoading = true;

    axios
      .post(`http://localhost:8000/api`)
      .then((res) => {
        setActivity({
          data: [],
          isError: false,
          isLoading: false,
          error: ''
        });
      })
      .catch((err) => {
        return setActivity({
          data: [],
          isError: true,
          isLoading: false,
          error: 'Somethin went wrong'
        });
      });
  };

  //Get all records from MongoDB
  const getData = (type) => {
    setActivity.isLoading = true;
    const condition = type ? { params: { type: type } } : {};

    axios
      .get(`http://localhost:8000/api`, condition)
      .then((res) => {
        if (res.count === 0) {
          setActivity({
            data: res.data,
            isError: false,
            isLoading: false,
            error: 'Not found',
          });
        } else {
          setActivity({
            data: res.data,
            isError: false,
            isLoading: false,
            error: '',
          });
        }
      })
      .catch((err) => {
        return setActivity({
          data: [],
          isError: true,
          isLoading: false,
          error: 'Something went wrong',
        });
      });
  };

  return <activityContext.Provider value={{ activity, getData, syncData }}>{children}</activityContext.Provider>;
};

export default activityContext;
