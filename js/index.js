// const menuBurger = document.getElementById('menu');
// const sidePanel = document.getElementById('side-panel');
// const body = document.getElementById('body');

//let isOpenSideMenu = false;

// const openSidePanel = () => {
//     isOpenSideMenu = true;
//     sidePanel.style.width = "255px"
// };

// menuBurger.addEventListener('click', () => openSidePanel());
// sidePanel.addEventListener('click', () => {
//     //console.log('sidePanel');
// })


const $menu = $('#menu');
const $sidePanel = $('#side-panel');

$(document).mouseup(e => {
   if (!$sidePanel.is(e.target) // if the target of the click isn't the container...
   && $sidePanel.has(e.target).length === 0) // ... nor a descendant of the container
   {
       //console.log($menu.has(e.target).length);
       $sidePanel.removeClass('active');
  }
 });

 $menu.on('click', () => {
    $sidePanel.addClass('active');
});



