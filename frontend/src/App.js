import './App.css';
import React, { useContext } from 'react';
import activityContext from './activityContext';

function App() {
  const { activity, getAll, getByType, resetActivity } = useContext(activityContext);
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
        <span>Type of the activity eg: education, recreational, social, diy, charity, cooking, relaxation, music, busywork</span>
      </div>
      <div>
        <div className='controls'>
          <button onClick={() => getAll()}>Get All</button>
          <div className='controls-input'>
            <input placeholder='eg: music' />
            <button onClick={() => getByType()}>Search</button>{' '}
          </div>
          <button onClick={() => resetActivity()}>Reset</button>
        </div>
        {activity.isLoading && <div>Loading</div>}
        {activity.isError && <div>Something went wrong</div>}
        {!activity.isLoading && !activity.isError && (
          <div className='results'>
            <div className='row'>
              {activity.data.map((item) => (
                <div
                  className='column'
                  key={item.key}>
                  <div className='card'>
                    <h3>{item.activity}</h3>
                    <p>type: {item.type}</p>
                    <p>participants: {item.participants}</p>
                    <p>price: {item.price}</p>
                    <p>
                      link: <a href={item.link}>{item.link}</a>
                    </p>
                    <p>accessibility: {item.accessibility}</p>
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
