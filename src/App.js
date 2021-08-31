import { useEffect, useReducer, useRef, useState } from 'react';
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

  // useEffect
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])


  // useRef
  const nameRef = useRef(null)
  const handleChangeName = () => {
    console.log(nameRef.current.value)
    nameRef.current.value = "";
  }

  return (
    <div className="App">
      <h3>React Hooks Practice.</h3>

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
        }}>Count and Text Toggle</button>
        {state.showText && <p>You have not clicked Yet!</p>}
      </div>

      <br/>

      <div className="useEffect-area">
        <code>useEffect()</code>
        <div className="users">
          {
            users.map(user => (
              <div className="user">
                <h5>Name: {user.name}</h5>
                <p>Email: {user.email}</p>
              </div>
            ))
          }
        </div>
      </div>

      <br/>

      <div className="useRef-area">
        <code>useRef()</code>
        <div>
          <h4>Mostafa</h4>
          <input type="text"  ref={nameRef} placeholder="Ex"/>
          <button onClick={handleChangeName}>Change Name</button>
        </div>
      </div>




    </div>    
  );
}

export default App;
