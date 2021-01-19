import React, { useState } from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './feed'
import Widgets from "./Widgets"
import Login from "./Login"
import { useStateValue } from './StartProvider';
function App() {

  const [{user},dispatch]=useStateValue();
  // const user =null;
  
  return (
    <div className="app">
      {!user ? (
      <Login/>
      ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}
    </div>
  );
}

export default App;
