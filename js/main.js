var xhr = new XMLHttpRequest();
var sectionDiv = document.querySelector('.js-section');
var isProjectsSelected;

// AJAX request for sections html
var ajaxCall = function (section, file) {
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
};


var sections = {
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
    playVideoOnHover();
  },

  contact: function(sectionHTML) {
    while (sectionDiv.hasChildNodes()) {
      sectionDiv.removeChild(sectionDiv.lastChild);
    }
    sectionDiv.appendChild(sectionHTML);
  }
};


var sectionLinkClicked = document.querySelectorAll('.js-sections-link');

for (var i = 0; i < sectionLinkClicked.length; i++) {
  sectionLinkClicked[i].addEventListener('click', function() {

    if (this.classList.contains('about-link')) {
      ajaxCall(sections.about, 'html/about.html');
    } else if (this.classList.contains('projects-link')) {
      if (window.innerWidth > 991) {
        ajaxCall(sections.projects, 'html/projects-large.html')
      } else {
        ajaxCall(sections.projects, 'html/projects-small-and-med.html');
      }
    } else if (this.classList.contains('contact-link')) {
      ajaxCall(sections.contact, 'html/contact.html');
    }

  });
}

var loadProjectPageByScreenSize = function() {
  if (isProjectsSelected != undefined) {
    if (window.innerWidth > 991 && isProjectsSelected.classList.contains('projects')) {
      ajaxCall(sections.projects, 'html/projects-large.html')
    } else {
      ajaxCall(sections.projects, 'html/projects-small-and-med.html');
    }
  }
}

window.addEventListener('resize', loadProjectPageByScreenSize, false);


function playVideoOnHover() {

  var projectVideos = document.querySelectorAll('.project-vids');

  for (var i = 0; i < projectVideos.length; i++) {

    projectVideos[i].addEventListener('mouseenter', function() {
      this.play();
    });

    projectVideos[i].addEventListener('mouseout', function() {
      this.pause();
    });
  }
}