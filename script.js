let homeLink = document.getElementById('home-link');
let resumeLink = document.getElementById('resume-link');
let projectsLink = document.getElementById('projects-link');
let aboutLink = document.getElementById('about-link');

function hideAllSectionContents() {
  let sectionContents =
    document.getElementsByClassName('section-content');

  for (let i = 0; i < sectionContents.length; i++) {
    sectionContents[i].style.display = 'none';
  }
}

homeLink.addEventListener('click', function () {
  hideAllSectionContents();
  document.getElementById('home').style.display = 'block';
});

resumeLink.addEventListener('click', function () {
  hideAllSectionContents();
  document.getElementById('resume').style.display = 'block';
});

projectsLink.addEventListener('click', function () {
  hideAllSectionContents();
  document.getElementById('projects').style.display = 'block';
});

aboutLink.addEventListener('click', function () {
  hideAllSectionContents();
  document.getElementById('about').style.display = 'block';
});
