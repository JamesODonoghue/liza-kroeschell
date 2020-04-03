import React from "react"
import "./App.css"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import { ROUTES } from "../../constants/routes"
import { Home } from "../Home"
import { Media } from "../Media"
import { Navigation } from "../Navigation"

const App = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.MEDIA} component={Media} />
            </Switch>
        </Router>
    )
}
export default App
