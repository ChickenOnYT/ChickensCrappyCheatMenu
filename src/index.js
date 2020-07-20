/* W.I.P. menu! */

(() => {
  // Import libraries
  (async() => {
     eval(await (await fetch("https://raw.githubusercontent.com/MikeTheSkid/M-E-N-U-s/master/ChickensCrappyCheatMenu/src/lib/swal2.js")).text())
  })();
	
  // Closes wills cheat menu
   const cheatmenuhide1 = document.querySelector('#cheat-menu');
   cheatmenuhide1.style.display = 'none';
   const cheatmenuhide2 = document.querySelector('#menu-toggle');
   cheatmenuhide2 && (cheatmenuhide2.style.display = 'none');

   // Insert menu
   const menuWrapper = document.createElement("div");
   menuWrapper.style.width = "100%";
   menuWrapper.style.height = "25%";
   menuWrapper.style.backgroundColor = "lightgrey";
   menuWrapper.style.opacity = "0.95";
   document.body.insertBefore(menuwrapper, document.body.firstChild);

   function closeMenu() {
     // Closes menu
     menuWrapper.remove();
     const cheatmenushow1 = document.querySelector('#cheat-menu');
     cheatmenushow1.style.display = 'block';
     const cheatmenushow2 = document.querySelector('#menu-toggle');
     cheatmenushow2 && (cheatmenushow2.style.display = 'block');
   }
})();
