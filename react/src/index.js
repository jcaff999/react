import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';
import Submission from './components/Submission';
import BlogCom from './components/BlogCom';

const App = () => (
  <Router>
    <div>
      <nav className = "navbar bg-light navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item active"><Link to="/Signin"> Signin </Link></li>
            <li className="nav-item"><Link to="/Signup"> Signup </Link></li>
            <li className="nav-item"><Link to="/Submission"> Sub </Link></li>
            <li className="nav-item"><Link to="/BlogCom"> Blog </Link></li>
          </ul>
      </nav>

      <hr />

      <Route exact path="/Signin" component={Signin} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Submission" component={Submission} />
      <Route path="/BlogCom" component={BlogCom} />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
