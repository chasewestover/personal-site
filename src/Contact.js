import {Link} from 'react-router-dom'
import resume from './files/CWResumé.pdf'

function Contact(){
  return (
    <div className='my-5 text-blue-500 text-xl'>
      <Link to={resume} target="_blank" download>Resumé</Link>
      <br/>
      <a href='https://www.linkedin.com/in/chasewestover/'>LinkedIn</a>
    </div>
  )
}

export default Contact