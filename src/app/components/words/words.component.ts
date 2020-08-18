import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit, OnChanges {
  @ViewChild('myInput', { static: false }) input: ElementRef;

  @Input() English: string;
  @Input() PhoneticSymbols: string;
  @Input() Chinese: string;
  @Input() Answer: string;
  @Output('answerChanged') answerChangedEvent = new EventEmitter<any>()
  answerInput: string = "";

  wordFrom: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.answerInput = this.Answer;
  }

  ngOnInit() {
    this.wordFrom = this.formBuilder.group({
      answer: ['', [Validators.required]]
    });
  }

  changed(value: String) {
    console.log("changed.value = ",value)
    this.answerChangedEvent.emit(value.trim());
  }
}
