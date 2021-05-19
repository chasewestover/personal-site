
import Jobly from '../vids/Jobly.mp4';
import Warbler from '../vids/Warbler.mp4';

const work = [
  { src: Jobly, id: 'jobly', title: "Jobly", 
  technologies: 'Node',
  description: [`Jobly is a full-stack application that matches job seekers and employers. Jobly was built using a Node/ Express\
   back-end and a React front-end. The application allows logged in users to browse and search hiring companies and jobs by name\
    or company. It also allows users to edit their profile and apply for specific jobs.`,

    `This project used test driven development (TDD) on the back-end and learn how to think through a detailed component hierarchy on\
    the front-end.`],
  links: [
    ['Demo', 'https://chasewestover.github.io/Jobly-frontend/'],
    [''],
    ['Github (frontend)', 'https://github.com/chasewestover/Jobly-frontend'], 
    [''],
    ['Github (backend)', 'https://github.com/chasewestover/Jobly-backend']], 
  theme: 'green-600'},
  { src: Warbler, id: 'warbler', title: "Warbler", 
  technologies: 'Node',
  description: [`Warbler is a Twitter clone utilizing Flask, PostgreSQL, and SQLAlchemy, on the back-end and Jinja templating,\
   jQuery, and Axios on the front-end. I built this application off of a semi-functioning clone.`,

    `My main roles were to fix bugs in the user profile, logout, and homepage routes, add profile editing functionality, and add \
    the ability to like a Warble. I also added extensive testing, including model and view unit tests.`,

    `This project allowed me to work with a large codebase written primarily by others. It helped me understand object oriented \
    programming and design and improved my backend testing abilities.`], 
  
  links: [
    ['Demo', 'https://warbler-star.herokuapp.com/'], 
    [''],
    ['Github', 'https://github.com/chasewestover/Flask-Warbler'], ],
  theme: 'red-500' },
];

export default work;