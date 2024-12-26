// 모든 메뉴 항목 선택
const menuItems = document.querySelectorAll('.nav.mobile>ul.gnb_nav>li>a');

// 각 메뉴 항목에 클릭 이벤트 추가
menuItems.forEach((menuItem) => {
  const toggleBtn = menuItem.querySelector('.sub_menu_toggle_btn');

  if (toggleBtn) {
    // 상위 메뉴 클릭 시 동작
    menuItem.addEventListener('click', (e) => {
      // 이미 활성화된 항목 비활성화
      const activeItem = document.querySelector('.nav.mobile li a.active');
      if (activeItem && activeItem !== menuItem) {
        activeItem.classList.remove('active');
      }

      // 현재 항목 활성화/비활성화
      menuItem.classList.toggle('active');
    });
  }

  // 서브메뉴의 li 클릭 시 이벤트 방지
  const subMenuItems = menuItem.querySelectorAll('.course-list li, .service-list li');
  subMenuItems.forEach((subMenuItem) => {
    subMenuItem.addEventListener('click', (e) => {
      e.stopPropagation(); // 이벤트 중지
    });
  });
});

const btnMenuMobile = document.querySelector('.btn_menu_mobile');

btnMenuMobile.addEventListener('click', () => {
  btnMenuMobile.classList.toggle('active');
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

const btnQuestionBox = document.querySelector('.question-box');
const btnAnswer = document.querySelector('.question-answer');
const Question1 = document.querySelector('.Q1');
const Question2 = document.querySelector('.Q2');
const Question3 = document.querySelector('.Q3');
const Answer1 = document.querySelector('.A1');
const Answer2 = document.querySelector('.A2');
const Answer3 = document.querySelector('.A3');
btnQuestionBox.addEventListener('click', () => {
    btnQuestionBox.classList.toggle('active');
    btnAnswer.classList.toggle('active');
});

Question2.addEventListener('click', () => {
    Answer2.classList.toggle('active');
});

Question3.addEventListener('click', () => {
    Answer3.classList.toggle('active');
});