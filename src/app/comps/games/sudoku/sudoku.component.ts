import { Component, OnInit } from '@angular/core';
import { SudokuService } from 'src/app/servicees/sudoku.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {
  sudoku_long:any[][] 
  

  sudoku_check:any[][]
  success_slove:boolean = false
  fail_slove:boolean = false
  updated:boolean = false
  
  constructor(public sudosSV:SudokuService) { }

  ngOnInit(): void {
    this.sudosSV.current_game_bh.subscribe(res=>{
      this.updated = res.updated
      this.sudoku_long = res
      console.log(this.sudoku_long);
      
  })
  }

  isNumber(value) {
    return Number.isNaN(value);
  }
 

 

 submit_suodoku() {
  
 if (this.sudosSV.submit_suodoku(this.sudoku_long)) {
   this.success_slove = true;
   this.fail_slove = false;
 }
 else{
  this.success_slove = false;
   this.fail_slove = true;
 } 
  
   
 }

 onKey(ev,e,i){
   
   if (ev<1||ev>9) {
    return window.confirm('אפשר להכניס מספר בטווח 1-9 בלבד');
   }
   this.sudosSV.updateCell(ev,e,i)
 }

 edit_cell(is_primary,is_updated,e,i){
   console.log(is_primary);
    if (is_primary) {
      return window.confirm('אין אפשרות לערוך תא זה!');
   }
  //  if (is_updated) {
    this.sudosSV.updateEdit(e,i)
  //  }
 }

}
