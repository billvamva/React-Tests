import React, {useState} from 'react';
import Tweet from './Tweet.js'

function App () {
  
  
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    {name : 'Ed', age: 20},
    {name : 'Jon', age: 21}
  ]);

  const increment = () => {
    setRed(!isRed);
    setCount(count + 1);
  };


  return(
    <div className = 'app'>
      {/*<h1 className = {isRed ? 'red' :''}>Change my colour</h1>
      <button onClick = {increment}>Increment</button>
      <h1>{count}</h1>

      <Tweet name = 'Donald Trump' message = 'Ooga Booga'/>*/}
      {users.map(user => (
        <Tweet name = {user.name} message = {user.age}/>
      ))}
    </div>
  );
}

export default App;