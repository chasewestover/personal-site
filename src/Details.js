import { useParams } from "react-router";
import Carousel from "./Carousel";


function Details({resources}){
  const {id} = useParams()
  const {images, description, title, link} = resources.find(r => r.id === id);
  
  return (
    <div >
      <div >
        <h1>{title}</h1>
        {description.map(d => <p key={description} >{d}</p>)}
      </div>
      {link && <div ><a  href={link}>Project</a></div>}
      <Carousel images={images}/>
      
    </div>
  )
}

export default Details