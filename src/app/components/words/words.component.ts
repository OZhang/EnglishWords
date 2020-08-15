import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

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

  // onSubmit() {
  //   console.log(this.wordFrom.get('answer').value);
  // }
  changed(value){
    this.Answer = value;
  }

  previousWord() {
    let value = this.Answer;
    this.Answer = '';
    // let value = this.wordFrom.get('answer').value;
    // this.wordFrom.get('answer').setValue('');
    console.log("nextWord = ", value)
    this.goPrevious.emit(value);
  }

  nextWord() {
    let value = this.Answer;
    this.Answer = '';
    // let value = this.wordFrom.get('answer').value;
    // this.wordFrom.get('answer').setValue('');
    console.log("nextWord = ", value)
    this.goNext.emit(value);
    
  }
}
