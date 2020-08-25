import React from 'react';
import './App.css';
import ChatApp from './components/ChatAppUI'
import DataStore from './components/DataStore'
import Login from './components/Login'

function App() {
    return (
      <div className="App">
        <DataStore>
          <Login />
          <ChatApp />
        </DataStore>
      </div>
    );
}

export default App;
