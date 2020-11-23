import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import useApplicationData from "./hooks/useApplicationData";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Detailed from "./components/pages/Detailed";
import Findpage from "./components/pages/Findpage";
import Postpage from "./components/pages/Postpage";

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
  return (
    <>
      {/* <h1>TEST REFRESH</h1> */}
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/detailed" component={Detailed} />
          <Route path="/findpage" component={Findpage} />
          <Route path="/postpage" component={Postpage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
