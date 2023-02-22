const plus = document.querySelector("#BtInc"),
subs = document.querySelector("#BtDec"),
num = document.querySelector("#val");
val = document.querySelector(".value");
 
 
let x = 1;

plus.addEventListener("click" , () => {
    
   x++;
 
   num.innerText = x;
   
   console.log(x);

   b = x * 125;
   val.innerHTML = new Intl.NumberFormat('en-US',options).format(b);
   console.log(val);


});

subs.addEventListener("click" , () => {
    
   if(x > 1){
      x--;
   
     num.innerText = x;

      console.log(x);
       
      b = x * 125;
      val.innerHTML = new Intl.NumberFormat('en-US',options).format(b);
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
let AddCartItems = 0;
let red = AddCartItems;
function AddToCart(child) {
  AddCartItems +=1;
  bed=document.getElementById("cart-count").innerHTML=AddCartItems;
  bedz=document.getElementById("small-count").innerHTML=AddCartItems;
  var ItemSelect = document.createElement('div');
  ItemSelect.classList.add('CartImg')
  ItemSelect.setAttribute('id',AddCartItems);
  var img = document.createElement('img');
  img.setAttribute('src',"images/image-product-1-thumbnail.jpg");
  var title = document.createElement('div');
  title.classList.add('title'),
  title.innerText = new1.children[1].innerText;
  var label = document.createElement ('div');
  label.classList.add("calc");
  lab = `125 x ${x} = ${val.innerHTML}` , new Intl.NumberFormat('en-US',options).format( 125 * x);
  label.innertext = lab.innerText;
  label.append(lab);
  var deleteBtn = document.createElement("button");
  deleteBtn.classList.add("cartbtn");
  
  deleteBtn.setAttribute("onclick", 'del('+AddCartItems+')');
  var cartitems = document.getElementById('CartItem');
  ItemSelect.append(img) ;
  ItemSelect.append(title);
  ItemSelect.append(label);
  ItemSelect.append(deleteBtn);
  cartitems.append(ItemSelect);
  if (AddCartItems > 0) {
   document.getElementById("demo").style.display = "none";
} 
else{
   msg = "Your Cart Is Empty"
   document.getElementById("cartitem").innerText = msg;
   document.getElementById("small-count").innerText = msg;
}
}

function del(child){
document.getElementById(child).remove();
AddCartItems--;
document.getElementById("cart-count").innerHTML=AddCartItems;
document.getElementById("small-count").innerHTML=AddCartItems;
if (AddCartItems == 0) {
   document.getElementById("demo").style.display = "block"
};
}
function display(){
   document.getElementById("cartIndex").style.display="block";
   document.getElementsByClassName("CartContainer").style.display ="block";
   document.getElementById("cartIndex").style.width="100%";
   document.getElementsByClassName("CartContainer").style.width ="auto";
};
function CloseCart(){
   document.getElementById("cartIndex").style.display = "none";
};
function Displayout(){
   document.getElementById("cartIndex").style.display="none";
   document.getElementsByClassName("CartContainer").style.display ="none";
}
function display1(){
   document.getElementById("cartIndex").style.display="block";
   document.getElementsByClassName("CartContainer").style.display ="block";
   document.getElementById("cartIndex").style.width="100%";
   document.getElementsByClassName("CartContainer").style.width ="auto";
};