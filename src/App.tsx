import React, { useCallback, useState } from 'react';
import './App.css';
import Doors from './components/Doors'
import Footer from './components/Footer';
import StarBackground from './effects/stars'
import LoginButton from './components/LoginButton';
import LeaderBoard from './components/LeaderBoard';
import Gdpr from './components/Gdpr';
import { ReactComponent as Logo } from './img/knowitlogo.svg';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Door from './components/Door/Door';


function App() {
  const [leaderboardHidden, setLeaderboardHidden] = useState(true);
  const [isLeaderboardHiding, setIsLeaderboardHiding] = useState(false);

  return (
    <>
      <StarBackground paused={false} />
      <div className="FlexContainer text-gray-200">
        <div>
          <header>
            <nav className="p-4">
              <a className="inline-block float-left" href="https://www.knowit.no/" target="_blank" rel="noopener noreferrer" tabIndex={1}>
                <Logo className="h-7 md:h-10 fill-current" />
              </a>
              <div className="float-right space-x-4 h-10 text-md mt-0.5 md:mt-1 md:text-xl">
                <button className="hover:underline" onClick={() => !isLeaderboardHiding && setLeaderboardHidden(false)} tabIndex={2}>Ledertavle</button>
                <LoginButton />
              </div>
            </nav>
          </header>
          <Switch>
            <Route exact path="/">
              <Doors />
              <Footer />
            </Route>
            {/* Match door 1-24 only*/}
            <Route path="/luke/:doorNumber(0?[1-9]|1[0-9]|2[0-4])">
              <Door />
            </Route>
            <Route path='/gdpr'>
              <Gdpr />
            </Route>
            {/* 404? - Route to main view*/}
            <Route>
              <Redirect to="/"/>
            </Route>
          </Switch>
        </div>
        <LeaderBoard
          hidden={leaderboardHidden}
          setIsLeaderboardHiding={setIsLeaderboardHiding}
          closeHandler={useCallback(() => setLeaderboardHidden(true), [])}
        />
      </div>
    </>
  );
}

export default App;
