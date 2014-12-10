'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = Schema({
  questionNumber: Number,
  category: String,                   // Demographics and history
  title: String,                      // Weight
  questionText: String,               // What is your weight?
  questionType: String,              // Likert or Numeric
  likertOptions: [String],                  // ["Yes","No"] (Likert only)
  measurements: [String],             // ["Kilograms", "Stone and Pounds"]
  ruleType: String,                    // {rulesDefault,rulesMale, rulesFemale
  points: [Number],                    // [2,0] (Likert or Numeric)
  malePoints: [Number],                    // [2,0] (Likert or Numeric)
  femalePoints: [Number],                    // [2,0] (Likert or Numeric)
  ranges: [Number],
  maleRanges: [Number],
  femaleRanges: [Number]                    /* [0,25,30] -- explanation: wieght between 0 and 25 score 0 points,
   * 25-30 scores 4, 30+ scores 8 */
});

var SurveySchema = Schema({
  version: String,
  questions: [QuestionSchema]
});

module.exports = mongoose.model('Survey', SurveySchema);
module.exports = mongoose.model('Question', QuestionSchema);
