import { Route, Switch } from "react-router"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react"
// Components
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import ProtectedRoute from "./Components/ProtectedRoute";


toast.configure();

function App() {
  const [authentication, setAuthentication] = useState(false)
  return (
    <div className="App">
      <NavBar authentication={authentication} setAuthentication={setAuthentication} />
      <Switch>
        <Route exact path="/" component={() => <SignUp setAuthentication={setAuthentication} />} />
        <Route exact path="/login" component={() => <Login setAuthentication={setAuthentication} />} />
        <ProtectedRoute authentication={authentication} exact path="/home" component={Home} />

      </Switch>
    </div>
  );
}

export default App;
