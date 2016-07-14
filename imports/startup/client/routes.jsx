import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppPage from '../../ui/AppPage';
import LoginPage from '../../ui/LoginPage';
import SignUpPage from '../../ui/SignUpPage';
import NotFoundPage from '../../ui/NotFoundPage';
import QuestionsListPage from '../../ui/QuestionsListPage';
import QuestionPage from '../../ui/QuestionPage';

browserHistory.listen(function (location) {
  console.log('Page: ' + location.pathname);
});

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppPage} >
      <IndexRoute component={QuestionsListPage} />
      <Route path="login" component={LoginPage} />
      <Route path="signup" component={SignUpPage} />
      <Route path=":questionId" component={QuestionPage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Router>
);
