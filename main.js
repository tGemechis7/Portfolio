function Nav() {
  document.getElementById('first-Nav').style.display = 'block';
}
const projectname = document.querySelector('.projectname');
const workSections = document.querySelector('.project-section');

const projectsList = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/project1.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end devs',
    company: 'canopy',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: '<h1>Multi-post stories<h1>',
    description: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required.<p>',
    imageLink: 'images/project2.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Full Stack Devo',
    company: 'Facebook',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: '<h1>Facebook 360 <h>',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    imageLink: 'images/project3.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: '<h1>Uber Navigation<h1>',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/project4.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Lead developer',
    company: 'Uber',
    year: '2018',
    sourceLink: '#',
    demoLink: '#',
  },
];

workSections.innerHTML = '';
for (let i = 0; i < projectsList.length; i += 1) {
  let languages = '';
  projectsList[i].technologies.forEach((language) => {
    languages += `
      <li><a href='' class='skill' title='${language}' >${language}</a></li>
    `;
  });
  workSections.innerHTML += `
      <div class='projects'>
          <div class='img-web' >
            <img src='${projectsList[i].imageLink}' alt='work 1' class='' />
          </div>
          <div class='project-description'>
            <h1 class='title'>${projectsList[i].name}</h1>
            <div class='role row'>
              <div class="role-name">${projectsList[i].company}</div>
                <div class="role-dot"></div>
                <div class="role-job">${projectsList[i].role}</div>
                <div class="role-dot"></div>
                <div class="role-year">${projectsList[i].year}</div>
            </div>
            <div class='project-details'>
              <p>
              <body style="font-size:12px;"> HELLO WORLD </body></html>
                ${projectsList[i].description}
              </p>

              <ul class='skills'>
                ${languages}
              </ul>
              <div classs="button-click">
                <button type='button' class='btn btn-enabled project-modal-${i}'>See project</button>
              </div>
            </div>
          </div>
    </div>
  `;
}

for (let i = 0; i < projectsList.length; i += 1) {
  document.querySelector(`.project-modal-${i}`).addEventListener('click', () => {
    projectname.innerHTML = projectsList[i].name;
    modalImg.src = projectsList[i].imageLink;
    company.innerHTML = projectsList[i].company;
    role.innerHTML = projectsList[i].role;
    year.innerHTML = projectsList[i].year;

   
  });
}
const email = document.querySelector('#useremail');
const validationAlert = document.querySelector('.alert');
const contactForm = document.querySelector('.contact-me');
contactForm.addEventListener('submit', (event) => {
  const regex = /[A-Z]/;
  const emailContent = email.value;
  if (regex.test(emailContent)) {
    validationAlert.innerHTML = 'Your email address should not contain uppercase letters';
    event.preventDefault();
  }
});
