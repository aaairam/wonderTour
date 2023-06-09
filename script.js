const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__mobile__nav");
const qoute = document.querySelector(".qoute");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  qoute.classList.toggle("open");
});

const toggleDot= document.querySelector(".toggle__dot");
const headerdot = document.querySelector(".toggleDot");
toggleDot.addEventListener("click", () => {
  toggleDot.classList.toggle("open");
  headerdot.classList.toggle("open");
});

const drop_down = document.querySelectorAll(".header__mobile__nav .dropdown")
drop_down.forEach((dropd) => {
    dropd.addEventListener("click", () => {
        dropd.nextElementSibling.classList.toggle("open");
        dropd.querySelector("i").classList.toggle("open");
    });
});

const headerBlackHome = document.querySelector(".about");
const about = document.querySelector(".headerBlackHome");
headerBlackHome.addEventListener("click", () => {
  headerBlackHome.classList.toggle("open");
  about.classList.toggle("open");
});

var slider = tns({
  container: '.slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  axis: "vertical",
  controls: false,
  nav: false,
  autoplayPosition: false,
  autoplayButton:false,
});


const bannerJava=document.querySelectorAll(".bannerJava_link");
const bannerContent=document.querySelectorAll(".bannerJava_content");
bannerJava.forEach((bannerJava) => {
  bannerJava.addEventListener("click", () => {
    removeActivebannerJava();
    bannerJava.classList.add("active");
    const activeContent= document.querySelector(`#${bannerJava.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  })
})

function removeActivebannerJava(){
 bannerJava.forEach((bannerJava) =>{
    bannerJava.classList.remove("active");
  })
}
function removeActiveContent(){
  bannerContent.forEach((bannerJava) =>{
    bannerJava.classList.remove("active");
  })
}

 var slider = tns({
          container: '.post_card',
          items: 1,
          slideBy: 'page',
          autoplay: false,
          axis: "horizontal",
          controls: false,
          nav: true,
          autoplayPosition: false,
          autoplayButton:false,
          responsive:{
            970:{
                items:2,
                autoplay: true,
            }
          }
      });

      // var slider = tns({
      //       container: '.gallery_images',
      //       items: 1,
      //       slideBy: 'page',
      //       autoplay: true,
      //       axis: "horizontal",
      //       controls: false,
      //       nav: true,
      //       autoplayPosition: false,
      //       autoplayButton:false,
      //       autoWidth:true,
      //   });

      var slider = tns({
        container: '.gallery__imgs',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        axis: "horizontal",
        controls: false,
        nav: true,
        autoplayPosition: false,
        autoplayButton:false,
        responsive:{
          970:{
              nav: false,
              items:6,
              slideBy: 1,
              autoplay: true,
              controls: true,
              controlsText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          }
        }
      }); 



      const btop = document.querySelector(".backtotop");
      window.addEventListener('scroll', () => {
      console.log(window.pageYOffset);
      if  (window.pageYOffset >= 200) {
      btop.classList.add('show')
      }else {
      btop.classList.remove('show')
  }
});


