import { useState, createContext } from 'react';
import axios from 'axios';

const activityContext = createContext();

//Contex Provider used to encapsulate only the components that needs the state in this context
export const ActivityProvider = ({ children }) => {
  const [activity, setActivity] = useState({
    data: [
      {
        activity: 'Configure two-factor authentication on your accounts',
        type: 'busywork',
        participants: 1,
        price: 0,
        link: 'https://en.wikipedia.org/wiki/Multi-factor_authentication',
        key: '1572120',
        accessibility: 0,
      },
    ],
    isError: false,
    isLoading: false,
  });

  //Get latest data from bored API and write to MongoDB
  const resetActivity = () => {
    setActivity.isLoading = true;

    axios.get().then().catch();

    return setActivity({
      data: [
        {
          activity: 'Configure two-factor authentication on your accounts',
          type: 'busywork',
          participants: 1,
          price: 0,
          link: 'https://en.wikipedia.org/wiki/Multi-factor_authentication',
          key: '1572120',
          accessibility: 0,
        },
      ],
      isError: false,
      isLoading: false,
    });
  };

  //Get all records from MongoDB
  const getAll = () => {
    console.log('get all');
    setActivity.isLoading = true;
    return setActivity({
      data: [
        {
          activity: 'Configure two-factor authentication on your accounts',
          type: 'busywork',
          participants: 1,
          price: 0,
          link: 'https://en.wikipedia.org/wiki/Multi-factor_authentication',
          key: '1572120',
          accessibility: 5,
        },
      ],
      isError: false,
      isLoading: false,
    });
  };

  //Get records from MongoDB by type
  const getByType = () => {
    setActivity.isLoading = true;
    return setActivity({
      data: [
        {
          activity: 'Configure two-factor authentication on your accounts',
          type: 'busywork',
          participants: 1,
          price: 0,
          link: 'https://en.wikipedia.org/wiki/Multi-factor_authentication',
          key: '1572120',
          accessibility: 3,
        },
      ],
      isError: false,
      isLoading: false,
    });
  };

  return <activityContext.Provider value={{ activity, getAll, getByType, resetActivity }}>{children}</activityContext.Provider>;
};

export default activityContext;
