import {Link} from 'react-router-dom'

function Contact(){
  return (
    <div className='my-5 text-blue-500 text-xl'>
      <Link to="/files/ChaseWestover.pdf" target="_blank" download>Resumé</Link>
      <br/>
      <a href='https://www.linkedin.com/in/chasewestover/'>LinkedIn</a>
    </div>
  )
}

export default Contact