import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import useApplicationData from "./hooks/useApplicationData";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

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
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
