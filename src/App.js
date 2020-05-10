import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminView from './components/adminview'
import Layout from './components/layout'
import ErrorPage from './components/errorpage'
import Footer from './components/footer'
import { analytics } from './firebase'

const App = () => {

  analytics.logEvent("page_view", { name: "visit" })

  return (
    <div>
      <Router basename={"/"}>
        <Switch>
          <Route exact path={"/"} component={Layout} />
          <Route path={"/admin-view"} component={AdminView} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
