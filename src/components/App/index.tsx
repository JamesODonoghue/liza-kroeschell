import React from "react"
import "./App.css"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom"
import { ROUTES } from "../../constants/routes"
import About from "../About"
import Navigation from "../Navigation"
import Footer from "../Footer"
import Landing from "../Landing"
import Media from "../Media"

const App = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path={ROUTES.LANDING} component={Landing} />
                <Route path={ROUTES.ABOUT} component={About} />
                <Route path={ROUTES.MEDIA} component={Media} />
            </Switch>
            <Footer />
        </Router>
    )
}
export default App
