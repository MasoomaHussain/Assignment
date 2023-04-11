// Assignment 2

// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


function sum(num1){
     return function(num2){
         console.log(num1+num2);
     }
}
let innerfunc=sum(2);
innerfunc(3)     

// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function search(arr,val){
       if (arr.length===0){
        return false
       }
       let checkIndex=arr[0];
       if(checkIndex==val){
            return true
       }else{
        let next=arr.slice(1)//slice(1) makes new array having element from index 2 to end.
        return search(next,val)
       }
}
array=[2,3,4,5,6,7]
console.log(search(array,1))

// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

function text(a){
      let newPara=document.getElementById("bottom para")
      newPara.innerText=a
}
console.log(text("hello"))

// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function addItem(a){
          let entry=document.querySelector("ul")
          let createLi=document.createElement("li")
          createLi.textContent=a;
          entry.appendChild(createLi)
    }
addItem("grapes")

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  let element = document.getElementById('bottom para');
  element.innerText="hello";
  changeBackgroundColor(element, "#ff0000");
  
// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

function save(key, object) {
    let objectJson = JSON.stringify(object);
    localStorage.setItem(key, objectJson);
  }
  let Obj = { 
    playerName:"Masooma",
    age:22
  };
  save('Obj', Obj);
  
// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function retrieve(key){
   let comeBack=localStorage.getItem(key);
   return JSON.parse(comeBack);
}
let obj={
  playerName:"Masooma",
  age:22
}
retrieve('obj');


// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

// function newObj(object){
//     let a=JSON.stringify(object);
//     localStorage.setItem(a);
//   }
//   let obj={
//     playerName:"Masooma",
//     age:22
//   }
//   newObj(obj);
  