// App.js
import React from 'react';
import Scorecard from './component/Scorecard'
import Graph from './component/Graph';
import Table from './component/Table';
// import styles from './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="scorecards">
        <Scorecard title="Scorecard 1" value="100" />
        <Scorecard title="Scorecard 2" value="200" />
      </div>
      <div className="graph">
        <Graph    />
      </div>
      <div className="table">
        <Table />
      </div>
    </div>
  );
};

export default App;