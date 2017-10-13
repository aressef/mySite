var xhr = new XMLHttpRequest();
var sectionDiv = document.querySelector('.js-section');

// AJAX request for sections html
var ajaxCall = function (section, file) {
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var sectionDivHTML = document.createRange().createContextualFragment(xhr.responseText);
        section(sectionDivHTML);
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
      ajaxCall(sections.projects, 'html/projects-small-and-med.html');
    } else if (this.classList.contains('contact-link')) {
      ajaxCall(sections.contact, 'html/contact.html');
    }

  });
}


var projectsUL = document.querySelector('js-projects-ul');
console.log(projectsUL);

if (screen.availWidth > 991) {

}