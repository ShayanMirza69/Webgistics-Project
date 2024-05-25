	/*-------------Search Bar--------------*/

	function openSearch() {
	  const overlay = document.getElementById("myOverlay");
	  overlay.style.display = "block";

	  // Use setTimeout to change background-color after the overlay is displayed
	  setTimeout(function () {
	    overlay.style.backgroundColor = "rgba(0, 0, 0, 1)"; // Adjust the desired opacity
	  }, 20); // A small delay to ensure smoother transition
	}

	function closeSearch() {
	  const overlay = document.getElementById("myOverlay");
	  overlay.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Change the opacity back to 0
	  setTimeout(function () {
	    overlay.style.display = "none"; // Hide the overlay after the transition
	  }, 200); // Adjust the time to match your CSS transition duration
	}


	function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.classList.add("sidebar-active");
  document.getElementById("overlayer").style.display = "block"; // Display the overlay
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.classList.remove("sidebar-active");
  document.getElementById("overlayer").style.display = "none"; // Hide the overlay
}


