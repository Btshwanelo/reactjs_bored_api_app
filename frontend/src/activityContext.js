import { useState, createContext } from 'react';
import axios from 'axios';

const activityContext = createContext();

const http = 'http://localhost:5000/api';

export const ActivityProvider = ({ children }) => {
  const [activity, setActivity] = useState({
    data: [],
    isError: false,
    isLoading: false,
    error: '',
  });

  // @desc    Sync data with latest records from bored API
  const syncData = () => {
    setActivity.isLoading = true;

    axios
      .post(http)
      .then((res) => {
        setActivity({
          data: [],
          isError: false,
          isLoading: false,
          error: '',
        });
      })
      .catch((err) => {
        return setActivity({
          data: [],
          isError: true,
          isLoading: false,
          error: 'Somethin went wrong',
        });
      });
  };

  // @desc    Get records from database
  const getData = (type) => {
    setActivity.isLoading = true;
    const condition = type ? { params: { type: type } } : {};

    axios
      .get(http, condition)
      .then((res) => {
        if (res.count === 0) {
          setActivity({
            data: res.data,
            isError: false,
            isLoading: false,
            error: 'No record found',
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
