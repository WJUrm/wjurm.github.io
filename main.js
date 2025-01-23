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