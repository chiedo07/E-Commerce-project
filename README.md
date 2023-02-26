# E-Commerce-Project
For this project i was challenged to build out this E-commerce product page and get it looking as close to the design as possible.
This website allows a user who wants to purchase a product from the website giving the user a shopping cart in which the user can add 
and remove items from the shopping basket as well as inputing multiple numbers of the same item if need be. the E-commerce product page
is responsive to different screen size with optimal layout. This Website consist of a hover state, lightbox which was developed using Html,Css
and Javascript for its development.
## The Challenge
### Challenge 1 - Responsiveness
Due to the different screen size of deivces which inlcudes laptops, tablets and mobile devices. Designing the website's responsiveness was one of my challenges. 
Media Queries was used to solve this situattion as it targets different screen sizes for all devices. However, when they do not work can be frustrating to
resolve. one challenege i had with media queries was incorrect syntax as well as mistakes on my meta tags and viewport and also understanding breaking points for each devices 
especially devices that needed the hamburger design that contains the navigation buttons.
### Challenge 2 - Hover States
 Hover states for interactive elements where created for html elements as well as images, This works by placing the cursor over an element or image so as it
 displays a div or even an animation. My major challenge with this came from the hamburger concept for small screens, At first the Css hover effect was not
 working this was due to not setting my height to max-height for the class name targeting the hamburger, And that did the trick for me for this particular project. Hovever 
 javascript Mouseover and Mouseout effect was also used for the Shopping cart basket,This works by setting functions that displays a div when the cursor is pointed at the 
 shopping cart basket icon and vice versa.
 ### Challenge 3 - LightBox Gallery
 A lightbox is a combination of two components, a modal and a slide show. 
 The lightbox will be contained in the modal, which will be triggered by some JavaScript i have written, from event handlers in the HTML markup.
 i built styles which will provide state with CSS and behavior with JavaScript. The Lightbox Book layout gives you the option of giving each image associated to the layout block a special identity. 
 If you do, those pictures won't be grouped with other pictures added using Lightbox layouts; instead, they'll open in their own Lightbox overlay.
 The challenges i had when creating this gallery had to be my image positioning as well has the javascript for loop. i siloved this situation after watching as much videos
 on youtube regarding lightboxes and finally got my soluttion with involved the javascript "Replace" attribute.
 ### Challenge 4 - Adding Items To Cart
 Adding product image, tittles and prize was solved by creating a button that will trigger the AddCart function and adds the product (and its variant) to the cart,
 and also update your state cart object as well as returning a message when the cart has no item in it. a couter was reacreated in other to show how the number of products
 in the cart this also had a function that when the counter equals zero it should display a message "Your Cart Is Empty" all was written using pure javascript functions.
 ## My Process
 ### Built With
 - Semantic HTML5 Markups
 - CSS custom properties
 - Flexbox
 - CSS Grid
 - javascript
 -Font Awesome
 ### What I Learnt
I learnt alot while developing this website including learning that certain css characters could be set to negative, getting more familliar with css
selectors ("+","~",">") as well as getting more confident when handling javascript eventhandlers and functions.
below are some of the code snippets that helped improved my coding.
 ``` CSS
 .CartItem ,.tittle{
    width:100%;
    display:flex;
    flex-direction:column;
    flex-wrap:inherit;
    grid-row:700px;
    height:inherit;
    background-color:#fafad2;
    border: 3px solid goldenrod;
}
.CartImg > img{
    width:100px;
    right:50px;
    margin-right:0px;
    margin-top:1px;
    margin-left:2px;
    display: block;
}
.side-bar:checked ~ #hdr{
    max-height:100%;
}
.side-bar:checked ~ .hamb .hamburger{
    background: transparent;
}
.side-bar:checked ~ .hamb .hamburger::after{
transform: rotate(45deg);
top:0;
left:0px;
right:1px;
}
```
``` JS
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
```
### Continued Development
I will like to add some JS frameworks to my prroject as well as creating pay assess for users so they can be able to purchase 
the product and have it delivered as well as returns if need be. and also creating a feedback session for users.
### Responsive Testing
I used Google Chrome's Development tools to constantly test each change that I made to my website and to ensure that it appeared in the desired way on different screen sizes. 
I also tested my website on different screen sizes (mobile, tablet and desktop) to ensure it appeared in the desired way on different devices.
To test my whole website, I went through each page, feature by feature.
## Author
- Website - [Nlemadim Chiedozie](https://github.com/chiedo07/E-Commerce-project)
- Frontend Mentor - [Scott Nnaghor]


 
 
 
 
 
 
