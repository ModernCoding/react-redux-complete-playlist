import React from 'react';
import Ninjas from './Ninjas';


function App() {
  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome :)</p>
      <Ninjas name="Yoshi" age="20" belt="green" />
      <Ninjas name="Ryu" age="30" belt="black" />
    </div>
  );
}

export default App;
