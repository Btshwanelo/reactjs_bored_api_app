import React, { useContext, useState } from 'react';

import './App.css';
import activityContext from './activityContext';

function App() {
  const { activity, getData, syncData } = useContext(activityContext);

  const [type, setType] = useState('');

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className='App'>
      <div className='navbar'>
        <p>Bored API Clone</p>
      </div>

      <div className='header'>
        <p>
          The Bored API Clone helps you find things to do when you're bored! There's activity type field that help you narrow down your
          results.
        </p>
        <span>Types of the activities include: education, recreational, social, diy, charity, cooking, relaxation, music, busywork</span>
      </div>

      <div>
        <div className='controls'>
          <button onClick={() => getData()}>Get All</button>
          <div className='controls-input'>
            <input
              placeholder='eg: music'
              value={type}
              onChange={handleChange}
            />
            <button onClick={() => getData(type.toLowerCase())}>Search</button>{' '}
          </div>
          <button onClick={() => syncData()}>Reset</button>
        </div>

        {activity.isLoading && <div>Loading</div>}

        {activity.isError && <div>{activity.error}</div>}

        {!activity.isLoading && !activity.isError && (
          <div className='results'>
            <div className='results-container'>
              {activity.data.activities?.map((item) => (
                <div
                  className='results-wrapper'
                  key={item.key}>
                  <div className='card'>
                    <h3>{item.activity}</h3>
                    <p>Type: {item.type}</p>
                    <p>Participants: {item.participants}</p>
                    <p>Price: {item.price}</p>
                    <p>
                      Link:{' '}
                      <a
                        href={item.link}
                        target='_blank'
                        rel='noreferrer'>
                        {item.link}
                      </a>
                    </p>
                    <p>Accessibility: {item.accessibility}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
