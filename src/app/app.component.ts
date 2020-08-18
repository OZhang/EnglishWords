import { Component, OnInit } from '@angular/core';
import { GetWordsService } from './service/get-words.service';

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
  correctCount = "";
  wrongCount = "";
  wrongWords = [];
  constructor(private getWordsService: GetWordsService) { }
  ngOnInit(): void {
    this.getWordsService.getJson().subscribe(data => {
      console.log(data);
      this.allWords = data;
      this.goToModule(0)
    })
  }

  english: string = "apple";
  phoneticSymbols: string = 'ps';
  chinese: string = "苹果";
  answer: string = "";
  isCompleted: boolean = false;
  isDisabled = false;
  goNextWord(value) {
    // console.log("goNextWord = ", value);
    this.allWords[this.currentModuleIndex]['Words'][this.currentWordIndex]['answer'] = value;
    // console.log("this.allWords[this.currentModuleIndex]['Words'][this.currentWordIndex]['answer']=",
    //   this.allWords[this.currentModuleIndex]['Words'][this.currentWordIndex]['answer']);
    console.log('this.currentWordIndex = ', this.currentWordIndex);
    this.currentWordIndex += 1;
    if (this.currentWordIndex >= this.currentWords.length) {
      this.currentWordIndex = this.currentWords.length - 1;
    }
    console.log('this.currentWordIndex = ', this.currentWordIndex);

    this.goToWord(this.currentWordIndex);
  }

  goPreviousWord(value) {
    console.log("goNextWord = ", value);
    this.allWords[this.currentModuleIndex]['Words'][this.currentWordIndex]['answer'] = value;
    this.currentWord['answer'] = value;
    console.log("this.allWords[this.currentModuleIndex]['Words'][this.currentWordIndex]['answer']=",
      this.allWords[this.currentModuleIndex]['Words'][this.currentWordIndex]['answer']);
    this.currentWordIndex -= 1;
    if (this.currentWordIndex < 0) {
      this.currentWordIndex = 0;
    }
    this.goToWord(this.currentWordIndex);
  }

  goToWord(index) {
    this.currentWord = this.currentWords[index];
    console.log("this.currentWord = ", this.currentWord)
    this.english = this.currentWord['English'];
    this.phoneticSymbols = this.currentWord['PhoneticSymbols'];
    this.chinese = this.currentWord['Chinese'];
    if (this.currentWord['answer'] == undefined) {
      this.currentWord['answer'] = '';
    }
    this.answer = this.currentWord['answer'];

    this.isCompleted = this.checkCompleted();
    console.log("this.isCompleted = ", this.isCompleted)
  }
  checkCompleted(): boolean {
    var count = 0;
    this.currentWords.forEach(word => {
      
      if (word['answer'].toString().length > 0) {
        count++;
      }

      console.log("word['answer'].toString().length = ",word['answer'].toString().length);
      console.log("count = ", count)

    });
    console.log("count = ", count)
    console.log("totalWords = ", this.totalWords)

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
    this.correctCount = "";
    this.wrongCount = "";
    this.currentWordIndex = 0;
    console.log('go to module = ', index)
    this.currentModule = this.allWords[index]['Name'];
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
      console.log("word['answer'] =", word['answer'])
      if (word['answer'] === word['English']) {
        correct += 1;
      }
      else {
        wrong += 1;
        this.wrongWords.push(word)
      }
    });

    this.correctCount = correct.toString();
    this.wrongCount = wrong.toString();
  }
}
