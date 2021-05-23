import { Component, OnInit } from '@angular/core';
import { GetWordsService } from './service/get-words.service';
import { SpeechService } from 'src/app/service/speech.service';
import _72external from "../assets/json/72external.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EnglishWords';
  allWords: any;
  currentModuleIndex = 0;
  currentModule: any;
  currentWords: any;
  currentWordIndex = 0;
  currentWord: any;
  totalWords = 0;
  correctCount = 0;
  wrongCount = 0;
  wrongWords = [];
  constructor(private getWordsService: GetWordsService, private speech: SpeechService) { }
  ngOnInit(): void {
    this.allWords = _72external;
    this.goToModule(0);
    // this.getWordsService.getJson().subscribe(data => {
    //   console.log(data);
    //   this.allWords = data;
    //   this.goToModule(0)
    // })
  }

  english: string = "";
  phoneticSymbols: string = 'ps';
  chinese: string = "苹果";
  answer: string = "";
  isCompleted: boolean = false;
  isDisabled = false;

  previousWord() {
    this.currentWordIndex -= 1;
    if (this.currentWordIndex < 0) {
      this.currentWordIndex = 0;
    }
    this.goToWord(this.currentWordIndex);
  }

  nextWord() {
    this.currentWordIndex += 1;
    if (this.currentWordIndex >= this.currentWords.length) {
      this.currentWordIndex = this.currentWords.length - 1;
    }
    this.goToWord(this.currentWordIndex);
  }

  answerChanged(value) {
    this.currentWord.answer = value.toString().trim();
    this.isCompleted = this.checkCompleted();
  }

  goToWord(index) {
    this.currentWord = this.currentWords[index];
    this.english = this.currentWord['English'];
    this.phoneticSymbols = this.currentWord['PhoneticSymbols'];
    this.chinese = this.currentWord['Chinese'];
    this.answer = this.currentWord['answer'];
    this.speech.Speak(this.english);
  }
  checkCompleted(): boolean {
    var count = 0;
    this.currentWords.forEach(word => {
      if (word.answer === undefined) {
      }
      else if (word.answer.length > 0) {
        count++;
      }
    });

    return (count === this.totalWords)
  }

  nextModule() {
    this.isCompleted = false;
    this.isDisabled = false;
    this.currentModuleIndex += 1;
    console.log("this.currentModuleIndex = ", this.currentModuleIndex)
    if (this.currentModuleIndex === this.allWords.length) {
      this.currentModuleIndex = this.allWords.length - 1;
    }
    this.goToModule(this.currentModuleIndex);
  }

  previousModule() {
    this.isCompleted = false;
    this.isDisabled = false;
    this.currentModuleIndex -= 1;
    if (this.currentModuleIndex < 0) {
      this.currentModuleIndex = 0;
    }
    this.goToModule(this.currentModuleIndex);
  }

  goToModule(index) {
    this.wrongWords = [];
    this.correctCount = 0
    this.wrongCount = 0;
    this.currentWordIndex = 0;
    this.currentModule = this.allWords[index]['Name'];

    this.allWords[index]['Words'].forEach(word => {
      if (word.answer === undefined) {
        word.answer = "";
      }
    });

    this.currentWords = this.allWords[index]['Words'];
    this.totalWords = this.currentWords.length;
    this.goToWord(this.currentWordIndex);
  }

  completed() {
    this.isDisabled = true;
    this.wrongWords = [];
    let correct = 0;
    let wrong = 0;
    this.currentWords.forEach(word => {
      if (word['answer'] === word['English']) {
        correct += 1;
      }
      else {
        wrong += 1;
        this.wrongWords.push(word)
      }
    });

    this.correctCount = correct;
    this.wrongCount = wrong;
  }

  reTest() {
    this.isCompleted = false;
    this.isDisabled = false;
    this.currentWords = this.wrongWords;

    this.currentWords.forEach(word => {
      word['answer'] = "";
    });

    this.wrongWords = [];
    this.correctCount = 0
    this.wrongCount = 0
    this.currentWordIndex = 0;
    this.totalWords = this.currentWords.length;
    this.goToWord(this.currentWordIndex);
  }
}
