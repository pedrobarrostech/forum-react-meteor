import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppPage from '../../ui/AppPage.jsx';
import LoginPage from '../../ui/LoginPage.jsx';
import SignUpPage from '../../ui/SignUpPage.jsx';
import NotFoundPage from '../../ui/NotFoundPage.jsx';
import QuestionsListPage from '../../ui/QuestionsListPage.jsx';
import QuestionPage from '../../ui/QuestionPage.jsx';

browserHistory.listen(function (location) {
  console.log("Page: " + location.pathname);
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
