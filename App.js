import React from 'react';
import './App.css';  // Import the global CSS file if needed
import './Tasks/Datatable.css'; // Adjust this path if Datatable.css is in the same directory as Datatable.js


import Datatable from './Tasks/Datatable';  // Ensure the path and name are correct

function App() {
  return (
    <div className="App">
      <h1>Task 4</h1>
      <p>Datagrid Task</p>
      <Datatable />  {/* Rendering the Datatable component */}
    </div>
  );
}

export default App;
