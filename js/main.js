var xhr = new XMLHttpRequest();

// AJAX request for sections html
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log('Error: ' + xhr.status);
    }
  }
};

xhr.open('GET', 'projects.html');
xhr.send(null);


var sections = {
  about: function() {

  },

  projects: function() {

  },

  contact: function() {

  }
}


document.addEventListener("click", function() {
  document.querySelector(
      // figure out how to know which section item was clicked
  )
});
