var xhr = new XMLHttpRequest();
var sectionDiv = document.querySelector('.js-section');
var isProjectsSelected;

// Removes section currently displayed and replaces with section clicked
var displaySection = {
  about: function(sectionHTML) {
    while (sectionDiv.hasChildNodes()) {
      sectionDiv.removeChild(sectionDiv.lastChild);
    }
    sectionDiv.appendChild(sectionHTML);
  },

  projects: function(sectionHTML) {
    while (sectionDiv.hasChildNodes()) {
      sectionDiv.removeChild(sectionDiv.lastChild);
    }
    sectionDiv.appendChild(sectionHTML);
    style.playVideoOnHover();
  },

  contact: function(sectionHTML) {
    while (sectionDiv.hasChildNodes()) {
      sectionDiv.removeChild(sectionDiv.lastChild);
    }
    sectionDiv.appendChild(sectionHTML);
  }
};


var sectionLinkClicked = document.querySelectorAll('.js-sections-link');

var ajax = {
  // AJAX request for sections html
  ajaxCall: function (section, file) {
    xhr.onreadystatechange = function() {

      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var sectionDivHTML = document.createRange().createContextualFragment(xhr.responseText);
          section(sectionDivHTML);
          isProjectsSelected = sectionDivHTML.firstElementChild;
        } else {
          console.log('Error: ' + xhr.status);
        }
      }

    };
    xhr.open('GET', file);
    xhr.send(null);
  },
  // Calls for an AJAX request of the section link that is clicked
  requestSectionOnClick: function () {
    for (var i = 0; i < sectionLinkClicked.length; i++) {
      sectionLinkClicked[i].addEventListener('click', function() {
    
        if (this.classList.contains('about-link')) {
          ajax.ajaxCall(displaySection.about, 'html/about.html');
        } else if (this.classList.contains('projects-link')) {
          if (window.innerWidth > 991) {
            ajax.ajaxCall(displaySection.projects, 'html/projects-large.html')
          } else {
            ajax.ajaxCall(displaySection.projects, 'html/projects-small-and-med.html');
          }
        } else if (this.classList.contains('contact-link')) {
          ajax.ajaxCall(displaySection.contact, 'html/contact.html');
        }
    
      });
    }
  },
  // Returns correct projects.html file when screen is manually resized
  loadProjectPageByScreenSize: function() {
    if (isProjectsSelected != undefined) {
      if (window.innerWidth > 991 && isProjectsSelected.classList.contains('projects')) {
        ajax.ajaxCall(displaySection.projects, 'html/projects-large.html')
      } else {
        ajax.ajaxCall(displaySection.projects, 'html/projects-small-and-med.html');
      }
    }
  }
}


var style = {
  // Plays project video when user hovers / pauses when user stops
  playVideoOnHover: function() { 
    var projectVideos = document.querySelectorAll('.project-vids');
  
    for (var i = 0; i < projectVideos.length; i++) {
      projectVideos[i].addEventListener('mouseenter', function() {
        this.play();
      });
      projectVideos[i].addEventListener('mouseout', function() {
        this.pause();
      });
    }
  },
  // Section that is selected is made bold / others will be faded
  highLightSection: function() {
    for (var i = 0; i < sectionLinkClicked.length; i++) {
      sectionLinkClicked[i].addEventListener('click', function() {
    
        if (this.classList.contains('about-link')) {
          this.classList.add('');
        } else if (this.classList.contains('projects-link')) {
          if (window.innerWidth > 991) {
            this.classList.add('');
          } else {
            this.classList.add('');
          }
        } else if (this.classList.contains('contact-link')) {
          this.classList.add('');
        }
    
      });
    } 
  }
}


// window.addEventListener('click', function, false);
window.addEventListener('resize', ajax.loadProjectPageByScreenSize, false);

ajax.requestSectionOnClick();