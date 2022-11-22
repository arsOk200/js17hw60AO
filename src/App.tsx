import React from 'react';
import Form from "./Components/Form/Form";
import Messages from "./Components/Messages/Messages";


function App() {
  return (
    <div className="App text-center m-auto" style={{width: '890px'}}>
      <Form/>
      <h1>Messages</h1>
      <Messages/>
    </div>
  );
}

export default App;
