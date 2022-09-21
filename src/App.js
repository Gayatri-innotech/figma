
import './App.css';
import TodoContainer from './containers/todoContainer';

function App() {
  return (
    <div className="App">
      <h1 className="heading">Today</h1>
      <i className="fa-regular fa-circle-plus" />
      <TodoContainer/>
    </div>
  );
}

export default App;
