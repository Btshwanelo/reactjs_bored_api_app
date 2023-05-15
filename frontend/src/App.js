import './App.css';

function App() {
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
        <p>Type of the activity eg: education, recreational, social, diy, charity, cooking, relaxation, music, busywork</p>
      </div>
      <div>
        <div className='controls'>
          <button>Get All</button>
          <div className='controls-input'>
            <input placeholder='eg: music' />
            <button>Search</button>{' '}
          </div>
          <button>Reset</button>
        </div>
        <div className='results'>
          <div className='row'>
            <div className='column'>
              <div className='card'>
                <h3>Card 1</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className='column'>
              <div className='card'>
                <h3>Card 2</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className='column'>
              <div className='card'>
                <h3>Card 3</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className='column'>
              <div className='card'>
                <h3>Card 4</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
