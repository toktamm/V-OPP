import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import useApplicationData from "./hooks/useApplicationData";
import React, {useState, useEffect} from 'react'
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
import Postpage from "./components/pages/Postpage";
import UserProvider from "./provider/UserProvider";

import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(()=>{
    let token = localStorage.getItem('token')
    token ? setLoggedIn(true) : setLoggedIn(false)
  },[])
  return (
    <>
      {/* <h1>TEST REFRESH</h1> */}
      <Router>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={() => <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/register" component={() => <Register loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/detailed" component={Detailed} />

          <Route path="/arts" component={Arts} />
          <Route path="/animals" component={Animals} />
          <Route path="/youth" component={Youth} />
          <Route path="/community" component={Community} />
          <Route path="/disaster" component={Disaster} />
          <Route path="/education" component={Education} />
          <Route path="/environment" component={Environment} />
          <Route path="/religious" component={Religious} />
          <Route path="/health" component={Health} />
          <Route path="/seniors" component={Seniors} />
          <Route path="/sports" component={Sports} />

          <Route path="/findpage" component={Findpage} />
          <Route path="/postpage" component={Postpage} />
        </Switch>
      </Router>
      <UserProvider>
    </UserProvider>
    </>
  );
}

export default App;
