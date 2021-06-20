import 'semantic-ui-css/semantic.min.css'
// import "./style.css"
import ContactFunction from "./components/contacts";
import { Route, Switch } from "react-router";

const App = () => {

  return (
      <>
          
          <header>
            <h1>Mes amis robots</h1>
          </header>
          <Switch>
            <Route  exact path="/" component={ContactFunction} ></Route>
          </Switch>
      </>
    )
}
export default App;