var require = meteorInstall({"client":{"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/template.main.js                                                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.body.addContent((function() {                                                                     // 2
  var view = this;                                                                                         // 3
  return HTML.Raw('<div id="render-target"></div>');                                                       // 4
}));                                                                                                       // 5
Meteor.startup(Template.body.renderToDocument);                                                            // 6
                                                                                                           // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Main.jsx":["react","meteor/meteor","react-dom","../imports/startup/client/Routes.jsx",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/Main.jsx                                                                                         //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var React;module.import('react',{"default":function(v){React=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var render;module.import('react-dom',{"render":function(v){render=v}});var renderRoutes;module.import('../imports/startup/client/Routes.jsx',{"renderRoutes":function(v){renderRoutes=v}});
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           //
                                                                                                           // 5
                                                                                                           //
Meteor.startup(function () {                                                                               // 7
  render(renderRoutes(), document.getElementById('render-target'));                                        // 8
});                                                                                                        // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"startup":{"client":{"Routes.jsx":["react","react-dom","react-router","../../ui/AppPage","../../ui/LoginPage","../../ui/SignUpPage","../../ui/NotFoundPage","../../ui/QuestionsListPage","../../ui/QuestionPage",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/startup/client/Routes.jsx                                                                       //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.export({renderRoutes:function(){return renderRoutes}});var React;module.import('react',{"default":function(v){React=v}});var render;module.import('react-dom',{"render":function(v){render=v}});var Router,Route,IndexRoute,browserHistory;module.import('react-router',{"Router":function(v){Router=v},"Route":function(v){Route=v},"IndexRoute":function(v){IndexRoute=v},"browserHistory":function(v){browserHistory=v}});var AppPage;module.import('../../ui/AppPage',{"default":function(v){AppPage=v}});var LoginPage;module.import('../../ui/LoginPage',{"default":function(v){LoginPage=v}});var SignUpPage;module.import('../../ui/SignUpPage',{"default":function(v){SignUpPage=v}});var NotFoundPage;module.import('../../ui/NotFoundPage',{"default":function(v){NotFoundPage=v}});var QuestionsListPage;module.import('../../ui/QuestionsListPage',{"default":function(v){QuestionsListPage=v}});var QuestionPage;module.import('../../ui/QuestionPage',{"default":function(v){QuestionPage=v}});
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           // 4
                                                                                                           // 5
                                                                                                           // 6
                                                                                                           // 7
                                                                                                           // 8
                                                                                                           // 9
                                                                                                           //
browserHistory.listen(function (location) {                                                                // 11
  console.log('Page: ' + location.pathname);                                                               // 12
});                                                                                                        // 13
                                                                                                           //
var renderRoutes = function renderRoutes() {                                                               // 15
  return React.createElement(                                                                              // 15
    Router,                                                                                                // 16
    { history: browserHistory },                                                                           // 16
    React.createElement(                                                                                   // 17
      Route,                                                                                               // 17
      { path: '/', component: AppPage },                                                                   // 17
      React.createElement(IndexRoute, { component: QuestionsListPage }),                                   // 18
      React.createElement(Route, { path: 'login', component: LoginPage }),                                 // 19
      React.createElement(Route, { path: 'signup', component: SignUpPage }),                               // 20
      React.createElement(Route, { path: ':questionId', component: QuestionPage })                         // 21
    ),                                                                                                     // 17
    React.createElement(Route, { path: '*', component: NotFoundPage })                                     // 23
  );                                                                                                       // 16
};                                                                                                         // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"api":{"questions.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/api/questions.js                                                                                //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.export({Questions:function(){return Questions},QuestionComments:function(){return QuestionComments}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                           //
var Questions = new Mongo.Collection('questions');                                                         // 3
var QuestionComments = new Mongo.Collection('question_comments');                                          // 4
                                                                                                           //
Questions.allow({                                                                                          // 6
  update: function () {                                                                                    // 7
    function update(userId, doc, fieldNames, modifier) {                                                   // 7
      return false;                                                                                        // 8
    }                                                                                                      // 9
                                                                                                           //
    return update;                                                                                         // 7
  }(),                                                                                                     // 7
  insert: function () {                                                                                    // 10
    function insert(userId, doc) {                                                                         // 10
      return false;                                                                                        // 11
    }                                                                                                      // 12
                                                                                                           //
    return insert;                                                                                         // 10
  }(),                                                                                                     // 10
  remove: function () {                                                                                    // 13
    function remove(userId, doc) {                                                                         // 13
      return false;                                                                                        // 14
    }                                                                                                      // 15
                                                                                                           //
    return remove;                                                                                         // 13
  }()                                                                                                      // 13
});                                                                                                        // 6
                                                                                                           //
Meteor.methods({                                                                                           // 18
  'questions.create': function () {                                                                        // 19
    function questionsCreate(text) {                                                                       // 19
      if (!this.userId) {                                                                                  // 20
        throw new Meteor.Error('not-authorized');                                                          // 21
      }                                                                                                    // 22
      Questions.insert({                                                                                   // 23
        text: text,                                                                                        // 24
        userId: this.userId,                                                                               // 25
        createdAt: new Date() });                                                                          // 26
    }                                                                                                      // 28
                                                                                                           //
    return questionsCreate;                                                                                // 19
  }(),                                                                                                     // 19
  // current time                                                                                          //
  'questions.like': function () {                                                                          // 29
    function questionsLike(questionId) {                                                                   // 29
      Questions.update({ _id: questionId }, {                                                              // 30
        $inc: {                                                                                            // 31
          likes: 1                                                                                         // 32
        }                                                                                                  // 31
      });                                                                                                  // 30
    }                                                                                                      // 35
                                                                                                           //
    return questionsLike;                                                                                  // 29
  }(),                                                                                                     // 29
  'questions.solve': function () {                                                                         // 36
    function questionsSolve(questionId) {                                                                  // 36
      Questions.update({ _id: questionId }, {                                                              // 37
        $set: {                                                                                            // 38
          solvedAt: new Date()                                                                             // 39
        }                                                                                                  // 38
      });                                                                                                  // 37
    }                                                                                                      // 42
                                                                                                           //
    return questionsSolve;                                                                                 // 36
  }(),                                                                                                     // 36
  'questions.comment': function () {                                                                       // 43
    function questionsComment(questionId, text) {                                                          // 43
      QuestionComments.insert({                                                                            // 44
        questionId: questionId,                                                                            // 45
        text: text,                                                                                        // 46
        createdAt: new Date() });                                                                          // 47
      // current time                                                                                      //
      Questions.update({ _id: questionId }, {                                                              // 49
        $inc: {                                                                                            // 50
          commentsCount: 1                                                                                 // 51
        }                                                                                                  // 50
      });                                                                                                  // 49
      // Questions.update({_id: questionId}, {                                                             //
      // });                                                                                               //
    }                                                                                                      // 56
                                                                                                           //
    return questionsComment;                                                                               // 43
  }()                                                                                                      // 43
                                                                                                           //
});                                                                                                        // 18
                                                                                                           //
if (Meteor.isServer) {                                                                                     // 60
  Meteor.publishComposite('questions', function () {                                                       // 61
    return {                                                                                               // 62
      find: function () {                                                                                  // 63
        function find() {                                                                                  // 63
          return Questions.find({}, {                                                                      // 64
            fields: {                                                                                      // 65
              userId: 1,                                                                                   // 66
              text: 1,                                                                                     // 67
              likes: 1,                                                                                    // 68
              commentsCount: 1,                                                                            // 69
              solvedAt: 1                                                                                  // 70
            }                                                                                              // 65
          });                                                                                              // 64
        }                                                                                                  // 73
                                                                                                           //
        return find;                                                                                       // 63
      }(),                                                                                                 // 63
      children: [{                                                                                         // 74
        find: function () {                                                                                // 76
          function find(question) {                                                                        // 76
            return Meteor.users.find({ _id: question.userId }, {                                           // 77
              fields: {                                                                                    // 78
                profile: 1                                                                                 // 79
              }                                                                                            // 78
            });                                                                                            // 77
          }                                                                                                // 82
                                                                                                           //
          return find;                                                                                     // 76
        }()                                                                                                // 76
      }]                                                                                                   // 75
    };                                                                                                     // 62
  });                                                                                                      // 86
  Meteor.publishComposite('question', function (questionId) {                                              // 87
    return {                                                                                               // 88
      find: function () {                                                                                  // 89
        function find() {                                                                                  // 89
          return Questions.find({ _id: questionId }, {});                                                  // 90
        }                                                                                                  // 91
                                                                                                           //
        return find;                                                                                       // 89
      }(),                                                                                                 // 89
      children: [{                                                                                         // 92
        find: function () {                                                                                // 94
          function find(question) {                                                                        // 94
            return QuestionComments.find({ questionId: question._id }, {});                                // 95
          }                                                                                                // 96
                                                                                                           //
          return find;                                                                                     // 94
        }()                                                                                                // 94
      }]                                                                                                   // 93
    };                                                                                                     // 88
  });                                                                                                      // 100
}                                                                                                          // 101
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"ui":{"AppPage.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./HeaderComponent",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/AppPage.jsx                                                                                  //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var Header;module.import('./HeaderComponent',{"default":function(v){Header=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           // 2
                                                                                                           //
var propTypes = {                                                                                          // 4
  children: PropTypes.object.isRequired                                                                    // 5
};                                                                                                         // 4
                                                                                                           //
var AppPage = function (_Component) {                                                                      //
  _inherits(AppPage, _Component);                                                                          //
                                                                                                           //
  function AppPage() {                                                                                     //
    _classCallCheck(this, AppPage);                                                                        //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  AppPage.prototype.render = function () {                                                                 //
    function render() {                                                                                    //
      return React.createElement(                                                                          // 10
        'div',                                                                                             // 11
        null,                                                                                              // 11
        React.createElement(Header, null),                                                                 // 12
        this.props.children                                                                                // 13
      );                                                                                                   // 11
    }                                                                                                      // 16
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return AppPage;                                                                                          //
}(Component);                                                                                              //
                                                                                                           //
AppPage.propTypes = propTypes;                                                                             // 19
                                                                                                           //
module.export("default",exports.default=(AppPage));                                                        // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"CommentComponent.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/CommentComponent.jsx                                                                         //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           //
var propTypes = {                                                                                          // 3
  text: PropTypes.string.isRequired                                                                        // 4
};                                                                                                         // 3
                                                                                                           //
var CommentComponent = function (_Component) {                                                             //
  _inherits(CommentComponent, _Component);                                                                 //
                                                                                                           //
  function CommentComponent() {                                                                            //
    _classCallCheck(this, CommentComponent);                                                               //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  CommentComponent.prototype.render = function () {                                                        //
    function render() {                                                                                    //
      return React.createElement(                                                                          // 9
        'p',                                                                                               // 10
        null,                                                                                              // 10
        this.props.text                                                                                    // 10
      );                                                                                                   // 10
    }                                                                                                      // 12
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return CommentComponent;                                                                                 //
}(Component);                                                                                              //
                                                                                                           //
CommentComponent.propTypes = propTypes;                                                                    // 15
                                                                                                           //
module.export("default",exports.default=(CommentComponent));                                               // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"FooterComponent.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/react-meteor-data","react-router",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/FooterComponent.jsx                                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var Link;module.import('react-router',{"Link":function(v){Link=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           //
var propTypes = {                                                                                          // 5
  handleLogout: PropTypes.func,                                                                            // 6
  renderLogout: PropTypes.func,                                                                            // 7
  user: PropTypes.object                                                                                   // 8
};                                                                                                         // 5
                                                                                                           //
var params = function params() {                                                                           // 11
  return {                                                                                                 // 11
    user: Meteor.user()                                                                                    // 12
  };                                                                                                       // 11
};                                                                                                         // 11
                                                                                                           //
var FooterComponent = function (_Component) {                                                              //
  _inherits(FooterComponent, _Component);                                                                  //
                                                                                                           //
  function FooterComponent() {                                                                             //
    _classCallCheck(this, FooterComponent);                                                                //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  FooterComponent.prototype.handleLogout = function () {                                                   //
    function handleLogout(event) {                                                                         //
      event.preventDefault();                                                                              // 17
      Accounts.logout();                                                                                   // 18
    }                                                                                                      // 19
                                                                                                           //
    return handleLogout;                                                                                   //
  }();                                                                                                     //
                                                                                                           //
  FooterComponent.prototype.renderLogout = function () {                                                   //
    function renderLogout() {                                                                              //
      if (this.props.user) {                                                                               // 22
        return React.createElement(                                                                        // 23
          'a',                                                                                             // 24
          { href: '#', className: 'white-text', onClick: this.handleLogout.bind(this) },                   // 24
          'Logout'                                                                                         // 24
        );                                                                                                 // 24
      }                                                                                                    // 26
      return React.createElement(                                                                          // 27
        Link,                                                                                              // 28
        { className: 'white-text', to: '/login' },                                                         // 28
        'Login'                                                                                            // 28
      );                                                                                                   // 28
    }                                                                                                      // 30
                                                                                                           //
    return renderLogout;                                                                                   //
  }();                                                                                                     //
                                                                                                           //
  FooterComponent.prototype.render = function () {                                                         //
    function render() {                                                                                    //
      return React.createElement(                                                                          // 33
        'footer',                                                                                          // 34
        { className: 'page-footer orange' },                                                               // 34
        React.createElement(                                                                               // 35
          'div',                                                                                           // 35
          { className: 'container' },                                                                      // 35
          React.createElement(                                                                             // 36
            'div',                                                                                         // 36
            { className: 'row' },                                                                          // 36
            React.createElement(                                                                           // 37
              'div',                                                                                       // 37
              { className: 'col l6 s12' },                                                                 // 37
              React.createElement(                                                                         // 38
                'h5',                                                                                      // 38
                { className: 'white-text' },                                                               // 38
                'Forum'                                                                                    // 38
              ),                                                                                           // 38
              React.createElement(                                                                         // 39
                'p',                                                                                       // 39
                { className: 'grey-text text-lighten-4' },                                                 // 39
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius quam erat, tincidunt euismod nisl placerat nec. In in ultrices ante, ut tempor est. Donec efficitur dolor in felis sollicitudin, eu interdum odio venenatis.'
              )                                                                                            // 39
            ),                                                                                             // 37
            React.createElement(                                                                           // 48
              'div',                                                                                       // 48
              { className: 'col l3 s12' },                                                                 // 48
              React.createElement(                                                                         // 49
                'h5',                                                                                      // 49
                { className: 'white-text' },                                                               // 49
                'Menu'                                                                                     // 49
              ),                                                                                           // 49
              React.createElement(                                                                         // 50
                'ul',                                                                                      // 50
                null,                                                                                      // 50
                React.createElement(                                                                       // 51
                  'li',                                                                                    // 51
                  null,                                                                                    // 51
                  this.renderLogout()                                                                      // 51
                )                                                                                          // 51
              )                                                                                            // 50
            )                                                                                              // 48
          )                                                                                                // 36
        ),                                                                                                 // 35
        React.createElement(                                                                               // 56
          'div',                                                                                           // 56
          { className: 'footer-copyright' },                                                               // 56
          React.createElement(                                                                             // 57
            'div',                                                                                         // 57
            { className: 'container' },                                                                    // 57
            'Made by ',                                                                                    // 57
            React.createElement(                                                                           // 58
              'a',                                                                                         // 58
              { className: 'orange-text text-lighten-3', href: 'http://pedroaugust8.com' },                // 58
              'Pedro Barros'                                                                               // 58
            )                                                                                              // 58
          )                                                                                                // 57
        )                                                                                                  // 56
      );                                                                                                   // 34
    }                                                                                                      // 63
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return FooterComponent;                                                                                  //
}(Component);                                                                                              //
                                                                                                           //
FooterComponent.propTypes = propTypes;                                                                     // 66
                                                                                                           //
module.export("default",exports.default=(FooterComponent));                                                // 68
module.export("default",exports.default=(createContainer(params, FooterComponent)));                       // 69
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"HeaderComponent.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/react-meteor-data","react-router",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/HeaderComponent.jsx                                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var Link;module.import('react-router',{"Link":function(v){Link=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           //
var propTypes = {                                                                                          // 5
  handleLogout: PropTypes.func,                                                                            // 6
  renderLogout: PropTypes.func,                                                                            // 7
  user: PropTypes.object                                                                                   // 8
};                                                                                                         // 5
                                                                                                           //
var params = function params() {                                                                           // 11
  return {                                                                                                 // 11
    user: Meteor.user()                                                                                    // 12
  };                                                                                                       // 11
};                                                                                                         // 11
                                                                                                           //
var HeaderComponent = function (_Component) {                                                              //
  _inherits(HeaderComponent, _Component);                                                                  //
                                                                                                           //
  function HeaderComponent() {                                                                             //
    _classCallCheck(this, HeaderComponent);                                                                //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  HeaderComponent.prototype.handleLogout = function () {                                                   //
    function handleLogout(event) {                                                                         //
      event.preventDefault();                                                                              // 17
      Accounts.logout();                                                                                   // 18
    }                                                                                                      // 19
                                                                                                           //
    return handleLogout;                                                                                   //
  }();                                                                                                     //
                                                                                                           //
  HeaderComponent.prototype.renderLogout = function () {                                                   //
    function renderLogout() {                                                                              //
      if (this.props.user) {                                                                               // 22
        return React.createElement(                                                                        // 23
          'a',                                                                                             // 24
          { href: '#', className: 'right white-text', onClick: this.handleLogout.bind(this) },             // 24
          'Logout'                                                                                         // 24
        );                                                                                                 // 24
      }                                                                                                    // 26
      return React.createElement(                                                                          // 27
        Link,                                                                                              // 28
        { to: '/login', className: 'right white-text' },                                                   // 28
        'Login'                                                                                            // 28
      );                                                                                                   // 28
    }                                                                                                      // 30
                                                                                                           //
    return renderLogout;                                                                                   //
  }();                                                                                                     //
                                                                                                           //
  HeaderComponent.prototype.render = function () {                                                         //
    function render() {                                                                                    //
      return React.createElement(                                                                          // 33
        'nav',                                                                                             // 34
        { className: 'purple darken-2', role: 'navigation' },                                              // 34
        React.createElement(                                                                               // 35
          'div',                                                                                           // 35
          { className: 'nav-wrapper container' },                                                          // 35
          React.createElement(                                                                             // 36
            'a',                                                                                           // 36
            { id: 'logo-container', href: '#', className: 'brand-logo center' },                           // 36
            'Forum'                                                                                        // 36
          ),                                                                                               // 36
          this.renderLogout()                                                                              // 37
        )                                                                                                  // 35
      );                                                                                                   // 34
    }                                                                                                      // 41
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return HeaderComponent;                                                                                  //
}(Component);                                                                                              //
                                                                                                           //
HeaderComponent.propTypes = propTypes;                                                                     // 44
                                                                                                           //
module.export("default",exports.default=(HeaderComponent));                                                // 46
module.export("default",exports.default=(createContainer(params, HeaderComponent)));                       // 47
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"LoadingComponent.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/LoadingComponent.jsx                                                                         //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           //
var LoadingComponent = function (_Component) {                                                             //
  _inherits(LoadingComponent, _Component);                                                                 //
                                                                                                           //
  function LoadingComponent() {                                                                            //
    _classCallCheck(this, LoadingComponent);                                                               //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  LoadingComponent.prototype.render = function () {                                                        //
    function render() {                                                                                    //
      return React.createElement(                                                                          // 5
        'div',                                                                                             // 6
        null,                                                                                              // 6
        'Loading ...'                                                                                      // 6
      );                                                                                                   // 6
    }                                                                                                      // 8
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return LoadingComponent;                                                                                 //
}(Component);                                                                                              //
                                                                                                           //
module.export("default",exports.default=(LoadingComponent));                                               // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"LoginFormComponent.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","react-router",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/LoginFormComponent.jsx                                                                       //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Link;module.import('react-router',{"Link":function(v){Link=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           //
var propTypes = {                                                                                          // 5
  handleSubmit: PropTypes.func                                                                             // 6
};                                                                                                         // 5
                                                                                                           //
var LoginFormComponent = function (_Component) {                                                           //
  _inherits(LoginFormComponent, _Component);                                                               //
                                                                                                           //
  function LoginFormComponent() {                                                                          //
    _classCallCheck(this, LoginFormComponent);                                                             //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  LoginFormComponent.prototype.handleSubmit = function () {                                                //
    function handleSubmit(event) {                                                                         //
      event.preventDefault();                                                                              // 12
      var email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim();                                 // 13
      var password = ReactDOM.findDOMNode(this.refs.passwordInput).value.trim();                           // 14
                                                                                                           //
      Meteor.loginWithPassword(email, password, function (err) {                                           // 16
        if (err) {                                                                                         // 17
          alert('Login failed!!!');                                                                        // 18
        }                                                                                                  // 19
      });                                                                                                  // 20
    }                                                                                                      // 21
                                                                                                           //
    return handleSubmit;                                                                                   //
  }();                                                                                                     //
                                                                                                           //
  LoginFormComponent.prototype.render = function () {                                                      //
    function render() {                                                                                    //
      return React.createElement(                                                                          // 24
        'div',                                                                                             // 25
        null,                                                                                              // 25
        React.createElement(                                                                               // 26
          'div',                                                                                           // 26
          { className: 'container' },                                                                      // 26
          React.createElement(                                                                             // 27
            'div',                                                                                         // 27
            { className: 'well' },                                                                         // 27
            React.createElement(                                                                           // 28
              'h2',                                                                                        // 28
              null,                                                                                        // 28
              'Login'                                                                                      // 28
            ),                                                                                             // 28
            React.createElement(                                                                           // 29
              'div',                                                                                       // 29
              { className: 'form-group' },                                                                 // 29
              React.createElement(                                                                         // 30
                'form',                                                                                    // 30
                { className: 'login', onSubmit: this.handleSubmit.bind(this) },                            // 30
                React.createElement('input', {                                                             // 31
                  className: 'form-control',                                                               // 32
                  type: 'text',                                                                            // 33
                  ref: 'emailInput',                                                                       // 34
                  placeholder: 'email@example.com'                                                         // 35
                }),                                                                                        // 31
                React.createElement('input', {                                                             // 37
                  className: 'form-control',                                                               // 38
                  type: 'password',                                                                        // 39
                  ref: 'passwordInput',                                                                    // 40
                  placeholder: '********'                                                                  // 41
                }),                                                                                        // 37
                React.createElement(                                                                       // 43
                  'button',                                                                                // 43
                  { type: 'submit', className: 'btn' },                                                    // 43
                  'Login'                                                                                  // 43
                )                                                                                          // 43
              ),                                                                                           // 30
              React.createElement('br', null),                                                             // 45
              React.createElement(                                                                         // 46
                Link,                                                                                      // 46
                { to: '/signup' },                                                                         // 46
                'Create an account'                                                                        // 46
              )                                                                                            // 46
            )                                                                                              // 29
          )                                                                                                // 27
        )                                                                                                  // 26
      );                                                                                                   // 25
    }                                                                                                      // 52
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return LoginFormComponent;                                                                               //
}(Component);                                                                                              //
                                                                                                           //
LoginFormComponent.propTypes = propTypes;                                                                  // 55
                                                                                                           //
module.export("default",exports.default=(LoginFormComponent));                                             // 57
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"LoginPage.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/react-meteor-data","react-router","./LoginFormComponent",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/LoginPage.jsx                                                                                //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var browserHistory;module.import('react-router',{"browserHistory":function(v){browserHistory=v}});var LoginForm;module.import('./LoginFormComponent',{"default":function(v){LoginForm=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           // 4
                                                                                                           //
var propTypes = {                                                                                          // 6
  user: PropTypes.object                                                                                   // 7
};                                                                                                         // 6
                                                                                                           //
var params = function params() {                                                                           // 10
  return {                                                                                                 // 10
    user: Meteor.user()                                                                                    // 11
  };                                                                                                       // 10
};                                                                                                         // 10
                                                                                                           //
var LoginPage = function (_Component) {                                                                    //
  _inherits(LoginPage, _Component);                                                                        //
                                                                                                           //
  function LoginPage() {                                                                                   //
    _classCallCheck(this, LoginPage);                                                                      //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  LoginPage.prototype.componentDidMount = function () {                                                    //
    function componentDidMount() {                                                                         //
      if (this.props.user) {                                                                               // 17
        browserHistory.push('/');                                                                          // 18
      }                                                                                                    // 19
    }                                                                                                      // 20
                                                                                                           //
    return componentDidMount;                                                                              //
  }();                                                                                                     //
                                                                                                           //
  LoginPage.prototype.componentDidUpdate = function () {                                                   //
    function componentDidUpdate() {                                                                        //
      if (this.props.user) {                                                                               // 23
        browserHistory.push('/');                                                                          // 24
      }                                                                                                    // 25
    }                                                                                                      // 26
                                                                                                           //
    return componentDidUpdate;                                                                             //
  }();                                                                                                     //
                                                                                                           //
  LoginPage.prototype.render = function () {                                                               //
    function render() {                                                                                    //
      return React.createElement(LoginForm, null);                                                         // 29
    }                                                                                                      // 32
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return LoginPage;                                                                                        //
}(Component);                                                                                              //
                                                                                                           //
LoginPage.propTypes = propTypes;                                                                           // 35
                                                                                                           //
module.export("default",exports.default=(LoginPage));                                                      // 37
module.export("default",exports.default=(createContainer(params, LoginPage)));                             // 38
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"NotFoundPage.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./HeaderComponent",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/NotFoundPage.jsx                                                                             //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var Header;module.import('./HeaderComponent',{"default":function(v){Header=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           // 2
                                                                                                           //
var NotFoundPage = function (_Component) {                                                                 //
  _inherits(NotFoundPage, _Component);                                                                     //
                                                                                                           //
  function NotFoundPage() {                                                                                //
    _classCallCheck(this, NotFoundPage);                                                                   //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  NotFoundPage.prototype.render = function () {                                                            //
    function render() {                                                                                    //
      return React.createElement(                                                                          // 7
        'div',                                                                                             // 8
        null,                                                                                              // 8
        React.createElement(Header, null),                                                                 // 9
        'NotFoundPage'                                                                                     // 8
      );                                                                                                   // 8
    }                                                                                                      // 13
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return NotFoundPage;                                                                                     //
}(Component);                                                                                              //
                                                                                                           //
module.export("default",exports.default=(NotFoundPage));                                                   // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"QuestionFormComponent.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/QuestionFormComponent.jsx                                                                    //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           // 2
                                                                                                           //
var propTypes = {                                                                                          // 4
  handleSubmit: PropTypes.func                                                                             // 5
};                                                                                                         // 4
                                                                                                           //
var QuestionsFormComponent = function (_Component) {                                                       //
  _inherits(QuestionsFormComponent, _Component);                                                           //
                                                                                                           //
  function QuestionsFormComponent() {                                                                      //
    _classCallCheck(this, QuestionsFormComponent);                                                         //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  QuestionsFormComponent.prototype.handleSubmit = function () {                                            //
    function handleSubmit(event) {                                                                         //
      event.preventDefault();                                                                              // 11
      var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();                                   // 12
      Meteor.call("questions.create", text);                                                               // 13
      ReactDOM.findDOMNode(this.refs.textInput).value = '';                                                // 14
    }                                                                                                      // 15
                                                                                                           //
    return handleSubmit;                                                                                   //
  }();                                                                                                     //
                                                                                                           //
  QuestionsFormComponent.prototype.render = function () {                                                  //
    function render() {                                                                                    //
      return React.createElement(                                                                          // 18
        'div',                                                                                             // 19
        { className: 'form-group' },                                                                       // 19
        React.createElement(                                                                               // 20
          'form',                                                                                          // 20
          { className: 'new-question', onSubmit: this.handleSubmit.bind(this) },                           // 20
          React.createElement('input', {                                                                   // 21
            className: 'form-control',                                                                     // 22
            type: 'text',                                                                                  // 23
            ref: 'textInput',                                                                              // 24
            placeholder: this.props.placeholderName,                                                       // 25
            required: true                                                                                 // 26
          })                                                                                               // 21
        )                                                                                                  // 20
      );                                                                                                   // 19
    }                                                                                                      // 31
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return QuestionsFormComponent;                                                                           //
}(Component);                                                                                              //
                                                                                                           //
QuestionsFormComponent.propTypes = propTypes;                                                              // 34
                                                                                                           //
module.export("default",exports.default=(QuestionsFormComponent));                                         // 36
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"QuestionItemComponent.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-router",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/QuestionItemComponent.jsx                                                                    //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var Link;module.import('react-router',{"Link":function(v){Link=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           // 2
                                                                                                           //
var propTypes = {                                                                                          // 4
  question: PropTypes.object.isRequired,                                                                   // 5
  handleLike: PropTypes.func.isRequired,                                                                   // 6
  handleSolve: PropTypes.func.isRequired                                                                   // 7
};                                                                                                         // 4
                                                                                                           //
var QuestionItemComponent = function (_Component) {                                                        //
  _inherits(QuestionItemComponent, _Component);                                                            //
                                                                                                           //
  function QuestionItemComponent() {                                                                       //
    _classCallCheck(this, QuestionItemComponent);                                                          //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  QuestionItemComponent.prototype.handleLike = function () {                                               //
    function handleLike(event) {                                                                           //
      event.preventDefault();                                                                              // 13
      this.props.handleLike(this.props.question._id);                                                      // 14
    }                                                                                                      // 15
                                                                                                           //
    return handleLike;                                                                                     //
  }();                                                                                                     //
                                                                                                           //
  QuestionItemComponent.prototype.handleSolve = function () {                                              //
    function handleSolve(event) {                                                                          //
      event.preventDefault();                                                                              // 18
      this.props.handleSolve(this.props.question._id);                                                     // 19
    }                                                                                                      // 20
                                                                                                           //
    return handleSolve;                                                                                    //
  }();                                                                                                     //
                                                                                                           //
  QuestionItemComponent.prototype.renderSolveButton = function () {                                        //
    function renderSolveButton() {                                                                         //
      if (this.props.question.solvedAt != null) {                                                          // 23
        return React.createElement(                                                                        // 24
          'a',                                                                                             // 25
          { className: 'btn disabled' },                                                                   // 25
          React.createElement(                                                                             // 26
            'i',                                                                                           // 26
            { className: 'material-icons' },                                                               // 26
            'done'                                                                                         // 26
          )                                                                                                // 26
        );                                                                                                 // 25
      }                                                                                                    // 29
      return React.createElement(                                                                          // 30
        'a',                                                                                               // 31
        { href: '#', className: 'btn', onClick: this.handleSolve.bind(this) },                             // 31
        React.createElement(                                                                               // 32
          'i',                                                                                             // 32
          { className: 'material-icons' },                                                                 // 32
          'done'                                                                                           // 32
        )                                                                                                  // 32
      );                                                                                                   // 31
    }                                                                                                      // 35
                                                                                                           //
    return renderSolveButton;                                                                              //
  }();                                                                                                     //
                                                                                                           //
  QuestionItemComponent.prototype.render = function () {                                                   //
    function render() {                                                                                    //
      var urlDetail = '/'.concat(this.props.question._id);                                                 // 38
      return React.createElement(                                                                          // 39
        'tr',                                                                                              // 40
        null,                                                                                              // 40
        React.createElement(                                                                               // 41
          'td',                                                                                            // 41
          null,                                                                                            // 41
          React.createElement(                                                                             // 42
            Link,                                                                                          // 42
            { to: urlDetail },                                                                             // 42
            this.props.question.text                                                                       // 43
          )                                                                                                // 42
        ),                                                                                                 // 41
        React.createElement(                                                                               // 46
          'td',                                                                                            // 46
          null,                                                                                            // 46
          React.createElement(                                                                             // 47
            Link,                                                                                          // 47
            { to: '#', className: 'btn', onClick: this.handleLike.bind(this) },                            // 47
            this.props.question.likes || 0,                                                                // 48
            React.createElement(                                                                           // 49
              'i',                                                                                         // 49
              { className: 'material-icons' },                                                             // 49
              'thumb_up'                                                                                   // 49
            )                                                                                              // 49
          )                                                                                                // 47
        ),                                                                                                 // 46
        React.createElement(                                                                               // 52
          'td',                                                                                            // 52
          null,                                                                                            // 52
          this.renderSolveButton()                                                                         // 53
        )                                                                                                  // 52
      );                                                                                                   // 40
    }                                                                                                      // 57
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return QuestionItemComponent;                                                                            //
}(Component);                                                                                              //
                                                                                                           //
QuestionItemComponent.propTypes = propTypes;                                                               // 60
                                                                                                           //
module.export("default",exports.default=(QuestionItemComponent));                                          // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"QuestionPage.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/react-meteor-data","../api/questions","./LoadingComponent","./CommentComponent",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/QuestionPage.jsx                                                                             //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var Questions,QuestionComments;module.import('../api/questions',{"Questions":function(v){Questions=v},"QuestionComments":function(v){QuestionComments=v}});var Loading;module.import('./LoadingComponent',{"default":function(v){Loading=v}});var Comment;module.import('./CommentComponent',{"default":function(v){Comment=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           // 4
                                                                                                           // 5
                                                                                                           // 6
                                                                                                           //
var propTypes = {                                                                                          // 8
  question: PropTypes.object,                                                                              // 9
  renderComments: PropTypes.func,                                                                          // 10
  handleSubmit: PropTypes.func                                                                             // 11
};                                                                                                         // 8
                                                                                                           //
var paramsContainer = function paramsContainer(_ref) {                                                     // 14
  var params = _ref.params;                                                                                // 14
                                                                                                           //
  var questionsSubscription = Meteor.subscribe("question", params.questionId);                             // 15
  return {                                                                                                 // 16
    loading: !questionsSubscription.ready(),                                                               // 17
    question: Questions.findOne({ _id: params.questionId }),                                               // 18
    comments: QuestionComments.find({ questionId: params.questionId }, { sort: { createdAt: 1 } }).fetch()
  };                                                                                                       // 16
};                                                                                                         // 22
                                                                                                           //
var QuestionPage = function (_Component) {                                                                 //
  _inherits(QuestionPage, _Component);                                                                     //
                                                                                                           //
  function QuestionPage() {                                                                                //
    _classCallCheck(this, QuestionPage);                                                                   //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  QuestionPage.prototype.handleSubmit = function () {                                                      //
    function handleSubmit(event) {                                                                         //
      event.preventDefault();                                                                              // 27
      var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();                                   // 28
      Meteor.call("questions.comment", this.props.question._id, text);                                     // 29
      ReactDOM.findDOMNode(this.refs.textInput).value = '';                                                // 30
    }                                                                                                      // 31
                                                                                                           //
    return handleSubmit;                                                                                   //
  }();                                                                                                     //
                                                                                                           //
  QuestionPage.prototype.renderComments = function () {                                                    //
    function renderComments() {                                                                            //
      return this.props.comments.map(function (comment) {                                                  // 34
        return React.createElement(Comment, {                                                              // 34
          key: comment._id,                                                                                // 36
          text: comment.text                                                                               // 37
        });                                                                                                // 35
      });                                                                                                  // 34
    }                                                                                                      // 40
                                                                                                           //
    return renderComments;                                                                                 //
  }();                                                                                                     //
                                                                                                           //
  QuestionPage.prototype.render = function () {                                                            //
    function render() {                                                                                    //
      if (this.props.loading) {                                                                            // 43
        return React.createElement(Loading, null);                                                         // 44
      }                                                                                                    // 45
      return React.createElement(                                                                          // 46
        'div',                                                                                             // 47
        null,                                                                                              // 47
        React.createElement(                                                                               // 48
          'div',                                                                                           // 48
          { className: 'container' },                                                                      // 48
          React.createElement(                                                                             // 49
            'h4',                                                                                          // 49
            null,                                                                                          // 49
            this.props.question.text                                                                       // 49
          ),                                                                                               // 49
          React.createElement(                                                                             // 50
            'p',                                                                                           // 50
            null,                                                                                          // 50
            moment(this.props.question.createdAt).fromNow()                                                // 50
          ),                                                                                               // 50
          React.createElement('br', null),                                                                 // 51
          React.createElement(                                                                             // 52
            'h5',                                                                                          // 52
            null,                                                                                          // 52
            'Comments'                                                                                     // 52
          ),                                                                                               // 52
          React.createElement(                                                                             // 53
            'div',                                                                                         // 53
            { className: 'form-group' },                                                                   // 53
            this.renderComments(),                                                                         // 54
            React.createElement(                                                                           // 55
              'form',                                                                                      // 55
              { className: 'new-comment', onSubmit: this.handleSubmit.bind(this) },                        // 55
              React.createElement('input', {                                                               // 56
                className: 'form-control',                                                                 // 57
                type: 'text',                                                                              // 58
                ref: 'textInput',                                                                          // 59
                placeholder: 'Adicione um comentário',                                                     // 60
                required: true                                                                             // 61
              }),                                                                                          // 56
              React.createElement(                                                                         // 63
                'button',                                                                                  // 63
                { className: 'btn-floating btn-large waves-effect waves-light red', type: 'submit' },      // 63
                React.createElement(                                                                       // 64
                  'i',                                                                                     // 64
                  { className: 'material-icons' },                                                         // 64
                  'add'                                                                                    // 64
                )                                                                                          // 64
              )                                                                                            // 63
            )                                                                                              // 55
          )                                                                                                // 53
        )                                                                                                  // 48
      );                                                                                                   // 47
    }                                                                                                      // 71
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return QuestionPage;                                                                                     //
}(Component);                                                                                              //
                                                                                                           //
QuestionPage.propTypes = propTypes;                                                                        // 74
                                                                                                           //
module.export("default",exports.default=(createContainer(paramsContainer, QuestionPage)));                 // 76
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"QuestionsListPage.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-router","meteor/react-meteor-data","../api/questions","./QuestionItemComponent","./QuestionFormComponent","./LoadingComponent","./FooterComponent",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/QuestionsListPage.jsx                                                                        //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var browserHistory;module.import('react-router',{"browserHistory":function(v){browserHistory=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var Questions;module.import('../api/questions',{"Questions":function(v){Questions=v}});var QuestionItem;module.import('./QuestionItemComponent',{"default":function(v){QuestionItem=v}});var QuestionForm;module.import('./QuestionFormComponent',{"default":function(v){QuestionForm=v}});var Loading;module.import('./LoadingComponent',{"default":function(v){Loading=v}});var Footer;module.import('./FooterComponent',{"default":function(v){Footer=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           // 4
                                                                                                           // 5
                                                                                                           // 6
                                                                                                           // 7
                                                                                                           // 8
                                                                                                           //
var questionsSubscription = Meteor.subscribe('questions');                                                 // 10
var propTypes = {                                                                                          // 11
  user: PropTypes.object,                                                                                  // 12
  solvedQuestions: PropTypes.array,                                                                        // 13
  openQuestions: PropTypes.array,                                                                          // 14
  handleLike: PropTypes.func,                                                                              // 15
  handleSolve: PropTypes.func,                                                                             // 16
  renderSolvedQuestions: PropTypes.func,                                                                   // 17
  renderQuestions: PropTypes.func,                                                                         // 18
  renderLoading: PropTypes.func,                                                                           // 19
  renderList: PropTypes.func                                                                               // 20
};                                                                                                         // 11
                                                                                                           //
var params = function params() {                                                                           // 23
  return {                                                                                                 // 23
    user: Meteor.user(),                                                                                   // 24
    openQuestions: Questions.find({ solvedAt: null }, { sort: { likes: -1 } }).fetch(),                    // 25
    solvedQuestions: Questions.find({ solvedAt: { $ne: null } }, { sort: { likes: -1 } }).fetch(),         // 26
    users: Meteor.users.find().fetch(),                                                                    // 27
    loading: !questionsSubscription.ready()                                                                // 28
  };                                                                                                       // 23
};                                                                                                         // 23
                                                                                                           //
var QuestionsListPage = function (_Component) {                                                            //
  _inherits(QuestionsListPage, _Component);                                                                //
                                                                                                           //
  function QuestionsListPage() {                                                                           //
    _classCallCheck(this, QuestionsListPage);                                                              //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  QuestionsListPage.prototype.componentDidMount = function () {                                            //
    function componentDidMount() {                                                                         //
      if (!this.props.user) {                                                                              // 34
        browserHistory.push('/login');                                                                     // 35
      }                                                                                                    // 36
    }                                                                                                      // 37
                                                                                                           //
    return componentDidMount;                                                                              //
  }();                                                                                                     //
                                                                                                           //
  QuestionsListPage.prototype.componentDidUpdate = function () {                                           //
    function componentDidUpdate() {                                                                        //
      if (!this.props.user) {                                                                              // 40
        browserHistory.push('/login');                                                                     // 41
      }                                                                                                    // 42
    }                                                                                                      // 43
                                                                                                           //
    return componentDidUpdate;                                                                             //
  }();                                                                                                     //
                                                                                                           //
  QuestionsListPage.prototype.handleLike = function () {                                                   //
    function handleLike(questionId) {                                                                      //
      Meteor.call('questions.like', questionId);                                                           // 46
    }                                                                                                      // 47
                                                                                                           //
    return handleLike;                                                                                     //
  }();                                                                                                     //
                                                                                                           //
  QuestionsListPage.prototype.handleSolve = function () {                                                  //
    function handleSolve(questionId) {                                                                     //
      Meteor.call('questions.solve', questionId);                                                          // 50
    }                                                                                                      // 51
                                                                                                           //
    return handleSolve;                                                                                    //
  }();                                                                                                     //
                                                                                                           //
  QuestionsListPage.prototype.renderSolvedQuestions = function () {                                        //
    function renderSolvedQuestions() {                                                                     //
      var _this2 = this;                                                                                   // 53
                                                                                                           //
      return this.props.solvedQuestions.map(function (question) {                                          // 54
        return React.createElement(QuestionItem, {                                                         // 54
          key: question._id,                                                                               // 56
          question: question,                                                                              // 57
          handleLike: _this2.handleLike, handleSolve: _this2.handleSolve                                   // 58
        });                                                                                                // 55
      });                                                                                                  // 54
    }                                                                                                      // 61
                                                                                                           //
    return renderSolvedQuestions;                                                                          //
  }();                                                                                                     //
                                                                                                           //
  QuestionsListPage.prototype.renderQuestions = function () {                                              //
    function renderQuestions() {                                                                           //
      var _this3 = this;                                                                                   // 63
                                                                                                           //
      return this.props.openQuestions.map(function (question) {                                            // 64
        return React.createElement(QuestionItem, {                                                         // 64
          user: _this3.props.users.find(function (user) {                                                  // 66
            return user._id == question.userId;                                                            // 66
          }),                                                                                              // 66
          key: question._id,                                                                               // 67
          question: question,                                                                              // 68
          handleLike: _this3.handleLike,                                                                   // 69
          handleSolve: _this3.handleSolve                                                                  // 70
        });                                                                                                // 65
      });                                                                                                  // 64
    }                                                                                                      // 73
                                                                                                           //
    return renderQuestions;                                                                                //
  }();                                                                                                     //
                                                                                                           //
  QuestionsListPage.prototype.renderSolvedQuestions = function () {                                        //
    function renderSolvedQuestions() {                                                                     //
      var _this4 = this;                                                                                   // 75
                                                                                                           //
      return this.props.solvedQuestions.map(function (question) {                                          // 76
        return React.createElement(QuestionItem, {                                                         // 76
          user: _this4.props.users.find(function (user) {                                                  // 78
            return user._id == question.userId;                                                            // 78
          }),                                                                                              // 78
          key: question._id, question: question,                                                           // 79
          handleLike: _this4.handleLike,                                                                   // 80
          handleSolve: _this4.handleSolve                                                                  // 81
        });                                                                                                // 77
      });                                                                                                  // 76
    }                                                                                                      // 84
                                                                                                           //
    return renderSolvedQuestions;                                                                          //
  }();                                                                                                     //
                                                                                                           //
  QuestionsListPage.prototype.renderLoading = function () {                                                //
    function renderLoading() {                                                                             //
      return React.createElement(Loading, null);                                                           // 87
    }                                                                                                      // 90
                                                                                                           //
    return renderLoading;                                                                                  //
  }();                                                                                                     //
                                                                                                           //
  QuestionsListPage.prototype.renderList = function () {                                                   //
    function renderList() {                                                                                //
      if (this.props.loading) {                                                                            // 93
        return this.renderLoading();                                                                       // 94
      }                                                                                                    // 95
      return React.createElement(                                                                          // 96
        'div',                                                                                             // 97
        null,                                                                                              // 97
        React.createElement(                                                                               // 98
          'h5',                                                                                            // 98
          null,                                                                                            // 98
          'Open Questions'                                                                                 // 98
        ),                                                                                                 // 98
        React.createElement(                                                                               // 99
          'table',                                                                                         // 99
          { className: 'centered' },                                                                       // 99
          React.createElement(                                                                             // 100
            'thead',                                                                                       // 100
            null,                                                                                          // 100
            React.createElement(                                                                           // 101
              'tr',                                                                                        // 101
              null,                                                                                        // 101
              React.createElement(                                                                         // 102
                'th',                                                                                      // 102
                { 'data-field': 'id' },                                                                    // 102
                'Name'                                                                                     // 102
              ),                                                                                           // 102
              React.createElement(                                                                         // 103
                'th',                                                                                      // 103
                { 'data-field': 'name' },                                                                  // 103
                'Likes'                                                                                    // 103
              ),                                                                                           // 103
              React.createElement(                                                                         // 104
                'th',                                                                                      // 104
                { 'data-field': 'price' },                                                                 // 104
                'Solved?'                                                                                  // 104
              )                                                                                            // 104
            )                                                                                              // 101
          ),                                                                                               // 100
          React.createElement(                                                                             // 107
            'tbody',                                                                                       // 107
            null,                                                                                          // 107
            this.renderQuestions()                                                                         // 108
          )                                                                                                // 107
        ),                                                                                                 // 99
        React.createElement(                                                                               // 112
          'h5',                                                                                            // 112
          null,                                                                                            // 112
          'Closed Questions'                                                                               // 112
        ),                                                                                                 // 112
        React.createElement(                                                                               // 113
          'table',                                                                                         // 113
          { className: 'centered' },                                                                       // 113
          React.createElement(                                                                             // 114
            'thead',                                                                                       // 114
            null,                                                                                          // 114
            React.createElement(                                                                           // 115
              'tr',                                                                                        // 115
              null,                                                                                        // 115
              React.createElement(                                                                         // 116
                'th',                                                                                      // 116
                { 'data-field': 'id' },                                                                    // 116
                'Name'                                                                                     // 116
              ),                                                                                           // 116
              React.createElement(                                                                         // 117
                'th',                                                                                      // 117
                { 'data-field': 'name' },                                                                  // 117
                'Likes'                                                                                    // 117
              ),                                                                                           // 117
              React.createElement(                                                                         // 118
                'th',                                                                                      // 118
                { 'data-field': 'price' },                                                                 // 118
                'Solved?'                                                                                  // 118
              )                                                                                            // 118
            )                                                                                              // 115
          ),                                                                                               // 114
          React.createElement(                                                                             // 121
            'tbody',                                                                                       // 121
            null,                                                                                          // 121
            this.renderSolvedQuestions()                                                                   // 122
          )                                                                                                // 121
        )                                                                                                  // 113
      );                                                                                                   // 97
    }                                                                                                      // 128
                                                                                                           //
    return renderList;                                                                                     //
  }();                                                                                                     //
                                                                                                           //
  QuestionsListPage.prototype.render = function () {                                                       //
    function render() {                                                                                    //
      return React.createElement(                                                                          // 131
        'div',                                                                                             // 132
        null,                                                                                              // 132
        React.createElement(                                                                               // 133
          'div',                                                                                           // 133
          { className: 'section no-pad-bot', id: 'index-banner' },                                         // 133
          React.createElement(                                                                             // 134
            'div',                                                                                         // 134
            { className: 'container' },                                                                    // 134
            React.createElement(                                                                           // 135
              'h1',                                                                                        // 135
              { className: 'header center orange-text' },                                                  // 135
              'Questions?'                                                                                 // 135
            ),                                                                                             // 135
            React.createElement(QuestionForm, {                                                            // 136
              placeholderName: 'Add a question ...',                                                       // 137
              repository: 'questions.create',                                                              // 138
              formName: 'new-question'                                                                     // 139
            }),                                                                                            // 136
            this.renderList()                                                                              // 141
          )                                                                                                // 134
        ),                                                                                                 // 133
        React.createElement(Footer, null)                                                                  // 144
      );                                                                                                   // 132
    }                                                                                                      // 147
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return QuestionsListPage;                                                                                //
}(Component);                                                                                              //
                                                                                                           //
QuestionsListPage.propTypes = propTypes;                                                                   // 150
                                                                                                           //
module.export("default",exports.default=(QuestionsListPage));                                              // 152
module.export("default",exports.default=(createContainer(params, QuestionsListPage)));                     // 153
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"SignUpFormComponent.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","react-router",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/SignUpFormComponent.jsx                                                                      //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Link;module.import('react-router',{"Link":function(v){Link=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           //
var propTypes = {                                                                                          // 5
  handleSubmit: PropTypes.func                                                                             // 6
};                                                                                                         // 5
                                                                                                           //
var SignUpFormComponent = function (_Component) {                                                          //
  _inherits(SignUpFormComponent, _Component);                                                              //
                                                                                                           //
  function SignUpFormComponent() {                                                                         //
    _classCallCheck(this, SignUpFormComponent);                                                            //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  SignUpFormComponent.prototype.handleSubmit = function () {                                               //
    function handleSubmit(event) {                                                                         //
      event.preventDefault();                                                                              // 12
      var email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim();                                 // 13
      var name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();                                   // 14
      var password = ReactDOM.findDOMNode(this.refs.passwordInput).value.trim();                           // 15
      var profile = {                                                                                      // 16
        name: name                                                                                         // 17
      };                                                                                                   // 16
                                                                                                           //
      Accounts.createUser({                                                                                // 20
        email: email,                                                                                      // 21
        password: password,                                                                                // 22
        profile: profile                                                                                   // 23
      }, function (err) {                                                                                  // 20
        console.log("Registrei");                                                                          // 25
      });                                                                                                  // 26
    }                                                                                                      // 28
                                                                                                           //
    return handleSubmit;                                                                                   //
  }();                                                                                                     //
                                                                                                           //
  SignUpFormComponent.prototype.render = function () {                                                     //
    function render() {                                                                                    //
      return React.createElement(                                                                          // 31
        'div',                                                                                             // 32
        null,                                                                                              // 32
        React.createElement(                                                                               // 33
          'div',                                                                                           // 33
          { className: 'container' },                                                                      // 33
          React.createElement(                                                                             // 34
            'div',                                                                                         // 34
            { className: 'well' },                                                                         // 34
            React.createElement(                                                                           // 35
              'div',                                                                                       // 35
              { className: 'form-group' },                                                                 // 35
              React.createElement(                                                                         // 36
                'h2',                                                                                      // 36
                null,                                                                                      // 36
                'Create an account'                                                                        // 36
              ),                                                                                           // 36
              React.createElement(                                                                         // 37
                'form',                                                                                    // 37
                { className: 'login', onSubmit: this.handleSubmit.bind(this) },                            // 37
                React.createElement('input', {                                                             // 38
                  className: 'form-control',                                                               // 39
                  type: 'text',                                                                            // 40
                  ref: 'emailInput',                                                                       // 41
                  placeholder: 'email@example.com',                                                        // 42
                  required: true                                                                           // 43
                }),                                                                                        // 38
                React.createElement('input', {                                                             // 45
                  className: 'form-control',                                                               // 46
                  type: 'text',                                                                            // 47
                  ref: 'nameInput',                                                                        // 48
                  placeholder: 'Your Name',                                                                // 49
                  required: true                                                                           // 50
                }),                                                                                        // 45
                React.createElement('input', {                                                             // 52
                  className: 'form-control',                                                               // 53
                  type: 'password',                                                                        // 54
                  ref: 'passwordInput',                                                                    // 55
                  placeholder: '*************',                                                            // 56
                  required: true                                                                           // 57
                }),                                                                                        // 52
                React.createElement(                                                                       // 59
                  'button',                                                                                // 59
                  { type: 'submit', className: 'btn' },                                                    // 59
                  'Register'                                                                               // 59
                )                                                                                          // 59
              ),                                                                                           // 37
              React.createElement('br', null),                                                             // 61
              React.createElement(                                                                         // 62
                Link,                                                                                      // 62
                { to: '/login' },                                                                          // 62
                'Already have an account?'                                                                 // 62
              )                                                                                            // 62
            )                                                                                              // 35
          )                                                                                                // 34
        )                                                                                                  // 33
      );                                                                                                   // 32
    }                                                                                                      // 68
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return SignUpFormComponent;                                                                              //
}(Component);                                                                                              //
                                                                                                           //
SignUpFormComponent.propTypes = propTypes;                                                                 // 71
                                                                                                           //
module.export("default",exports.default=(SignUpFormComponent));                                            // 73
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"SignUpPage.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","react-router","meteor/react-meteor-data","./SignUpFormComponent",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/SignUpPage.jsx                                                                               //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Link,browserHistory;module.import('react-router',{"Link":function(v){Link=v},"browserHistory":function(v){browserHistory=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var SignUpForm;module.import('./SignUpFormComponent',{"default":function(v){SignUpForm=v}});
                                                                                                           //
                                                                                                           //
                                                                                                           // 1
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           // 4
                                                                                                           // 5
                                                                                                           //
var propTypes = {                                                                                          // 7
  user: PropTypes.object                                                                                   // 8
};                                                                                                         // 7
                                                                                                           //
var params = function params() {                                                                           // 11
  return {                                                                                                 // 11
    user: Meteor.user()                                                                                    // 12
  };                                                                                                       // 11
};                                                                                                         // 11
                                                                                                           //
var SignUpPage = function (_Component) {                                                                   //
  _inherits(SignUpPage, _Component);                                                                       //
                                                                                                           //
  function SignUpPage() {                                                                                  //
    _classCallCheck(this, SignUpPage);                                                                     //
                                                                                                           //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                            //
  }                                                                                                        //
                                                                                                           //
  SignUpPage.prototype.componentDidMount = function () {                                                   //
    function componentDidMount() {                                                                         //
      if (this.props.user) {                                                                               // 18
        browserHistory.push('/');                                                                          // 19
      }                                                                                                    // 20
    }                                                                                                      // 21
                                                                                                           //
    return componentDidMount;                                                                              //
  }();                                                                                                     //
                                                                                                           //
  SignUpPage.prototype.componentDidUpdate = function () {                                                  //
    function componentDidUpdate() {                                                                        //
      if (this.props.user) {                                                                               // 23
        browserHistory.push('/');                                                                          // 24
      }                                                                                                    // 25
    }                                                                                                      // 26
                                                                                                           //
    return componentDidUpdate;                                                                             //
  }();                                                                                                     //
                                                                                                           //
  SignUpPage.prototype.render = function () {                                                              //
    function render() {                                                                                    //
      return React.createElement(SignUpForm, null);                                                        // 29
    }                                                                                                      // 32
                                                                                                           //
    return render;                                                                                         //
  }();                                                                                                     //
                                                                                                           //
  return SignUpPage;                                                                                       //
}(Component);                                                                                              //
                                                                                                           //
SignUpPage.propTypes = propTypes;                                                                          // 35
                                                                                                           //
module.export("default",exports.default=(SignUpPage));                                                     // 37
module.export("default",exports.default=(createContainer(params, SignUpPage)));                            // 38
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},{"extensions":[".js",".json",".html",".jsx",".css"]});
require("./client/template.main.js");
require("./client/Main.jsx");