import React from 'react';
import './App.css';

function App(props) {

  console.log(props)

  return (
    <div className="App">
      <h1>QLIK CORE ENGINE POC</h1>
      <h6>URL: {props.engine.obj.session.config.url}</h6>
      <h6>Engine Version: {props.engine.ver.qComponentVersion}</h6>

    </div>
  );
}

export default App;
