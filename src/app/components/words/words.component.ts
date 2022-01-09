import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpeechService } from 'src/app/speech.service';

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
  @Output('nextWord') goNextEvent = new EventEmitter<any>()
  answerInput: string = "";

  wordFrom: FormGroup;
  constructor(private formBuilder: FormBuilder, private speech: SpeechService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.answerInput = this.Answer;
  }

  ngOnInit() {
    this.wordFrom = this.formBuilder.group({
      answer: ['', [Validators.required]]
    });

  }

  ngAfterViewInit(){
    this.speak();
  }

  changed(value: String) {
    console.log("changed.value = ",value)
    this.answerChangedEvent.emit(value.trim());
    this.speak();
  }

  speak(){
    this.speech.Speak(this.English);
  }

  goNext(){
    console.log("enter press");
    this.goNextEvent.emit();
  }
}
