import { createContext, useState } from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import AllPatient from "./Component/AllPatient";
import Appointments from "./Component/Appointments";
import Register from "./Component/Register/Register";
import AddDoctor from "./Screen/AddDoctor";
import AllPatients from "./Screen/AllPatients";
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
          <Route path="/register">
          <Register/>
          </Route>
          <Route  exact path="/dashboard/allPatients">
            <AllPatient/>
          </Route>
          <Route  exact path="/dashboard/appointments">
            <Appointments/>
          </Route>
          <Route exact path="/dashboard">
            <DashboardScreen/>
          </Route>
          
          <Route path="/addDoctor">
            <AddDoctor/>
          </Route>

     </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
