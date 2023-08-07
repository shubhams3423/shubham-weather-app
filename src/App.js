
import './App.css';
import WeatherApp from './component/WeatherApp'
import WeatherFetcher from './component/WeatherFetcher';
function App() {
  return (
    <div className="App">
      {/* <div style={{ fontSize: "5rem" }}>My Weather app - Javascript project</div> */}
      <div>
        <div>
          <WeatherApp />
        </div>
      </div>





      <WeatherFetcher />

    </div>
  )
}

export default App;
