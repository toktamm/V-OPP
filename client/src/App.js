import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import useApplicationData from "./hooks/useApplicationData";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Detailed from "./components/pages/Detailed";
import Arts from "./components/pages/categoryPages/Arts";
import Animals from "./components/pages/categoryPages/Animals";
import Youth from "./components/pages/categoryPages/Youth";
import Community from "./components/pages/categoryPages/Community";
import Disaster from "./components/pages/categoryPages/Disaster";
import Education from "./components/pages/categoryPages/Education";
import Environment from "./components/pages/categoryPages/Environment";
import Religious from "./components/pages/categoryPages/Religious";
import Health from "./components/pages/categoryPages/Health";
import Seniors from "./components/pages/categoryPages/Seniors";
import Sports from "./components/pages/categoryPages/Sports";
import Findpage from "./components/pages/Findpage";
import Profile from "./components/pages/Profile";
import Postpage from "./components/pages/Postpage";
import UserProvider from "./provider/UserProvider";

import "./App.css";

// const App = () => {
//   const {
//     state,
//     dispatch
//   } = useApplicationData();
//   const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
//   ));
//   return (<div className="App" >
//     <h1> Users </h1>

//     <ul> {userList} </ul>
//   </div >
//   );
// };

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [eachPostId, setEachPostId] = useState(7);
  const [user, setUser] = useState(null);
  const [applyUser, setApplyUser] = useState();
  const [postList, setpostList] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    token ? setLoggedIn(true) : setLoggedIn(false);
  }, []);
  return (
    <>
      {/* <h1>TEST REFRESH</h1> */}
      <Router>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Home
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                user={user}
              />
            )}
          />
          <Route
            path="/register"
            component={() => (
              <Register
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                setUser={setUser}
                user={user}
              />
            )}
          />
          <Route
            path="/login"
            component={() => (
              <Login
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                setUser={setUser}
                user={user}
              />
            )}
          />
          <Route
            path="/detailed/:id"
            component={() => (
              <Detailed
                eachPostId={eachPostId}
                user={user}
                applyUser={applyUser}
                setApplyUser={setApplyUser}
                postList={postList}
              />
            )}
          />
          <Route path="/detailed" component={Detailed} />
          <Route path="/arts" component={Arts} />
          <Route
            path="/animals"
            component={Animals}
            eachPostId={eachPostId}
            setEachPostId={setEachPostId}
          />
          <Route path="/youth" component={Youth} />
          <Route path="/community" component={Community} />
          <Route path="/disaster" component={Disaster} />
          <Route path="/education" component={Education} />
          <Route path="/environment" component={Environment} />
          <Route path="/religious" component={Religious} />
          <Route path="/health" component={Health} />
          <Route path="/seniors" component={Seniors} />
          <Route path="/sports" component={Sports} />
          <Route
            path="/profile"
            component={() => (
              <Profile
                user={user}
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                applyUser={applyUser}
                setApplyUser={setApplyUser}
              />
            )}
          />
          <Route path="/findpage" component={Findpage} />
          {/* <Route path="/postpage" component={Postpage} /> */}
          <Route path="/postpage" component={() => <Postpage user={user} />} />
        </Switch>
      </Router>
      <UserProvider></UserProvider>
    </>
  );
}

export default App;
