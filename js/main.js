var xhr = new XMLHttpRequest();
var sectionDiv = document.querySelector('.js-section');

// AJAX request for sections html
var ajaxCall = function (section, file) {
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // console.log(xhr.responseText);
        var sectionDivHTML = document.createRange().createContextualFragment(xhr.responseText);
        // sectionDivHTML = xhr.responseText;
        // console.log(sectionDivHTML);
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

    if (this.classList.contains('about-me')) {
      ajaxCall(sections.about, 'about.html');
    } else if (this.classList.contains('projects')) {
      ajaxCall(sections.projects, 'projects.html');
    } else if (this.classList.contains('contact')) {
      ajaxCall(sections.contact, 'contact.html');
    }

  });
}
