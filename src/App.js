import './App.scss';

import WeekComponent from './components/WeekComponent/WeekComponent';
import NavigationBarComponent from './components/NavigationBarComponent/NavigationBarComponent';

function App() {
  return (
    <div className="App">
      <NavigationBarComponent></NavigationBarComponent>
      <div className="AppChild app-right">
       <WeekComponent></WeekComponent>
      </div>
    </div>
  );
}

export default App;
