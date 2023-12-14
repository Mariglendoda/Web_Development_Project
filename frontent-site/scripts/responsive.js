console.log('App is running...');

const drawerBtnElement = document.getElementById('drawer-btn');7
const mobileDarwerElement = document.getElementById('mobile-drawer');

function toggleDrawer() {
  mobileDarwerElement.classList.toggle('open');
}

drawerBtnElement.addEventListener('click', toggleDrawer);