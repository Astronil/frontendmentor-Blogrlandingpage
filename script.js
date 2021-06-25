function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown1() {
    document.getElementById("drop1").classList.toggle("display");
    document.getElementById("dropbtn1").classList.toggle("flip");
  }
function dropdown2() {
    document.getElementById("drop2").classList.toggle("display");
    document.getElementById("dropbtn2").classList.toggle("flip");
  }
function dropdown3() {
    document.getElementById("drop3").classList.toggle("display");
    document.getElementById("dropbtn3").classList.toggle("flip");
  }
function dropdown1desk() {
    document.getElementById("drop1desk").classList.toggle("displaydesk");
    document.getElementById("dropbtn1desk").classList.toggle("flip");
  }
function dropdown2desk() {
    document.getElementById("drop2desk").classList.toggle("displaydesk");
    document.getElementById("dropbtn2desk").classList.toggle("flip");
  }
function dropdown3desk() {
    document.getElementById("drop3desk").classList.toggle("displaydesk");
    document.getElementById("dropbtn3desk").classList.toggle("flip");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('display')) {
          openDropdown.classList.remove('display');
        }
      }
    }
  }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('displaydesk')) {
            openDropdown.classList.remove('displaydesk');
          }
        }
      }
    }