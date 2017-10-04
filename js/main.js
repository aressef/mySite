var xhr = new XMLHttpRequest();

// AJAX request for sections html
var ajaxCall = function (section, file) {
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        sections.section();
      } else {
        console.log('Error: ' + xhr.status);
      }
    }
  };

  xhr.open('GET', file);
  xhr.send(null);
};


var sections = {
  sectionDiv: document.querySelector('.js-section'),

  about: function(html) {
    this.sectionDiv.appendChild(html);
    console.log('about');
  },

  projects: function() {
    this.sectionDiv.appendChild(html);
    console.log('projects');
  },

  contact: function() {
    this.sectionDiv.appendChild(html);
    console.log('contact');
  }
}


var sectionLinkClicked = document.querySelectorAll('.js-section-link');

for (var i = 0; i < sectionLinkClicked.length; i++) {
  sectionLinkClicked[i].addEventListener('click', function() {

    if (this.classList.contains('about-me')) {
      ajaxCall('about', 'about.html');
    } else if (this.classList.contains('projects')) {
      ajaxCall('projects', 'projects.html');
    } else if (this.classList.contains('contact')) {
      ajaxCall('contact', 'contact.html');
    }
  });
}
