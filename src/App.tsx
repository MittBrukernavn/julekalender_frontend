import React, { useState } from 'react';
import './App.css';
import Doors from './components/Doors'
import Footer from './components/Footer';
import StarBackground from './effects/stars'
import LoginButton from './components/LoginButton';
import LeaderBoard from './components/LeaderBoard';
import { ReactComponent as Logo } from './img/knowitlogo.svg';
import {
  Switch,
  Route,
} from "react-router-dom";
import Door from './components/Door';


function App() {
  const [leaderBoardOpen, toggleLeaderBoard] = useState(false);

  function closeLeaderBoard() {
    toggleLeaderBoard(false);
  }

  return (
    <>
      {/*TODO: Kanskje pause bakgrunn når dør åpen?*/}
      <StarBackground paused={false} />
      <div className="FlexContainer">
        <div>
          <header>
            <nav>
              <a id="knowitlogo" href="https://www.knowit.no/" target="_blank" rel="noopener noreferrer"><Logo /></a>
              <button onClick={() => toggleLeaderBoard(!leaderBoardOpen)}>LEDERTAVLE</button>
              <LoginButton />
            </nav>
          </header>
          <Switch>
            <Route exact path="/">
              <Doors />
              <Footer />
            </Route>
            <Route path="/luke/:id">
              <Door />
            </Route>
            <Route>
              <Doors />
            </Route>
          </Switch>
        </div>
        <LeaderBoard open={leaderBoardOpen} closeHandler={closeLeaderBoard} />
      </div>
    </>
  );
}

export default App;
