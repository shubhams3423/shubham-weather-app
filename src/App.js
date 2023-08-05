import logo from './logo.svg';
import './App.css';

function App() {
  fetch("https://api.weatherapi.com/v1/current.json?key=5bca6bccf3ce4c41a8f15340232807&q=pune")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

  return (
    <div className="App">
      <div style={{ fontSize: "5rem" }}>My Weather app - Javascript project</div>
    </div>
  );
}

export default App;
