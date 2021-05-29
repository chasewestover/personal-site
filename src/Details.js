import { useParams } from "react-router";
import Carousel from "./Carousel";


function Details({resources}){
  const {id} = useParams()
  const {images, description, title, link} = resources.find(r => r.id === id);
  
  return (
    <div >
      <div className='my-5'>
        <h1>{title}</h1>
        {description.map(d => <p key={description} className='my-5'>{d}</p>)}
      </div>
      {link && <div className='text-blue-500 my-5'><a  href={link}>Project</a></div>}
      <Carousel images={images}/>
      
    </div>
  )
}

export default Details