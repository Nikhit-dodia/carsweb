function openNav() {
    document.getElementById("Sidenavigation").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("Sidenavigation").style.width = "0";
  }
  function openNav() {
    document.getElementById("Sidenavigation").style.width = "250px";
    document.getElementById("submain").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("Sidenavigation").style.width = "0";
    document.getElementById("submain").style.marginLeft = "0";
  }
   /*hide when curor leaves*/
  $(".Sidenav1").mouseleave(function(){
    $(".").removeClass("open");
  });

/*
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }*/