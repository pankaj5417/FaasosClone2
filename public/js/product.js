
// https://join.slack.com/t/ft-web-16/shared_invite/zt-104u5me4h-4RtONAGv7_1rWrURambnLg

let user = JSON.parse(localStorage.getItem("user"));
console.log(user);


  
// add customization html code to the html body 

document.body.innerHTML += customize();
console.log(customize());

var glob;
function getData(products) {
  const data=JSON.parse(products)
//var glob2=products
    glob = data;
    console.log(glob)
    // console.log(data)
    showData(data)
}
//getData();


/*Filter*/
document.getElementById("nonveg").addEventListener("click",myFunction);
document.getElementById("veg").addEventListener("click",myFunction);
var flag=0
function myFunction(){
    var arr=[];
    let nonveg = document.getElementById("nonveg")
    let veg = document.getElementById("veg")
    
    nonveg.onclick=()=>{
      veg.checked=false
     // nonveg.checked=true
    }
    veg.onclick=()=>{
     nonveg.checked=false
     //veg.checked=true
    }

    

    if(nonveg.checked == true)
    {
     // veg.checked=false

        glob.forEach((el)=>{
            if(el.type == "non-veg")
            {
                arr.push(el);
            }
        })
        // console.log(arr);
        
        showData(arr);
    }
    else if(veg.checked == true)
    {
      //nonveg.checked=false

        glob.forEach((el)=>{
          console.log(el.type)
            if(el.type == "veg")
            {
                arr.push(el);
            }
        })
        // console.log(arr);
        showData(arr);
    }
    
    else{
        showData(glob);
    }
}
/*Filter Code END here*/




var midContainer = document.getElementById('mid-container')

var midContainer1 = document.getElementById("mid-container1")
var midContainer2 = document.getElementById("mid-container2")
var midContainer3 = document.getElementById("mid-container3")
var midContainer4 = document.getElementById("mid-container4")
var midContainer5 = document.getElementById("mid-container5")
var midContainer6 = document.getElementById("mid-container6")
var midContainer7 = document.getElementById("mid-container7")
var midContainer8 = document.getElementById("mid-container8")
var midContainer9 = document.getElementById("mid-container9")

var midContainer10 = document.getElementById("mid-container10")

  function showData(product){
      //const product=JSON.parse(products)
      //console.log(products)

    midContainer1.innerHTML=null
    midContainer2.innerHTML=null
    midContainer3.innerHTML=null
    midContainer4.innerHTML=null
    midContainer5.innerHTML=null
    midContainer6.innerHTML=null
    midContainer7.innerHTML=null
    midContainer8.innerHTML=null
    midContainer9.innerHTML=null
    midContainer10.innerHTML=null
  
  
        product.forEach((prod)=>{

           // console.log(prod.name)

          
          let div=document.createElement("div")
          let div2=document.createElement("div")
          let div3=document.createElement("div")
          let div4=document.createElement("div")
          let div5=document.createElement("div")
          let div6=document.createElement("div")
          let img=document.createElement("img")
            img.src = prod.img
            img.onclick = () => {
                localStorage.setItem("single-prod", JSON.stringify(prod));
                
              window.location.href=`/products/single/${prod._id}`
          }
           img.style.width="100%"
           let prod_name=document.createElement("p")
           prod_name.innerText=prod.name
           prod_name.style.fontSize="15px"
           prod_name.style.fontWeight="700"
           prod_name.style.color="black"
           prod_name.style.width="75%"
           let prod_price=document.createElement("p")
            let btn_img = document.createElement("img");
          btn_img.src=  product_type(prod, btn_img);
           
           btn_img.style.width="12px"
           btn_img.style.height="12px"
           //btn_img.style.margin="25% 0 0 3%"
          // btn_img.style.border="1px solid red"
           prod_price.innerText="₹" +prod.price
           div5.append(btn_img,prod_price)
           div5.style.display="flex"
           div5.style.justifyContent="space-between"
           div5.style.width="22%"
           div5.style.alignItems="center"
           div5.style.marginTop="-15px"
           div.append(prod_name,div5)
           let prod_desc=document.createElement("p")
            prod_desc.innerText = prod.description;
            prod_desc.setAttribute("class", "prod_desc");
          //  prod_desc.style.height="16px"
          //  prod_desc.style.overflow="hidden"
           let readmore=document.createElement('p')
           readmore.innerText="Read More"
           readmore.style.cursor="pointer"
  
  
            readmore.onclick = () => {
              localStorage.setItem("single-prod", JSON.stringify(prod));
              console.log(prod._id);
               
              window.location.href=`/products/single/${prod._id}`
          }
  
  
  
           let prod_rating_div=document.createElement("div")
            let prod_rating = document.createElement("p")
            prod_rating_div.setAttribute("class", "prod-rating");
           prod_rating="★"+" "+prod.rating
           prod_rating_div.append(prod_rating)
            prod_rating_div.style.backgroundColor = "#4caf50"
            prod_rating_div.style.height = "25px";
  
           prod_rating_div.style.color="white"
           prod_rating_div.style.width="50px"
            prod_rating_div.style.textAlign = "center";
            prod_rating_div.style.lineHeight = '25px'
           prod_rating_div.style.borderRadius="2px"
           let addToCart=document.createElement("button")
           addToCart.innerText="ADD"
           addToCart.style.cursor="pointer"
           addToCart.style.backgroundColor="#FFCA28"
           addToCart.style.width="85%"
           let custom_text=document.createElement("p")
           custom_text.innerText="customisable"
           custom_text.style.fontSize="10px"
            custom_text.style.lineHeight = "0"
            
            let reviews = document.createElement("p");
            reviews.innerHTML = prod.reviews + " bought this";
            reviews.setAttribute("class", "reviews");
  
  
          //  //for customisable
  
          //  custom_text.onclick=()=>{
  
          //  }
  
           div6.append(addToCart,custom_text)
           div6.style.textAlign="center"
           div6.style.width="50%"
          // addToCart.style.width="40%"
            addToCart.className = "addtoCartBtn"
            
        /*    
        
         addToCart.onclick=function() {
                 console.log("Yes")
             let presentitems=JSON.parse(localStorage.getItem("FaasosCart"));
             let bagcount=0;
           console.log(presentitems);
                presentitems.forEach(function (items) {
                
                if(items.name==prod.name) {
                  bagcount++;
                   //let qty=document.getElementById(qty)
                  //qty.innerText="bagcount"
                }
               }); 
              if(bagcount==1) {
              // alert("Already in Cart");
               } else {
                   addtobag(prod);
                  
             }   	
                }
        
*/
    addToCart.addEventListener("click", addtocart);
    function addtocart(event) {
      let ans = document.getElementsByClassName("addtoCartBtn");
      //   console.log(ans);



      //add active class to the customize
      document.querySelector(".custom-parent").classList.add("active-custom");
      show_customize(prod);
      //   console.log("1",event.target)


      let div = event.target.parentNode;
      div.innerHTML = `<div class="inc-des-quantity">
                <div class="minus">-</div>
                <div class="qty">1</div>
                <div class="plus">+</div>
                </div>`;
      //for minus 
      document.querySelector(".minus").addEventListener('click', (event) => {
        //   console.log(event.target.parentNode);
        let qty = event.target.parentNode.querySelector(".qty");
        let curent = Number(qty.innerText);
        if ((curent - 1) == 0) {
          let div = event.target.parentNode.parentNode;

          div.innerHTML = `<button class="addtoCartBtn" style="background-color: rgb(255, 202, 40); width: 100%;">ADD</button><p style="font-size: 10px; line-height: 0;">customisable</p>`;

        } else {
          qty.innerText = --curent;
        }
      });

      //for plus 
      document.querySelector(".plus").addEventListener('click', (event) => {
        //adding custimable to +button
        document.querySelector(".custom-parent").classList.add("active-custom");

        let qty = event.target.parentNode.querySelector(".qty");
        let curent = Number(qty.innerText);
        //   qty.innerText = curent+1;

      });

      //hello the
      document.querySelector(".custom-bottom").addEventListener("click", () => {
        document.querySelector(".custom-parent").classList.remove("active-custom");
        let cart_data = JSON.parse(JSON.stringify(prod));
              console.log(cart_data)


  fetch("/cart",{
        // 61bc12cd8c22250b9b72a285
    body: JSON.stringify(
            {
             userId:`${user._id}`,
            products:cart_data._id
        }
        ),
         method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((res) => {
        return res.json();
    }).then((res) => {
        console.log("res",res)
    }).catch((err) => {
        console.log(err)
    })
        
        cartData();
        window.location.reload();
       
        /* 
         let kart = JSON.parse(localStorage.getItem("FaasosCart"));
           kart.push(prod);
           localStorage.setItem("FaasosCart", JSON.stringify(kart));
 
        */

      });

    };

/*
    if (localStorage.getItem("FaasosCart") === null) {
      localStorage.setItem("FaasosCart", JSON.stringify([]))
    }

    async function addtobag(p) {

      let products_cart = await JSON.parse(localStorage.getItem("FaasosCart"));

      // let products_cart =   window.location.href=`/products`
      
      products_cart.push(p);

      localStorage.setItem("FaasosCart", JSON.stringify(products_cart));
      // window.location.reload()
      window.scrollTo(0, 0)
      cartData()
      // }
    }


*/

    let div_rating_reviews = document.createElement('div');
    div_rating_reviews.append(prod_rating_div, reviews);
    div2.append(div_rating_reviews, div6)
    div.style.display = "flex"
    div.style.justifyContent = "space-between"
    //div.style.alignItems="center"
    div2.style.display = "flex"
    div2.style.height = "40px"
    div2.style.justifyContent = "space-between"
    div3.style.padding = "0 10px 20px 10px"






    div3.append(div, prod_desc, readmore, div2)
    // div4.append(img, div3)
    // midContainer.append(div4)
    let p10 = document.createElement("p")
    let div10 = document.createElement("div")
    div10.appendChild(p10)
    let hr5 = document.createElement("hr")


    let P1 = document.getElementById("p1")
    let P2 = document.getElementById("p2")
    let P3 = document.getElementById("p3")
    let P4 = document.getElementById("p4")
    let P5 = document.getElementById("p5")
    let P6 = document.getElementById("p6")
    let P7 = document.getElementById("p7")
    let P8 = document.getElementById("p8")
    let P9 = document.getElementById("p9")
    let P10 = document.getElementById("p10")

    //scroll function starts

    P1.addEventListener("click", myFunction1)
    function myFunction1() {
      var flag=1
       let elmnt = document.getElementById("mid-container1");
       elmnt.scrollIntoView();
      //P1.style.color="black"
     
       
      
  
      window.scrollTo(0, 200);

    }
    
    P2.addEventListener("click", myFunction2)
    
    function myFunction2() {
     
      let elmnt1 = document.getElementById("mid-container2");
    
      elmnt1.scrollIntoView();

   //if(P2.top==elmnt1.top){
    
    
   //}
    

      //window.scrollTo(0, 1570);
    
    
  }
    

    P3.addEventListener("click", myFunction3)
    function myFunction3() {
      var elmnt = document.getElementById("mid-container3");
       elmnt.scrollIntoView();
      //window.scrollTo(0, 3700);

    }
    P4.addEventListener("click", myFunction4)
    function myFunction4() {
      var elmnt = document.getElementById("mid-container4");
      elmnt.scrollIntoView();
     // window.scrollTo(0, 5050);
    }
    P5.addEventListener("click", myFunction5)
    function myFunction5() {
       var elmnt = document.getElementById("mid-container5");
       elmnt.scrollIntoView();
     // window.scrollTo(0, 6830);
    }
    P6.addEventListener("click", myFunction6)
    function myFunction6() {
      var elmnt = document.getElementById("mid-container6");

      elmnt.scrollIntoView();

     // window.scrollTo(0, 7780);
    }
    P7.addEventListener("click", myFunction7)
    function myFunction7() {
      var elmnt = document.getElementById("mid-container7");
      elmnt.scrollIntoView();
     // window.scrollTo(0, 8700);
    }

    P8.addEventListener("click", myFunction8)
    function myFunction8() {
      var elmnt = document.getElementById("mid-container8");
      elmnt.scrollIntoView();
     // window.scrollTo(0, 9600);
    }
    P9.addEventListener("click", myFunction9)
    function myFunction9() {
      var elmnt = document.getElementById("mid-container9");

      elmnt.scrollIntoView();
     // window.scrollTo(0, 10500);
    }
    P10.addEventListener("click", myFunction10)
    function myFunction10() {
      var elmnt = document.getElementById("mid-container10");
      elmnt.scrollIntoView();
      //window.scrollTo(0, 11430);
    }
    //scroll function ends

    let test = document.querySelector(".col-left")
    // test.style.overflow="scroll"
    // test.style.height="10%"
    let mid = document.querySelector('#mid-container')
    /*
         document.body.onscroll = logScroll
    
        function logScroll(e) {
          if(e.target.top>200){
            P1.style.fontWeight="bold"
    
          }
       }
       */


    document.body.onscroll = function () { myFunction() };
var top=-100
    function myFunction() {
      console.log("midcontainer", midContainer2.offsetTop)
      
       if (document.documentElement.scrollTop < midContainer2.offsetTop && document.documentElement.scrollTop >= top+ midContainer1.offsetTop) {
        //let P1=document.getElementById("p1")

        P1.style.fontWeight = "bold"
        P2.style.fontWeight = "normal"
        P3.style.fontWeight = "normal"
        P4.style.fontWeight = "normal"
        P5.style.fontWeight = "normal"
        P6.style.fontWeight = "normal"
        P7.style.fontWeight = "normal"
        P8.style.fontWeight = "normal"
        P9.style.fontWeight = "normal"
        P10.style.fontWeight = "normal"

      }

      else if (document.documentElement.scrollTop < midContainer3.offsetTop && document.documentElement.scrollTop >= top+midContainer2.offsetTop) {
        //let P1=document.getElementById("p1")

        P2.style.fontWeight = "bold"
        P1.style.fontWeight = "normal"
        P3.style.fontWeight = "normal"
        P4.style.fontWeight = "normal"
        P5.style.fontWeight = "normal"
        P6.style.fontWeight = "normal"
        P7.style.fontWeight = "normal"
        P8.style.fontWeight = "normal"
        P9.style.fontWeight = "normal"
        P10.style.fontWeight = "normal"


     


      }

      else if (document.documentElement.scrollTop < midContainer4.offsetTop && document.documentElement.scrollTop >= top+midContainer3.offsetTop) {
        //let P1=document.getElementById("p1")

        P3.style.fontWeight = "bold"
        P2.style.fontWeight = "normal"
        P1.style.fontWeight = "normal"
        P4.style.fontWeight = "normal"
        P5.style.fontWeight = "normal"
        P6.style.fontWeight = "normal"
        P7.style.fontWeight = "normal"
        P8.style.fontWeight = "normal"
        P9.style.fontWeight = "normal"
        P10.style.fontWeight = "normal"

     

      }
      else if (document.documentElement.scrollTop < midContainer5.offsetTop && document.documentElement.scrollTop >=midContainer4.offsetTop) {
        //let P1=document.getElementById("p1")

        P4.style.fontWeight = "bold"
        P2.style.fontWeight = "normal"
        P3.style.fontWeight = "normal"
        P1.style.fontWeight = "normal"
        P5.style.fontWeight = "normal"
        P6.style.fontWeight = "normal"
        P7.style.fontWeight = "normal"
        P8.style.fontWeight = "normal"
        P9.style.fontWeight = "normal"
        P10.style.fontWeight = "normal"

      

     

      }

      else if (document.documentElement.scrollTop < midContainer6.offsetTop && document.documentElement.scrollTop >midContainer5.offsetTop) {
        //let P1=document.getElementById("p1")

        P5.style.fontWeight = "bold"
        P2.style.fontWeight = "normal"
        P3.style.fontWeight = "normal"
        P4.style.fontWeight = "normal"
        P1.style.fontWeight = "normal"
        P6.style.fontWeight = "normal"
        P7.style.fontWeight = "normal"
        P8.style.fontWeight = "normal"
        P9.style.fontWeight = "normal"
        P10.style.fontWeight = "normal"

      

     


      }
      else if (document.documentElement.scrollTop < midContainer7.offsetTop && document.documentElement.scrollTop >= top+midContainer6.offsetTop) {
        //let P1=document.getElementById("p1")

        P6.style.fontWeight = "bold"

        P2.style.fontWeight = "normal"
        P3.style.fontWeight = "normal"
        P4.style.fontWeight = "normal"
        P5.style.fontWeight = "normal"
        P1.style.fontWeight = "normal"
        P7.style.fontWeight = "normal"
        P8.style.fontWeight = "normal"
        P9.style.fontWeight = "normal"
        P10.style.fontWeight = "normal"



      }
      else if (document.documentElement.scrollTop < midContainer8.offsetTop && document.documentElement.scrollTop >= top+midContainer7.offsetTop) {
        //let P1=document.getElementById("p1")

        P7.style.fontWeight = "bold"
        P2.style.fontWeight = "normal"
        P3.style.fontWeight = "normal"
        P4.style.fontWeight = "normal"
        P5.style.fontWeight = "normal"
        P6.style.fontWeight = "normal"
        P1.style.fontWeight = "normal"
        P8.style.fontWeight = "normal"
        P9.style.fontWeight = "normal"
        P10.style.fontWeight = "normal"

     


      }
      else if (document.documentElement.scrollTop < midContainer9.offsetTop && document.documentElement.scrollTop >= midContainer8.offsetTop) {
        //let P1=document.getElementById("p1")

        P8.style.fontWeight = "bold"
        P2.style.fontWeight = "normal"
        P3.style.fontWeight = "normal"
        P4.style.fontWeight = "normal"
        P5.style.fontWeight = "normal"
        P6.style.fontWeight = "normal"
        P7.style.fontWeight = "normal"
        P1.style.fontWeight = "normal"
        P9.style.fontWeight = "normal"
        P10.style.fontWeight = "normal"

     

      }
      else if (document.documentElement.scrollTop < midContainer10.offsetTop && document.documentElement.scrollTop >= midContainer9.offsetTop) {
        //let P1=document.getElementById("p1")

        P9.style.fontWeight = "bold"
        P8.style.fontWeight = "bold"
        P2.style.fontWeight = "normal"
        P3.style.fontWeight = "normal"
        P4.style.fontWeight = "normal"
        P5.style.fontWeight = "normal"
        P6.style.fontWeight = "normal"
        P7.style.fontWeight = "normal"
        P1.style.fontWeight = "normal"
        P10.style.fontWeight = "normal"


      }
      else if ( document.documentElement.scrollTop >= midContainer10.offsetTop) {
        //let P1=document.getElementById("p1")

        P8.style.fontWeight = "normal"
        P2.style.fontWeight = "normal"
        P3.style.fontWeight = "normal"
        P4.style.fontWeight = "normal"
        P5.style.fontWeight = "normal"
        P6.style.fontWeight = "normal"
        P7.style.fontWeight = "normal"
        P1.style.fontWeight = "normal"
        P9.style.fontWeight = "normal"
        P10.style.fontWeight = "bold"

     

      }
      
    }



    if (prod.category == "Fab Wraps starting at 99 each") {
      let div4 = document.createElement("div")
      div4.append(img, div3)
      midContainer1.append(div4)
      div4.style.backgroundColor = "white"
      div4.setAttribute("class", "prod_card")


      // midContainer.append(p11,div20)
    }

    if (prod.category == "Daily Value Wrap Combos (Save Upto 40% Extra)") {
      let div4 = document.createElement("div")
      div4.setAttribute("class", "prod_card")

      div4.append(img, div3)
      midContainer2.append(div4)
      div4.style.backgroundColor = "white"

    }
    // console.log(prod.category)
    if (prod.category == "Combos for 1 (Save upto 15% Extra)") {
      let div4 = document.createElement("div")
      div4.setAttribute("class", "prod_card")
      div4.append(img, div3)
      midContainer3.append(div4)
      div4.style.backgroundColor = "white"


    }
    if (prod.category == "New Launches") {
      let div4 = document.createElement("div")
      div4.setAttribute("class", "prod_card")

      div4.append(img, div3)
      midContainer4.append(div4)
      div4.style.backgroundColor = "white"


    }
    if (prod.category == "Combos for 4 (Upto 25% Savings)") {
      let div4 = document.createElement("div")
      div4.setAttribute("class", "prod_card")

      div4.append(img, div3)
      midContainer5.append(div4)
      div4.style.backgroundColor = "white"

    }
    if (prod.category == "Signature Wraps") {
      let div4 = document.createElement("div")
      div4.setAttribute("class", "prod_card")

      div4.append(img, div3)
      midContainer6.append(div4)
      div4.style.backgroundColor = "white"


    }
    if (prod.category == "Classic Wraps") {
      let div4 = document.createElement("div")
      div4.setAttribute("class", "prod_card")

      div4.append(img, div3)
      midContainer7.append(div4)
      div4.style.backgroundColor = "white"


    }
    if (prod.category == "Desserts") {
      let div4 = document.createElement("div")
      div4.setAttribute("class", "prod_card")

      div4.append(img, div3)
      midContainer10.append(div4)
      div4.style.backgroundColor = "white"


    }
    if (prod.category == "Sides And Beverages") {
      let div4 = document.createElement("div")
      div4.setAttribute("class", "prod_card")

      div4.append(img, div3)
      midContainer8.append(div4)

      div4.style.backgroundColor = "white"

    }
    if (prod.category == "Combos for 2 (Save upto 25% Extra)") {
      let div4 = document.createElement("div")
      div4.setAttribute("class", "prod_card")

      div4.append(img, div3)
      midContainer9.append(div4)

      div4.style.backgroundColor = "white"

    }










    //   OPENING A NEW PAGE FOR INDIVIDUAL PRODUCT
    div.onclick = () => {

      localStorage.setItem("single-prod", JSON.stringify(prod));
      window.location.href = "single_product.html";


    }
    div4.style.cursor = "pointer"
    midContainer.append(div4)
    //midContainer.style.position="sticky"
    // midContainer.style.top="100px"
    div4.style.backgroundColor = "white"
    //  }





  })
}

/*mid end*/



//cart page

            //  userId:`61bc12cd8c22250b9b72a111`,

function cartData() {
  fetch(`/cart/${user._id}`,{
  method:"GET"
})
  .then((response) => {
  return response.json();
  })
    .then(response => {
      // console.log("respose cart", response[0], "res 0", response[0].products.length)
      showCart(response[0].products)
      
  }).catch((err) => {
  console.log(err)
  })

}



//cart data();
function showCart(kart) {

  


  
  console.log("kart",kart)


  var cartItem = document.getElementById("cart-item");

  //cartItem.innerHTML=null
  if (kart.length === 0 || kart === null) {
    document.getElementById("cart-head").innerText = "Empty cart";
    document.getElementById("qty").style.display = "none";
    document.getElementById("cart-head-2").style.display = "none"
    let cart = document.getElementById("cart-center");
    cart.style.display = "none";
    document.getElementById("empty-cart").style.display = "block"
    return;
  }
    

  document.getElementById("cart-head").innerText = "cart";
  document.getElementById("qty").style.display = "block";
  document.getElementById("cart-head-2").style.display = "block"
  let cart_center = document.getElementById("cart-center");
  cart_center.style.display = "block";
  document.getElementById("empty-cart").style.display = "none"

  let qty = document.getElementById("qty");

  let cart = document.getElementById("cart-item");
  cart.innerHTML = null;

  var count = 0;

  kart.forEach((item) => {
    count++
    qty.innerHTML = count;

    let div = document.createElement("div")
    let div2 = document.createElement("div")
    let product_name = document.createElement("p")
    product_name.innerText = item.name
    product_name.style.width = "90%"
    let product_price = document.createElement("p")
    product_price.innerText = "₹" + item.price
    //product_price.style.marginLeft="7px"
    // let buttonLeft = document.createElement("button");

    let buttonLeft = document.createElement("img")
    buttonLeft.src = "https://github.com/pankaj5417/koovs.com/blob/main/icons/leftbtn.png?raw=true"

    let buttonRight = document.createElement("img")
    buttonRight.src = "https://github.com/pankaj5417/koovs.com/blob/main/icons/right btn.png?raw=true"



    buttonLeft.style.width = "43px"
    buttonLeft.style.marginRight = "3px"
    let itemNo = document.createElement("p")
    itemNo.innerText = "1"
    // buttonRight.innerText="+"
    buttonLeft.style.backgroundColor = "white"
    buttonRight.style.backgroundColor = "white"
    buttonRight.style.width = "40px"
    buttonRight.style.height = "40px"
    buttonLeft.style.height = "40px"

    buttonRight.style.marginLeft = "7px"
    buttonLeft.style.cursor = "pointer"
    buttonRight.style.cursor = "pointer"



    buttonLeft.addEventListener('click', (event) => {

      fetch(`/cart/${user._id}/${item._id}`, {
        method:"PATCH"
      }).then((response) => {
         cartData();
     

      }).catch((err) => {
        console.log(err)
      })

      // let kart = JSON.parse(localStorage.getItem("FaasosCart"));
      // let index = kart.indexOf(item);
      // //  console.log(index)
      // kart.splice(index, 1);
      // // kart.removeItem(item)

      // localStorage.setItem("FaasosCart", JSON.stringify(kart));


      var total = kart.reduce(function (ac, el) {

        return ac + Number(el.price)
      }, 0)
      var total_pr = document.getElementById("total")

      total_pr.innerHTML = '₹' + "" + total

      cartData();
    });


    //adding addcustomisabe to right button 
    buttonRight.addEventListener('click', (event) => {
      //adding custimable to +button
      document.querySelector(".custom-parent").classList.add("active-custom");
      show_customize(item);

       document.querySelector(".custom-bottom").addEventListener("click", () => {
        document.querySelector(".custom-parent").classList.remove("active-custom");
        let cart_data = JSON.parse(JSON.stringify(item));
              console.log(cart_data)


  fetch("/cart",{
        // 61bc12cd8c22250b9b72a285
    body: JSON.stringify(
            {
             userId:`${user._id}`,
            products:cart_data._id
        }
        ),
         method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
        
        cartData();
        window.location.reload();
       
        /* 
         let kart = JSON.parse(localStorage.getItem("FaasosCart"));
           kart.push(prod);
           localStorage.setItem("FaasosCart", JSON.stringify(kart));
 
        */

      });
     

    });


    //apply custom 




    let btn_img = document.createElement("img")

    if (item.type === 'veg') {

      btn_img.src = "https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"
    } else {
      btn_img.src = "https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png"
    }
    btn_img.style.width = "12px"
    btn_img.style.height = "12px"

    div2.append(buttonLeft, itemNo, buttonRight)
    div2.style.display = "flex"
    div2.style.alignItems = "center"
    div2.style.width = "22%"
    div2.style.marginLeft = "2%"
    let div3 = document.createElement("div")
    div3.append(btn_img, product_name)
    div3.style.display = "flex"
    div3.style.alignItems = "center"
    div3.style.width = "65%"
    div3.style.justifyContent = "space-between"




    div.append(div3, div2, product_price)
    product_price.style.width = "10%"
    product_price.style.marginLeft = "8%"

    div.style.display = "flex"
    div.style.alignItems = "center"
    div.style.width = "100%"
    cartItem.append(div)

    var total = kart.reduce(function (ac, el) {

      return ac + Number(el.price)
    }, 0)
    var total_pr = document.getElementById("total")

    total_pr.innerHTML = '₹' + "" + total
    total_pr.style.marginLeft

  });
}
cartData();

let checkouts = document.getElementById("checkout-button")
checkouts.onclick = () => {
    window.location.href = "user";
}
//function gotoCart(){
//}

// close custom 
document.getElementById("custom-close").addEventListener("click", () => {
  document.querySelector(".custom-parent").classList.remove("active-custom");

});
// //
// //login to name 
// let name = document.getElementById("showName")
// let arr2 = JSON.parse(localStorage.getItem("current"))
// name.innerText = arr2[arr2.length - 1].name2;






//function for customizable option 


function show_customize(prod) {
  let parent = document.querySelector(".custom-middle");
  let type_src = product_type(prod);
  parent.innerHTML = `<div class="head">
    <div><img src = ${type_src} /></div>
    <div><h3>${prod.name}</h3></div>
    </div>
    <div><p> MAKE YOUR FAVOURITE MEAL </p></div>
    <div class="custom-option">
    <div class = "option">
    <div class = "option-head">
    <div><img src ="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png" />Potato Wedges (Medium) Thums Up (250ml) </div>
    <div>	&#8377 87<input type="checkbox" id="vehicle2" name="" value="87"></div>
    </div>
    </div>

    <div class = "option-head">
    <div><img src ="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png" />Coke 330 ml.</div>
    <div>	&#8377 57<input type="checkbox" id="" name="" value="55"></div>
    </div>
    </div>
    </div>`
    ;

}


function product_type(prod) {
  if (prod.type === 'veg') {


    return "https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png";
  } else {
    return "https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png";
  }
}



function customize() {
  return `   <!-- div for customization -->
          <div class="custom-parent">
            <div class="custom">
              <div class="custom-top">
                <div id="custom-close"><i class="fas fa-times"></i></div>
                <div>Customization</div>
              </div>
              <div class="custom-middle">
                     
              </div>
              <div class="custom-bottom">
                <p>Apply</p>
              </div>
            </div>
          </div>
          <!-- end of customization div -->`;
}