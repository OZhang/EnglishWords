import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
  @ViewChild('myInput', { static: false }) input: ElementRef;

  @Input() English: string;
  @Input() PhoneticSymbols: string;
  @Input() Chinese: string;
  @Input() Answer: string;
  @Output('previous') goPrevious = new EventEmitter<any>();
  @Output('next') goNext = new EventEmitter<any>();

  wordFrom: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.wordFrom = this.formBuilder.group({
      answer: ['', [Validators.required]]
    });
  }

  changed(value) {
    this.Answer = value;
  }

  previousWord() {
    let value = this.Answer;
    this.Answer = '';
    console.log("nextWord = ", value)
    this.goPrevious.emit(value.trim());
    this.input.nativeElement.focus();
  }

  nextWord() {
    let value = this.Answer;
    this.Answer = '';
    console.log("nextWord = ", value)
    this.goNext.emit(value.trim());
    this.input.nativeElement.focus();
  }

  keypress(event: KeyboardEvent){
    console.log('keypress = ', event.code === 'Enter');
    if (event.code === 'Enter'){
      this.nextWord();
    }
    // const pattern = /[0-9]/;
    // const inputChar = String.fromCharCode(event).charCode);
    // if (!pattern.test(inputChar)) {    
    //     // invalid character, prevent input
    //     event.preventDefault();
    // }
  }
}
