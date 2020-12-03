import { Injectable } from '@angular/core';
import { CureentGame, Cell } from '../interfacees/ful-word';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {
  updated:boolean = false
  sudoku_long = 
   [[{ primary:true,  num:5,   updated:false,  input:false },{ primary:true,  num:3,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true } ,{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:7,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true }],
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

  sudoku_basic = [[0,5,6,1,4,7,3,8,2]]

  sudoku_check = []
  cells_checkes = []


  
  
  
  current_game:CureentGame= new CureentGame();
  current_game_bh = new BehaviorSubject<any>(this.sudoku_long);

  constructor() {
    // this.sudoku_long = this.create_table();
    this.current_game_bh.next(this.sudoku_long);
   }

  ngOnInit(): void {
    
  }

  updateCell(ev,e,i){
    console.log(ev,e,i);
    let cell = this.sudoku_long[e][i] 
    cell.num= parseInt(ev);
    cell.updated= true;
    cell.input= false;
    // this.sudoku_long[e][i] = cell;
     this.current_game_bh.next(this.sudoku_long)
  }

  updateEdit(e,i){
    // let cell = new Cell();
    let cell = this.sudoku_long[e][i] 
    cell.input= true;
    // this.cell.place_holder = this.cell.num;
    // this.cell.num = "";
    this.sudoku_long[e][i] = cell;
    this.current_game_bh.next(this.sudoku_long)
 }

 create_table(){
  let s = 0
  let c = 0 
   let araay_9 = []
   const sudoku_table = [];
   
  //  for (let i = 0; i < 9; i++) {
  //    for (let j = 0; j < 9; j++) {
  //     s++;
  //     s%9===0 ?  c = 9 :c = s%9
  //     let reg = Math.ceil((c)/3)+((Math.ceil((i+1)/3)-1)*3);
  //     let cell = new Cell();
  //     cell.col = j;
  //     cell.row = i;
  //     cell.num = this.sudoku_m[i][j]
  //     cell.reg = reg;
  //       cell.primary = false;
  //       cell.updated = false;
  //       // cell.num = "";
  //       cell.input= true;
  //       cell.wrong = false;
  //       araay_9.push(cell)
  //    }
  //    sudoku_table.push(araay_9);
  //    araay_9 = []
  //  }

   let nineArray = [1,2,3,4,5,6,7,8,9]
   for (let k = 0; k < nineArray.length; k++) {
     const element = nineArray[k];
     for (let i = 0; i < 9; i++) {
      const nine = Math.ceil(Math.random() * Math.floor(9));
      const element = sudoku_table[i][nine-1]
      console.log(nineArray[k],i,nine-1,element['reg']);
      let sum = 0;
      
        if (element.num=="") {
          const checkB = this.get_nyne_num(sudoku_table,nineArray[k],i,nine-1,element['reg']);
          if (checkB) {
            element.primary = true;
                element.updated = false;
                element.input= false;
            element.num =  nineArray[k]
          }else{
            i--
          }
          
        }
      
      
     }
     
   }
  //  let sudoku_table2 = this.sudokoCheck(sudoku_table)
  //  for (let i = 0; i < sudoku_table.length; i++) {
  //   const nine = Math.ceil(Math.random() * Math.floor(9));
    
  //   const araay_3 = this.get_three_num()
  //   let s = 0;
  //   for (let j = 0; j < 9; j++) {
    
  //         const element = sudoku_table[i][j]
          
  //         const checkB = this.get_nyne_num(sudoku_table,nine,i,j,element['reg']);
  //         console.log(checkB,element);
          
  //           if(checkB){
  //             console.log("true to compare",sudoku_table,nine,i,j,element['reg']);
  //             element.primary = true;
  //             element.updated = false;
  //             element.num = nine;
  //             element.input= false;
  //           }else{
  //             console.log("false to compare",sudoku_table,nine,i,j,element['reg']);
              
  //             // j--
  //           }
  //    }
  // }

  //  console.log(sudoku_table);
   
   return sudoku_table;
   
 }

 get_three_num(){
  const araay_3 = []
   
  for (let i = 0; i < 3; i++) {
    const rand9 = Math.floor(Math.random() * Math.floor(9));
    if (!araay_3.includes(rand9)) {
      araay_3.push(rand9)
    }else{
      i--
    }
    }
  return araay_3;
 }

 get_nyne_num(sudoku_table,num,row,col,reg){

  let check = true
  for (let i = 0; i < sudoku_table.length; i++) {
    for (let j = 0; j < sudoku_table.length; j++) {
      const element = sudoku_table[i][j];
      if(element["row"]==row || element["col"]==col|| element["reg"]==reg) {
        if (element["num"]==num){
          // console.log(element);
          if (i==row&&j==col) {
            continue
          }
          else{
            return false
          }
           
          }
      };
      
    }
    
  }
     return true

 }

  sudokoCheck(sudoku_table){
    
    let s = 0
    let c = 0 
    let p = sudoku_table.reduce((sum,arr)=>{
      arr.forEach(el=>{
        sum.push(el) 
      })
      return sum
    },[])
    console.log(p);
    
for (let j = 0; j < p.length; j++) {
    let chek= p.reduce((sum,el)=>{
        if(el["row"]==p[j]["row"] || el["reg"]==p[j]["reg"] || el["col"]==p[j]["col"]) {if (el["num"]!=0&&p[j]["num"]==0){ sum.push(el.num)}};
        return sum
    },[])
     let nine = [1,2,3,4,5,6,7,8,9]
     if(chek.length>0){ 
    let chekB= nine.filter((el,i)=>{
        return !chek.includes(el)
    })
    if(chekB.length==1) { p[j]["num"] = chekB[0];  j=(-1);}
    }
 }
 let x= 0;
   let w = []
  //  return p;
 return p.reduce((sum,el,i )=>{
     x++
     w.push(el)
     if (x %9 === 0) {sum.push(w); w = [];}
   return sum;
 },[])
}

submit_suodoku(sudoku_array){
  let suucussfull = true
  // this.cells_checkes = []
//  const sudoku_check_in = this.sudokoCheck()
//  console.log(sudoku_check_in,sudoku_array);
 
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

//   for (let i = 0; i < sudoku_check_in.length; i++) {
//     for (let j = 0; j < sudoku_check_in.length; j++) {
//       if(sudoku_array[i][j].num != sudoku_check_in[i][j] ){
//         return false;
//         }
//     }
//     }
 

for (let i = 0; i < sudoku_array.length; i++) {
  for (let j = 0; j < sudoku_array.length; j++) {
    const element = sudoku_array[i][j];
    const check = this.get_nyne_num(sudoku_array,element['num'],element['row'],element['col'],element['reg']);
    console.log(element,check);
    
  if(!check){
    suucussfull = false;
      element.wrong = true;
      this.current_game_bh.next(sudoku_array)
  }
}
  
}
 return suucussfull;
}
}
