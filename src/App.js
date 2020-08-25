import React from 'react';
import './App.css';
import ChatApp from './components/ChatAppUI'
import DataStore from './components/DataStore'

function App() {
    return (
      <div className="App">
        <DataStore>
          <ChatApp />
        </DataStore>
      </div>
    );
}

export default App;
