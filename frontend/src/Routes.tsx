import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/">
                    <Dashboard/>
                </Route>
            </Switch> 
        </BrowserRouter>
    );
}

export default Routes;