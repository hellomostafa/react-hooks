import { useReducer, useState } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch(action.type){
    case "INCREMENT":
      return {counter: state.counter+1, showText: state.showText}

    case "toggleShowText":
      return {counter: state.counter, showText: !state.showText}

    default:
      return state;
  }
}

function App() {

  // useState
  const [count, setCount] = useState(0)
  const handleIncreaseCount = () => {
    let newCount = count + 1;
    setCount(newCount)
  }
  const handleDecreaseCount = () => {
    let newCount = count - 1;
    if(count !== 0){
      setCount(newCount)
    }else{
      alert('You Can not go to the Negative')
    }
  }


  // useReducer
  
  const [state, dispatch] = useReducer(reducer, {counter: 0, showText: true})

  return (
    <div className="App">
      <h3>All React Hooks Practice.</h3>

      <div className="useState-area">
        <code> useState()</code>
        <h4>Number: {count}</h4>
        <button onClick={handleIncreaseCount}>Increase + </button>
        <button onClick={handleDecreaseCount}>Decrease - </button>
      </div>

      <br/>
      
      <div className="useReducer-area">
        <code>useReducer()</code>
        <br/>
        <br/>
        {state.counter}
        <br/>
        <button onClick={()=> {
          dispatch({type: "INCREMENT"});
          dispatch({type: "toggleShowText"});
        }}>Click Here to Count and Toggle</button>
        {state.showText && <p>You have not clicked Yet!</p>}
      </div>
    </div>
  );
}

export default App;
