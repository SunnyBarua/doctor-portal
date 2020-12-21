import { createContext, useState } from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import AppointmentScreen from "./Screen/AppointmentScreen"
import DashboardScreen from "./Screen/DashboardScreen";
import HomeScreen from "./Screen/HomeScreen"
import LoginScreen from "./Screen/LoginScreen"

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
     <Switch>
       <Route exact path="/">
         <HomeScreen/>
        </Route>
        <Route path="/appointment">
          <AppointmentScreen/>
        </Route>
        <Route path="/login">
          <LoginScreen/>
          </Route>
          <Route path="/dashboard/appointment">
            <DashboardScreen/>
          </Route>
     </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
