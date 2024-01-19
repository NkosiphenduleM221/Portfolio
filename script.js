let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            sec.classList.add('show-animate')
            
        }
        else{
            sec.classList.remove('show-animate')
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
};
document.getElementById("read").addEventListener("click", function () {
    var content = document.querySelectorAll(".about-content p");
    var readMoreText = document.querySelector(".about-content .read-more-text");
  
    // Toggle the visibility of the paragraphs and the read-more-text
    content.forEach(function (paragraph) {
      paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
    });
  
    
    if (content[0].style.display === "none") {
      this.textContent = "Read More";
      readMoreText.style.display = "block"; // Show the read-more-text
    } else {
      this.textContent = "Read Less";
      readMoreText.style.display = "none"; // Hide the read-more-text
    }
  });
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
  
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
  const form = document.getElementById('my-form');

form.addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent form submission

  // Validate inputs
  let isValid = true;
 
  const inputs = form.querySelectorAll('.input');
  const errorMessages = form.querySelectorAll('.error-message');

  inputs.forEach((input, index) => {
    if (input.value.trim() === '') {
      input.classList.add('input-error');
      errorMessages[index].style.display = 'block';
      isValid = false;
    } else {
      input.classList.remove('input-error');
      errorMessages[index].style.display = 'none';
    }
  });

  if (isValid) {
    const formData = new FormData(form);
    const formAction = form.getAttribute('action'); // Get the form's action attribute

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Successful form submission
        // You can redirect or display a success message here
        console.log('Form submitted successfully!');
      } else {
        // Handle form submission error
        console.error('Error submitting form');
        // You can display an error message to the user here
      }
    } catch (error) {
      // Handle network error
      console.error('Network error:', error);
      // You can display an error message to the user here
    }
  }
});
function showImageInfo() {
  document.getElementById('imageInfoOverlay').style.display = 'flex';
}

function closeImageInfo() {
  document.getElementById('imageInfoOverlay').style.display = 'none';
}
