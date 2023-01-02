const plus = document.querySelector("#BtInc"),
subs = document.querySelector("#BtDec"),
num = document.querySelector("#val");
 
let x = 0;

plus.addEventListener("click" , () => {
    
   x++;
 
   num.innerText = x;
   
   console.log(x);

});

subs.addEventListener("click" , () => {
    
   if(x > 0){
      x--;
   
     num.innerText = x;

      console.log(x);
       

   }
});

// big screens
const add = document.querySelector("#btn-inc"),
sub = document.querySelector("#btn-dec"),
value = document.querySelector("#cnt");
 
let a = 0;

add.addEventListener("click" , () => {
    
   x++;
 
   value.innerText = x;
   
   console.log(x);

});

sub.addEventListener("click" , () => {
    
   if(x > 0){
      x--;
   
     value.innerText = x;

      console.log(x);
       

   }
});


// Adding To Cart