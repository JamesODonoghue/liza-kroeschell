import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants/routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import Analytics from "react-router-ga"

import 'animate.css/animate.min.css';

// import './styles/typography.css';
// import './styles/colors.css';
// import './styles/reset.css';
// import './styles/spacing.css';
// import './styles/layout.css';
import './tailwind.output.css';

library.add(faFacebookF, faYoutube, faInstagram);
ReactDOM.render(
    <Router>
        {/* <Analytics id="UA-155093524-1" debug> */}
        <Switch>
            <Route exact path={ROUTES.HOME} component={App} />
        </Switch>
        {/* </Analytics> */}
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
