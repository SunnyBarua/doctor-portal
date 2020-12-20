import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import AppointmentScreen from "./Screen/AppointmentScreen"
import HomeScreen from "./Screen/HomeScreen"
import LoginScreen from "./Screen/LoginScreen"

function App() {
  return (
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
     </Switch>
    </Router>
  );
}

export default App;
