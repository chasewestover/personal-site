import { useParams } from "react-router";
import Flickity from 'react-flickity-component'

const flickityOptions = {
  // initialIndex: 0
}


function Details({resources}){
  const {id} = useParams()
  console.log(id, resources)
  const {images, description, title} = resources.find(r => r.id === id);
  
  return (
    <div >
      <h1>{title}</h1>
      <p>{description}</p>
      <Flickity
        className={'carousel '} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {images && images.map(i => (
          <img src={i} style={{height: "500px"}}/>
        ))}
      </Flickity>
      
    </div>
  )
}

export default Details