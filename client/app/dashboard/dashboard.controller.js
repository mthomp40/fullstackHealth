'use strict';
var model = {
  surveyNumber: 1,
  questions: [{
    questionNumber: 1,
    category: "Health Literacy Assessment",
    title: "Reading Level",
    questionText: "How often do you need to have somebody help you when you read instructions, pamphlets, " +
    "or other written material from your doctor or pharmacy?",
    questionType: "likert",
    likertOptions: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    points: [1, 2, 3, 4, 5]
  }, {
    questionNumber: 2,
    category: "Demographics and History",
    title: "Gender",
    questionText: "Which gender do you identify as?",
    questionType: "likert",
    likertOptions: ["Male", "Female"],
    points: [3, 0]
  }, {
    questionNumber: 3,
    category: "Demographics and History",
    title: "Age",
    questionText: "What is your age?",
    questionType: "likert",
    likertOptions: ["Younger than 30 years", "30-39 years", "40-49 years", "50-59 years", "60 years or older"],
    points: [0, 2, 4, 6, 8]
  }, {
    questionNumber: 4,
    category: "Demographics and History",
    title: "Height",
    questionText: "How tall are you?",
    questionType: "Numeric",
    measurements: ["cm", "feet/inches"],
    ruleType: "rulesDefault",
    ranges: [0, 25, 30],
    points: [0, 4, 8]
  }, {
    questionNumber: 5,
    category: "Demographics and History",
    title: "Weight",
    questionText: "How much do you weigh?",
    questionType: "Numeric",
    measurements: ["kg", "stone/pounds"],
    ruleType: "rulesDefault",
    ranges: [0, 25, 30],
    points: [0, 4, 8]
  }, {
    questionNumber: 6,
    category: "Demographics and History",
    title: "Waist Circumference",
    questionText: "What is the circumference of your waist?",
    questionType: "Numeric",
    measurements: ["cm", "inches"],
    maleRanges: [0, 90, 100],
    malePoints: [0, 4, 8],
    femaleRanges: [0, 80, 90],
    femalePoints: [0, 4, 8]
  }, {
    questionNumber: 7,
    category: "Demographics and History",
    title: "Diabetes History",
    questionText: "Do you have a family history of diabetes (that is, have any of your parents or siblings" +
    " been diagnosed with having diabetes)?",
    questionType: "likert",
    likertOptions: ["yes", "no"],
    points: [3, 0]
  }]
};

angular.module('fullstackHealthApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.surveys = model;
  });
