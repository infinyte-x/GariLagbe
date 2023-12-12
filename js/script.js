// ====== Slick Slider Part Start ========//
// -------- Feature Slider ----------
$('.feature_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 1000,
  arrows:true,
  centerPadding: '0px',
  centerMode:true,
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

// -------- Slick Slider Part End -----------//
// ======= Sticky Navbar Part Start ==========//
let navbar = document.querySelector('.navbar');
window.addEventListener("scroll", ()=>{
  let scrolling  = this.scrollY;
  console.log(scrolling)
  if(scrolling > 100){
      navbar.classList.add("sticky_navbar");
  }
  else{
      navbar.classList.remove("sticky_navbar");
  }
})
// -------- Sticky Navbar Part End --------//
// ====== Counter Part Start ========//
$('.count').counterUp({
  delay: 10,
  time: 2000
});
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

}
// ================ Car List & Detail Page Start=================//



let product = null;
        // get datas from file json
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                products = data;
                showDetail();
        })

        function showDetail(){
    // remove datas default from HTML
        let detail = document.querySelector('.detail');
        let listProduct = document.querySelector('.listProduct');
        let productId =  new URLSearchParams(window.location.search).get('id');
        let thisProduct = products.filter(value => value.id == productId)[0];
        //if there is no product with id = productId => return to home page
        // if(!thisProduct){
        //     window.location.href = "/";
        // }

        detail.querySelector('.image img').src = thisProduct.image;
        detail.querySelector('.name').innerText = thisProduct.name;
        detail.querySelector('.price').innerText = 'BDT' + thisProduct.price;
        detail.querySelector('.description').innerText = 'BDT' + thisProduct.description;


        (products.filter(value => value.id != productId)).forEach(product => {
            let newProduct = document.createElement('a');
            newProduct.href = '/Packages.html?id=' + product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>`;
            listProduct.appendChild(newProduct);
        });
    }





// ================ Car List & Detail Page Start=================//





























// ================ Car List & Detail Page Start=================//