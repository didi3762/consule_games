import { Injectable } from '@angular/core';
import { CureentGame, Cell } from '../interfacees/ful-word';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {
  updated:boolean = false
  sudoku_long = [[{ primary:true,  num:5,   updated:false,  input:false },{ primary:true,  num:3,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true } ,{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:7,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true }],
  [{ primary:true,  num:6,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:1,   updated:false,  input:false },{ primary:true,  num:9,   updated:false,  input:false },{ primary:true,  num:5,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true }],
  [{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:9,   updated:false,  input:false },{ primary:true,  num:8,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:6,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true }],
  [{ primary:true,  num:8,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:6,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:3,   updated:false,  input:false }],
  [{ primary:true,  num:4,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:8,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:3,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:1,   updated:false,  input:false }],
  [{ primary:true,  num:7,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:2,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:6,   updated:false,  input:false }],
  [{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:6,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:2,   updated:false,  input:false },{ primary:true,  num:8,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true }],
  [{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:4,   updated:false,  input:false },{ primary:true,  num:1,   updated:false,  input:false },{ primary:true,  num:9,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:5,   updated:false,  input:false }],
  [{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:8,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:7,   updated:false,  input:false },{ primary:true,  num:9,   updated:false,  input:false }]]

  sudoku_m:any[][] 
  = [[5,3,"","",7,"","","",""],
  [6,"","",1,9,5,"","",""],
  ["",9,8,"","","","",6,""],
  [8,"","","",6,"","","",3],
  [4,"","",8,"",3,"","",1],
  [7,"","","",2,"","","",6],
  ["",6,"","","","",2,8,""],
  ["","","",4,1,9,"","",5],
  ["","","","",8,"","",7,9]]

  sudoku_check = []
  cells_checkes = []


  
  
  
  current_game:CureentGame= new CureentGame();
  current_game_bh = new BehaviorSubject<any>(this.sudoku_long);

  constructor() { 
    this.cells_checkes = this.sudokoCheck();
    // this.current_game_bh.next(this.cells_checkes);
   }

  ngOnInit(): void {
    
  }

  updateCell(ev,e,i){
    console.log(ev,e,i);
    let cell = new Cell();
    cell = this.sudoku_long[e][i] 
    cell.num= parseInt(ev);
    cell.updated= true;
    cell.input= false;
    this.sudoku_long[e][i] = cell;
     this.current_game_bh.next(this.sudoku_long)
  }

  updateEdit(e,i){
    let cell = new Cell();
    cell = this.sudoku_long[e][i] 
    cell.input= true;
    // this.cell.place_holder = this.cell.num;
    // this.cell.num = "";
    this.sudoku_long[e][i] = cell;
    this.current_game_bh.next(this.sudoku_long)

  }

  sudokoCheck(){
    
    let s = 0
    let c = 0 
    let p = this.sudoku_m.reduce((sum,el,i)=>{
        el.map((e,j)=>{ 
        s++
        s%9===0 ?  c = 9 :c = s%9
        const el_obj = {
        val: e,
        col: c,
        row: i+1,
        reg: Math.ceil((c)/3)+((Math.ceil((i+1)/3)-1)*3),
      } 
   sum.push(el_obj)
   }); 
    return sum
 },[])
for (let j = 0; j < p.length; j++) {
    let chek= p.reduce((sum,el)=>{
        if(el["row"]==p[j]["row"] || el["reg"]==p[j]["reg"] || el["col"]==p[j]["col"]) {if (el["val"]!=0&&p[j]["val"]==0){ sum.push(el.val)}};
        return sum
    },[])
     let nine = [1,2,3,4,5,6,7,8,9]
     if(chek.length>0){ 
    let chekB= nine.filter((el,i)=>{
        return !chek.includes(el)
    })
    if(chekB.length==1) { p[j]["val"] = chekB[0];  j=(-1);}
    }
 }
 let x= 0;
   let w = []
 return p.reduce((sum,el,i )=>{
     x++
     w.push(el.val)
     if (x %9 === 0) {sum.push(w); w = [];}
   return sum;
 },[])
}

submit_suodoku(sudoku_array){
  // this.cells_checkes = []
 const sudoku_check_in = this.sudokoCheck()
 console.log(sudoku_check_in,sudoku_array);
 
//   for (let i = 0; i < sudoku_check_in.length; i++) {
//   for (let j = 0; j < sudoku_check_in.length; j++) {
//     let cell = new Cell();
//     cell = this.sudoku_long[i][j] 
//     cell.num= sudoku_check_in[i][j];
    
//     sudoku_array[i][j] = cell;
    
//     this.sudoku_check.push(sudoku_check_in[i][j]) ;
//   }
//   this.cells_checkes.push(this.sudoku_check)
//   this.sudoku_check = []
//   }
//   console.log(this.cells_checkes);
//   this.current_game_bh.next(sudoku_array)

  for (let i = 0; i < sudoku_check_in.length; i++) {
    for (let j = 0; j < sudoku_check_in.length; j++) {
      if(sudoku_array[i][j].num != sudoku_check_in[i][j] ){
        return false;
        }
    }
    }
 
 return true;

}
}
