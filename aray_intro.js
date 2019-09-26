// let arr = [1,2,3,4,5,6];  
// console.log(arr); 
//  console.log(arr[1]); 
//  console.log(arr[5]);  
//  console.log(arr[7]);      
// arr.push(7,8,9);  
// console.log(arr);  
// arr.unshift(-1,-2,-3) ; 
// console.log(arr);  
//  arr.pop() ; 
//  console.log(arr); 
//  arr.shift(); 
//  console.log(arr); 
//  arr.splice(3,1); 
//  console.log(arr);    
// console.log(arr.pop()); 
// console.log(arr.shift());  
// console.log(arr);  
// let a = arr.pop(); 
// console.log(a);\   
//   duyệt các phần tử của mảng   
// for (let index = 0; index < array.length; index++) { 
//     
// length = 6 , index = 1  
//     console.log(arr[index]);               
// }   arr = [3 , 7 ,9, 10 , -20];   
// tính tổng các giá trị của mảng  
// tính trung bình giá trị của mảng    
let s = 0;  for (let index = 0; index < arr.length; index++) {          
 s = s + arr[index] ;        
 } 
 console.log(s);     
 let avg = s / arr.length;   
 //   tìm min , max    let min = arr[0];    
 let max = arr[0];    
 if ( max < arr[i]){        
     max = arr[i] ;    }   
 if ( min > arr[i]){         
     min = arr[i];    }    
     console.log("min"+ min); 
     console.log("max"+ max);   
    // sắp xếp 
     for (let index = 0; index < array.length - 1; index++) {     
    
        for (let i = index +1; index < array.length; i++) {       
        if ( arr[index] > arr[i]){      
        let temp = arr[i];               
        arr[i] = arr[index];             
        arr[index] = temp;       }      
    }   
    console.log(arr); 
    //    tìm các số lớn hơn 5  
     let result = [];   
     for (let i = 0; i < array.length; i++) {      
    const element = array[i];      
     if (Element > 5) {           
         result.push(element);       
         }       
        
        }  
        console.log("Result " + result);