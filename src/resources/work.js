
import Jobly from '../vids/Jobly.mp4';
import Warbler from '../vids/Warbler.mp4';
import SocialGrove from '../vids/SocialDine.mp4';

const work = [
  { src: Jobly, id: 'jobly', title: "Jobly", 
  technologies: 'Node, Express, React',
  description: [`Jobly is a full-stack job board application. Jobly was built using a Node/ Express\
   back-end and a React front-end. Logged in users can browse companies by name and size. They can browse jobs by
    name, salary, equity. Users can edit their profiles and apply for specific jobs`,

    `I learned test driven development while building the backend, and I learned how to design a complete component heirarchy to build
    the front-end.`],
  links: [
    ['Demo', 'https://chasewestover.github.io/Jobly-frontend/'],
    [''],
    ['Github (frontend)', 'https://github.com/chasewestover/Jobly-frontend'], 
    [''],
    ['Github (backend)', 'https://github.com/chasewestover/Jobly-backend']], 
  },
  { src: Warbler, id: 'warbler', title: "Warbler", 
  technologies: 'Flask, PostgreSQL, jQuery',
  description: [`Warbler is a Twitter clone that uses Flask, PostgreSQL, and SQLAlchemy on the back-end and Jinja,\
   jQuery, and Axios on the front-end. I built this application off of a semi-functioning clone.`,

    `My main tasks were to fix bugs in the user profile, logout, and homepage routes, add profile editing functionality, add \
    'like' functionality, add private account functionality, and add follow requests for private accounts. I added 
    extensive testing, including model and view unit tests.`,

    `During this project I learned how to navigate a large, unfamiliar codebase. It helped me understand object oriented \
    programming and design and improved my backend testing abilities.`], 
  
  links: [
    ['Demo', 'https://warbler-star.herokuapp.com/'], 
    [''],
    ['Github', 'https://github.com/chasewestover/Flask-Warbler'], ],
  },
  { src: SocialGrove, id: 'social-grove', title: "Social Grove", 
  technologies: 'React, Json Server',
  description: [`Social Grove is a social dining experience that lets users suggest dishes to be served and then vote on those dishes to
    determine the menu. It uses React on the frontend and a simple json server on the backend to manage the data`,

  `Regular users can add dishes and drinks and vote on their favorites. Admin users can remove items that don't meet the guidelines`], 
  
  links: [
    ['Demo', 'https://social-grove.surge.sh/'], 
    [''],
    ['Github', 'https://github.com/chasewestover/SocialGrove'], ]},
];

export default work;