
import Jobly from '../gifs/jobly.gif';

const work = [
  { src: Jobly, id: 'jobly', title: "Warbler", 
  technologies: 'Node',
  description: `Warbler is a Twitter clone utilizing Flask, PostgreSQL, and SQLAlchemy, on the back-end and Jinja templating,\
   jQuery, and Axios on the front-end. I built this application off of a semi-functioning clone.

    My main roles were to fix bugs in the user profile, logout, and homepage routes, add profile editing functionality, and add \
    the ability to like a Warble. I also added extensive testing, including model and view unit tests.

    This project allowed me to work with a large codebase written primarily by others. It helped me understand object oriented \
    programming and design and improved my backend testing abilities.`, 
  
  links: ['github', 'demo'] },
  { src: Jobly, id: 'jobly', title: "Warbler", 
  technologies: 'Node',
  description: `Jobly is a full-stack application that matches job seekers and employers. Jobly was built using a Node/ Express\
   back-end and a React front-end. The application allows logged in users to browse and search hiring companies and jobs by name\
    or company. It also allows users to edit their profile and apply for specific jobs.

    This project used test driven development (TDD) on the back-end and learn how to think through a detailed component hierarchy on\
    the front-end.`, 
  
  links: ['github', 'demo'] },
];

export default work;