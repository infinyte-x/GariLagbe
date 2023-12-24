// ============ nav active  ===============>
// const navLinkEls = document.querySelectorAll('nav-link');
// const windowPathname = window.location.pathname;

// navLinkEls.forEach(navLinkEl => {
//   const navLinkPathname = new URL(navLinkEl.href).pathname;
//   if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
//     navLinkEl.classList.add('active');
//   }
// } 
//   )





// ============ nav active  ===============>

// ====== Slick Slider Part Start ========//
// -------- Feature Slider ----------
$('.feature_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 1500,
  arrows:true,
  variableWidth: false,
  centerPadding: '0px',
  centerMode:false,
  prevArrow: '<i class="fa-solid fa-chevron-left prevarrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right nextarrow"></i>',
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode:false,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



$('.imga_slider').slick({
  variableWidth: true,
  slidesToShow: 1,
  arrows:false,
  infinite: true,
  autoplay: true,
  draggable: false,
});

// -------- Slick Slider Part End -----------//
// ======= Sticky Navbar Part Start ==========//
let navbar = document.querySelector('.navbar');
window.addEventListener("scroll", ()=>{
  let scrolling  = this.scrollY;
  console.log(scrolling)
  if (scrolling > 80) {
      navbar.classList.add("sticky_navbar");
      navbar.classList.remove('menubar');
  }
  else{
      navbar.classList.remove("sticky_navbar");
      navbar.classList.add('menubar');
  }
})
// -------- Sticky Navbar Part End --------//
// ====== Counter Part Start ========//

// -------- Counter Part End -----------//
// ============= back to top button Start ==============//
let top_button  =document.querySelector(".top_button")
window.addEventListener("scroll", ()=>{
  let scrolling  = this.scrollY;
  console.log(scrolling)
  if(scrolling > 800){
    top_button.classList.add("go_top");
  }
  else{
    top_button.classList.remove("go_top");
  }
})
top_button.addEventListener('click',function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
})
// -------- Back to top button end -------//



// ================ Car List & Detail Page Start=================//
let products = null;
        // get datas from file json
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                products = data;
                addDataToHTML();
        })

        function addDataToHTML(){
    // remove datas default from HTML
        let listProductHTML = document.querySelector('.listProduct');

        // add new datas
        if(products != null) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('a');
                newProduct.href = '/Packages.html?id=' + product.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>`;
                listProductHTML.appendChild(newProduct);

            });
        }
    }


// ================ Car List & Detail Page Start=================//




// ================ Car List & Detail Page Start=================//

// ======================= navbar ===========================///


// let navbar =  document.querySelector('.navbar');
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 100) {
//     navbar.classList.add('nav-scrolled');
//     navbar.classList.remove('.menubar');
//   }
//   else {
//     navbar.classList.remove("nav-scrolled");
// }
// });
// ======================= navbar ===========================///