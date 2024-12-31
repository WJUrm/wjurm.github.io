const menuItems = document.querySelectorAll('.nav.mobile>ul.gnb_nav>li>a');

// 각 메뉴 항목에 클릭 이벤트 추가
menuItems.forEach((menuItem) => {
  const toggleBtn = menuItem.querySelector('.sub_menu_toggle_btn');

  if (toggleBtn) {
    menuItem.addEventListener('click', (e) => {
      // 현재 메뉴의 활성화 상태를 토글
      menuItem.classList.toggle('active');
    });
  }

  // 서브메뉴의 li 클릭 시 이벤트 전파 방지
  const subMenuItems = menuItem.querySelectorAll('.course-list li, .service-list li');
  subMenuItems.forEach((subMenuItem) => {
    subMenuItem.addEventListener('click', (e) => {
      e.stopPropagation(); // 이벤트 전파 중지
    });
  });
});


const btnSearchMobile = document.querySelector('.btn_search_mobile');
const btnSearchHidden = document.querySelector('.btn_search_hidden');
const headerTitle = document.querySelector('.logo-mobile');
const logoImage = document.querySelector('h1 img');
const headerInner = document.querySelector('.gnb.mobile');

btnSearchMobile.addEventListener('click', () => {
  btnSearchMobile.classList.toggle('active');
  btnSearchHidden.classList.toggle('active');
  headerTitle.classList.toggle('hidden');
  logoImage.classList.toggle('hidden');
  btnMenuMobile.classList.toggle('hidden');
  headerInner.classList.toggle('active');
});


//banner
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideNumber = document.querySelector('.slide-number');
const bannerBg = document.querySelector('.banner-bg');

let currentIndex = 0;

function updateSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
        slide.classList.add('active');
        }
    });

// 배경 색 변경
if (index === 1) {bannerBg.style.backgroundColor = '#0b0f14';}
else if (index === 2) {bannerBg.style.backgroundColor = '#001658';}
else {bannerBg.style.backgroundColor = '#004ddb';}

slideNumber.textContent = `${index + 1} / ${slides.length}`;}

//버튼 숫자 변경
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
});

updateSlide(currentIndex);

//FAQ
document.querySelectorAll('.question-box').forEach(box => {
    box.addEventListener('click', () => {
      // 이미지 회전
      const arrow = box.querySelector('.arrow-icon');
      if (arrow) {
          arrow.classList.toggle('rotated');
      }

      // 답변 표시/숨기기
      const answer = box.querySelector('.question-answer');
      if (answer) {
          answer.classList.toggle('active');
          answer.classList.toggle('hidden');
      }
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   pagination: {
   el: ".swiper-pagination",
   clickable: true,
 },
});