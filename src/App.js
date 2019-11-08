import React, { useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import Header from './components/Header';
import CategoryList from './pages/CategoryList';
import Layout from './hoc/Layout';
import CategoryForm from './components/CategoryForm';
import CategoryView from './pages/CategoryView';
import { fetchCategories } from './store/actions/categoriesActions';

const App = ({ loading, categories, fetchCategories }) => {
  useEffect(() => {
    fetchCategories()
  }, [fetchCategories]);

  let routes = (
    <Switch>
      <Route path="/" exact render={() => <CategoryList categories={categories} loading={loading}/>}/>
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

const mapStateToProps = (store) => {
  return {
    loading: store.loading.loading,
    categories: store.categories.categories
  }
};

const mapDispatchToProps = {
  fetchCategories
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
