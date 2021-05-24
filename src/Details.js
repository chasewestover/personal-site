import { useParams } from "react-router";
import Carousel from "./Carousel";


function Details({resources}){
  const {id} = useParams()
  console.log(id, resources)
  const {images, description, title} = resources.find(r => r.id === id);
  
  return (
    <div >
      <div className='my-5'>
        <h1>{title}</h1>
        {description.map(d => <p key={description} className='my-5'>{d}</p>)}
      </div>
      <Carousel images={images}/>
    </div>
  )
}

export default Details