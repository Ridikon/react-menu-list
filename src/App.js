import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import './App.scss';
import Header from './components/Header';
import CategoryList from './containers/CategoryList';
import Layout from './hoc/Layout';
import CategoryForm from './containers/CategoryForm';
import CategoryView from './containers/CategoryView';

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact render={() => <CategoryList/>}/>
      <Route path="/create" component={CategoryForm}/>
      <Route path="/view/:id" component={CategoryView}/>
      <Redirect to="/"/>
    </Switch>
  );

  return (
    <Layout>
      <Header/>
      {routes}
    </Layout>
  );
};

export default withRouter(App);
