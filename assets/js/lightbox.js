$(document).ready(function() {
	// Hide the lightbox and its content initially
          $('.lightbox, .lightbox-content').hide();

          // Open the lightbox on link click
          $('.popup-video').click(function(e) {
              e.preventDefault(); // Prevent the default link behavior
              $('.lightbox').fadeIn();
              $('.lightbox-content').fadeIn(); // Show the lightbox content
          });

          // Close the lightbox
          $('.close-btn').click(function() {
              closeLightbox();
          });

          // Function to close the lightbox
          function closeLightbox() {
              $('.lightbox, .lightbox-content').fadeOut();
          }
      });