import { Directive, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { FulWord } from '../interfacees/ful-word';
import { TrivyaSvcService } from '../servicees/trivya-svc.service';

@Directive({
  selector: '[Random]'
})
export class RandomDirective {

  el:HTMLElement;
  sum:number = 0;
  fullResponse:FulWord
  @Input() HebWords:string[] = []
  @Input() englishWords:string[] = []
  @Input() WordsArr:string[] = []

  @Input() wordHeb:string = ''
  @Input() arrLange:number

  @Output() getwordHeb = new EventEmitter<string>()
  @Output() getHebWords = new EventEmitter<string[]>()
  @Output() getenglishWords = new EventEmitter<string[]>()
  @Output() getWord = new EventEmitter<string>()
  @Output() getRandInit = new EventEmitter<number[]>()
  @Output() getRand = new EventEmitter<number[]>()
  
  @HostListener('click')    rnd() {
    console.log('clicked');
       
       this.rand()
       this.getWord.emit(this.wordHeb);
       this.getRand.emit(this.randArr);
       
  }

  randArr:number[] = [1,2,3,4,5,6,7]

  rand(){
    for (let i = 0; i < this.randArr.length; i++) {
      let rand = Math.floor(Math.random() * Math.floor(40));
      this.randArr[i]= rand;
    }
    let rand4 = Math.floor(Math.random() * Math.floor(4));
    this.randArr[5] = rand4;
    console.log(this.wordHeb);
    
    let HebIndex = this.wordsSV.HebWords.indexOf(this.wordHeb);
    this.randArr[6] = HebIndex
 }


  constructor(private elRef:ElementRef,private wordsSV:TrivyaSvcService) { 
    this.el = elRef.nativeElement;
  }
 
 
  ngOnInit(): void {
      console.log("init",this.wordHeb);
      this.wordsSV.wordHeb = this.wordHeb
       }

}
