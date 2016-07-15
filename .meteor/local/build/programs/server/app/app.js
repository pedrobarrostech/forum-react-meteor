var require = meteorInstall({"imports":{"api":{"questions.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// imports/api/questions.js                                               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
module.export({Questions:function(){return Questions},QuestionComments:function(){return QuestionComments}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                          //
var Questions = new Mongo.Collection('questions');                        // 3
var QuestionComments = new Mongo.Collection('question_comments');         // 4
                                                                          //
Questions.allow({                                                         // 6
  update: function update(userId, doc, fieldNames, modifier) {            // 7
    return false;                                                         // 8
  },                                                                      // 9
  insert: function insert(userId, doc) {                                  // 10
    return false;                                                         // 11
  },                                                                      // 12
  remove: function remove(userId, doc) {                                  // 13
    return false;                                                         // 14
  }                                                                       // 15
});                                                                       // 6
                                                                          //
Meteor.methods({                                                          // 18
  'questions.create': function questionsCreate(text) {                    // 19
    if (!this.userId) {                                                   // 20
      throw new Meteor.Error('not-authorized');                           // 21
    }                                                                     // 22
    Questions.insert({                                                    // 23
      text: text,                                                         // 24
      userId: this.userId,                                                // 25
      createdAt: new Date() });                                           // 26
  },                                                                      // 28
  // current time                                                         //
  'questions.like': function questionsLike(questionId) {                  // 29
    Questions.update({ _id: questionId }, {                               // 30
      $inc: {                                                             // 31
        likes: 1                                                          // 32
      }                                                                   // 31
    });                                                                   // 30
  },                                                                      // 35
  'questions.solve': function questionsSolve(questionId) {                // 36
    Questions.update({ _id: questionId }, {                               // 37
      $set: {                                                             // 38
        solvedAt: new Date()                                              // 39
      }                                                                   // 38
    });                                                                   // 37
  },                                                                      // 42
  'questions.comment': function questionsComment(questionId, text) {      // 43
    QuestionComments.insert({                                             // 44
      questionId: questionId,                                             // 45
      text: text,                                                         // 46
      createdAt: new Date() });                                           // 47
    // current time                                                       //
    Questions.update({ _id: questionId }, {                               // 49
      $inc: {                                                             // 50
        commentsCount: 1                                                  // 51
      }                                                                   // 50
    });                                                                   // 49
    // Questions.update({_id: questionId}, {                              //
    // });                                                                //
  }                                                                       // 56
                                                                          //
});                                                                       // 18
                                                                          //
if (Meteor.isServer) {                                                    // 60
  Meteor.publishComposite('questions', function () {                      // 61
    return {                                                              // 62
      find: function find() {                                             // 63
        return Questions.find({}, {                                       // 64
          fields: {                                                       // 65
            userId: 1,                                                    // 66
            text: 1,                                                      // 67
            likes: 1,                                                     // 68
            commentsCount: 1,                                             // 69
            solvedAt: 1                                                   // 70
          }                                                               // 65
        });                                                               // 64
      },                                                                  // 73
      children: [{                                                        // 74
        find: function find(question) {                                   // 76
          return Meteor.users.find({ _id: question.userId }, {            // 77
            fields: {                                                     // 78
              profile: 1                                                  // 79
            }                                                             // 78
          });                                                             // 77
        }                                                                 // 82
      }]                                                                  // 75
    };                                                                    // 62
  });                                                                     // 86
  Meteor.publishComposite('question', function (questionId) {             // 87
    return {                                                              // 88
      find: function find() {                                             // 89
        return Questions.find({ _id: questionId }, {});                   // 90
      },                                                                  // 91
      children: [{                                                        // 92
        find: function find(question) {                                   // 94
          return QuestionComments.find({ questionId: question._id }, {});
        }                                                                 // 96
      }]                                                                  // 93
    };                                                                    // 88
  });                                                                     // 100
}                                                                         // 101
////////////////////////////////////////////////////////////////////////////

}]}},"server":{"main.js":["meteor/meteor","../imports/api/questions.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// server/main.js                                                         //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});module.import('../imports/api/questions.js');
                                                                          // 2
                                                                          //
Meteor.startup(function () {                                              // 4
  // code to run on server at startup                                     //
});                                                                       // 6
////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".jsx"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
