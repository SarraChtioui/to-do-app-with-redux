import React from 'react';
import './App.css';
import addTask from './components/addTask'
import listTask from './components/listTask'
import visibilityFilter from './components/visibilityFilter'
import {Provider} from 'react-redux'
import store from './components/store'

const filters = ['done', 'not done']
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>TO DO Task List</h1>
      <addTask/>
      <listTask todos={
        [{id: 'Task 1',
          description: 'do taxes',
          status : 'not done' },
          {id: 'Task 2',
           description: 'work out',
           status : 'done'},
           {id: 'Task 3',
            description: 'prepare for 121',
            status : 'ongoing'}]}/>
      <visibilityFilter filters={filters}/>
    </div>
    </Provider>
  );
}

export default App;

