import { Component, OnInit } from '@angular/core';
import { QuestionAnswer } from '../Q&A';
import { Questions } from '../questions';


@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {
  questionAndAnswer = new QuestionAnswer();
  questionsObject = new Questions();

  questions;
  isWelcome = true;
  isFeed = false;
  isAa = false;
  isOTHER = false;
  isHR = false;
  isFI = false;
  isLD = false;
  isIT = false;
  isFA = false;
  showOther = false;
  showHr = false;
  showFi = false;
  showLd = false;
  showIt = false;
  showFa = false;
  questionsLength: number;
  hrQuestionsLength: number;
  financeQuestionsLength: number;
  itQuestionsLength: number;
  ldQuestionsLength: number;
  faQuestionsLength: number;
  //  public isSelected;
  //numberOfQuestions = new Array();

  // hrQuestions = [
  //   { value: '0', viewValue: 'Where is Courier point?' },
  //   { value: '1', viewValue: 'Where is TT table?' },
  //   { value: '2', viewValue: 'Where is Cafeteria?' }
  // ];

  // financeQuestions = [
  //   { value: '0', viewValue: 'How do I file tax?' },
  //   { value: '1', viewValue: 'How to reimburse medical bills?' }
  // ];
  // itQuestions = [
  //   { value: '0', viewValue: 'How do I file tax?' },
  //   { value: '1', viewValue: 'How to reimburse medical bills?' }
  // ];
  // ldQuestions = [
  //   { value: '0', viewValue: 'How do I file tax?' },
  //   { value: '1', viewValue: 'How to reimburse medical bills?' }
  // ];
  hrQuestions = [];
  financeQuestions = [];
  itQuestions = [];
  ldQuestions = [];
  faQuestions = [];
  // allQuestions = [
  //   { value: '0', viewValue: 'How do I file tax?' },
  //   { value: '1', viewValue: 'How to reimburse medical bills?' },
  //   { value: '2', viewValue: 'Where is Courier point?' },
  //   { value: '3', viewValue: 'Where is TT table?' },
  //   { value: '4', viewValue: 'Where is Cafeteria?' }
  // ];
  // catagories = [
  //   { value: '0', viewValue: 'HR' },
  //   { value: '1', viewValue: 'Finance' },
  //   { value: '2', viewValue: 'IT' },
  //   { value: '3', viewValue: 'L&D' },
  //   { value: '4', viewValue: 'Facility' },
  // ];



  constructor() { }

  ngOnInit() {

    this.questions =
      {
        allQuestions: [
          { value: '0', viewValue: 'How do I file tax?' },
          { value: '1', viewValue: 'How to reimburse medical bills?', },
          { value: '2', viewValue: 'Where is Courier point?' },
          { value: '3', viewValue: 'Where is TT table?' },
          { value: '4', viewValue: 'Where is Cafeteria?' },
          { value: '5', viewValue: 'How can I burn them all?' },
          { value: '6', viewValue: 'Where do I find a dragon?' },
          { value: '7', viewValue: 'Where do I find white walkers?' },
          { value: '8', viewValue: 'Where is Dragonstone?' },
          { value: '9', viewValue: 'Where is kingslanding?' }
        ],
        catagories: [
          { value: 0, viewValue: 'HR' },
          { value: 1, viewValue: 'Finance' },
          { value: 2, viewValue: 'IT' },
          { value: 3, viewValue: 'L&D' },
          { value: 4, viewValue: 'Facility' }
        ]
      }
  }

  toggleF() {
    this.isFeed = true;
    this.isWelcome = false;
    this.isAa = false;
    this.showHr = false;
    this.showFi = false;
    this.showLd = false;
    this.showIt = false;
    this.showFa = false;
    this.isOTHER = false;
    this.showOther = false;
    this.isHR = false;
    this.isFI = false;
    this.isLD = false;
    this.isIT = false;
    this.isFA = false;
  }


  toggleA() {
    this.isAa = true;
    this.isWelcome = false;
    this.isFeed = false;
    this.showHr = false;
    this.showFi = false;
    this.showOther = false;
    this.isOTHER = !this.isOTHER;
    this.isHR = !this.isHR;
    this.isFI = !this.isFI;
    this.isLD = !this.isLD;
    this.isIT = !this.isIT;
    this.isFA = !this.isFA;
    this.questionsLength = this.questions.allQuestions.length;
    this.hrQuestionsLength = this.hrQuestions.length;
    this.financeQuestionsLength = this.financeQuestions.length;
    this.itQuestionsLength = this.itQuestions.length;
    this.ldQuestionsLength = this.ldQuestions.length;
    this.faQuestionsLength = this.faQuestions.length;

  }
  showOTHERS() {
    this.showOther = true;
    this.showHr = false;
    this.showFi = false;
    this.showLd = false;
    this.showIt = false;
    this.showFa = false;
  }

  showHR() {
    this.showHr = true;
    this.showFi = false;
    this.showLd = false;
    this.showIt = false;
    this.showFa = false;
    this.showOther = false;

  }

  showFI() {
    this.showHr = false;
    this.showFi = true;
    this.showLd = false;
    this.showIt = false;
    this.showFa = false;
    this.showOther = false;
  }

  showLD() {
    this.showHr = false;
    this.showFi = false;
    this.showLd = true;
    this.showIt = false;
    this.showFa = false;
    this.showOther = false;
  }
  showIT() {
    this.showHr = false;
    this.showFi = false;
    this.showLd = false;
    this.showIt = true;
    this.showFa = false;
    this.showOther = false;
  }
  showFA() {
    this.showHr = false;
    this.showFi = false;
    this.showLd = false;
    this.showIt = false;
    this.showFa = true;
    this.showOther = false;
  }

  feed() {
    alert("Thanks for submitting! Data :" + JSON.stringify(this.questionAndAnswer));
  }
  tagThemAll(questionsObject) {
    alert(JSON.stringify(questionsObject));

    for (let i = 0; i < this.questionsObject.questions.length; i++) {
      for (let j = 0; j < this.questions.allQuestions.length; j++) {
        if (this.questionsObject.questions[i] === this.questions.allQuestions[j].viewValue) {
          this.questions.allQuestions.splice(j, 1);
          this.questionsLength = this.questions.allQuestions.length;
          if (this.questionsObject.id === 0) {
            this.hrQuestions.push(this.questionsObject.questions[i]);
          }
          if (this.questionsObject.id === 1) {
            this.financeQuestions.push(this.questionsObject.questions[i]);
          }
          if (this.questionsObject.id === 2) {
            this.itQuestions.push(this.questionsObject.questions[i]);
          }
          if (this.questionsObject.id === 3) {
            this.ldQuestions.push(this.questionsObject.questions[i]);
          }
          if (this.questionsObject.id === 4) {
            this.faQuestions.push(this.questionsObject.questions[i]);
          }
        }
      }
      // if (this.questionsObject.id === 0) {
      //     this.hrQuestions.push(this.questionsObject.questions[i]);
      // }
      // if (this.questionsObject.id === 1) {
      //   for (let i = 0; i < this.questionsObject.questions.length; i++)
      //     this.financeQuestions.push(this.questionsObject.questions[i]);
      // }
      // if (this.questionsObject.id === 2) {
      //   for (let i = 0; i < this.questionsObject.questions.length; i++)
      //     this.itQuestions.push(this.questionsObject.questions[i]);
      // }
      // if (this.questionsObject.id === 3) {
      //   for (let i = 0; i < this.questionsObject.questions.length; i++)
      //     this.ldQuestions.push(this.questionsObject.questions[i]);
      // }
      // if (this.questionsObject.id === 4) {
      //   for (let i = 0; i < this.questionsObject.questions.length; i++)
      //     this.faQuestions.push(this.questionsObject.questions[i]);
      // }
      this.hrQuestionsLength = this.hrQuestions.length;
      this.financeQuestionsLength = this.financeQuestions.length;
      this.itQuestionsLength = this.itQuestions.length;
      this.ldQuestionsLength = this.ldQuestions.length;
      this.faQuestionsLength = this.faQuestions.length;
    }
    // if (this.questions.allQuestions[i].viewValue === this.questionsObject.questions[i]) {
    //   // alert(question);
    //   this.questions.allQuestions.splice(i, this.questionsObject.questions.length);
    //   this.questionsLength = this.questions.allQuestions.length;
    //   alert(typeof this.questionsObject.id + " " + this.questionsObject.id);

    //   if (this.questionsObject.id === 0) {
    //     for (let i = 0; i < this.questionsObject.questions.length; i++)
    //       this.hrQuestions.push(this.questionsObject.questions[i]);
    //   }
    //   if (this.questionsObject.id === 1) {
    //     for (let i = 0; i < this.questionsObject.questions.length; i++)
    //       this.financeQuestions.push(this.questionsObject.questions[i]);
    //   }
    //   if (this.questionsObject.id === 2) {
    //     for (let i = 0; i < this.questionsObject.questions.length; i++)
    //       this.itQuestions.push(this.questionsObject.questions[i]);
    //   }
    //   if (this.questionsObject.id === 3) {
    //     for (let i = 0; i < this.questionsObject.questions.length; i++)
    //       this.ldQuestions.push(this.questionsObject.questions[i]);
    //   }
    //   if (this.questionsObject.id === 4) {
    //     for (let i = 0; i < this.questionsObject.questions.length; i++)
    //       this.faQuestions.push(this.questionsObject.questions[i]);
    //   }

    //   this.hrQuestionsLength = this.hrQuestions.length;
    //   this.financeQuestionsLength = this.financeQuestions.length;
    //   this.itQuestionsLength = this.itQuestions.length;
    //   this.ldQuestionsLength = this.ldQuestions.length;
    //   this.faQuestionsLength = this.faQuestions.length;
      this.questionsObject.questions.splice(0, this.questionsObject.questions.length)

    //}
    // }
  }

  onChange(question) {
    var selectedList = false;
    this.questions.allQuestions.filter(function (e) {
      if (e.selected === true) {
        selectedList = true;
      }
    });
    this.questionsObject.isSelected = selectedList;
    if (this.questionsObject.isSelected) {
      this.questionsObject.questions.push(question.viewValue);
    }
  }
}
