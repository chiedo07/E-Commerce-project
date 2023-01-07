const plus = document.querySelector("#BtInc"),
subs = document.querySelector("#BtDec"),
num = document.querySelector("#val");
valz = document.querySelector(".value3");
 
 
let x = 0;

plus.addEventListener("click" , () => {
    
   x++;
 
   num.innerText = x;
   
   console.log(x);

   b = x * 125;
   valz.innerHTML = new Intl.NumberFormat('en-US',options).format(b);
   console.log(val);


});

subs.addEventListener("click" , () => {
    
   if(x > 1){
      x--;
   
     num.innerText = x;

      console.log(x);
       
      b = x * 125;
      valz.innerHTML = new Intl.NumberFormat('en-US',options).format(b);
      console.log(val);
  

   }
});

// big screens
const add = document.querySelector("#btn-inc"),
sub = document.querySelector("#btn-dec"),
value = document.querySelector("#cnt");
val = document.querySelector(".value");
let options = { style: 'currency', currency: 'USD' };
 
let a = 0;

add.addEventListener("click" , () => {
    
   x++;
 
   value.innerText = x;
   
   console.log(x);
     
   b = x * 125;
    val.innerHTML = new Intl.NumberFormat('en-US',options).format(b);
    console.log(val);

});

sub.addEventListener("click" , () => {
    
   if(x > 1){
      x--;
   
     value.innerText = x;

      console.log(x);
      b = x * 125;
    val.innerHTML = new Intl.NumberFormat('en-US',options).format(b);
    console.log(val);

   }
   
  
});


// Adding To Cart
function AddToCart(){
   document.createElement('div');
}