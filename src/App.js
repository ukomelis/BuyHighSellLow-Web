import AppNavbar from './components/AppNavbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './components/SignUp'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <AppNavbar></AppNavbar>
      <Route path='/signup' exact={true} component={SignUp}/>  
      <Route path='/home' exact={true} component={Home}/>  
    </Router>
  );
}

export default App;
