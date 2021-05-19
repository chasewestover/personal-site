import { useParams } from "react-router";
import Flickity from 'react-flickity-component'

const flickityOptions = {
  // initialIndex: 0
  autoPlay: 3000
}


function Details({resources}){
  const {id} = useParams()
  console.log(id, resources)
  const {images, description, title} = resources.find(r => r.id === id);
  
  return (
    <div >
      <div className='mx-10 my-5'>
        <h1>{title}</h1>
        {description.map(d => <p className='my-5'>{d}</p>)}
      </div>
      <Flickity
        className={'carousel '} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {images && images.map(i => (
          <img classname="mx-5 px-5" src={i} alt='' style={{height: "500px", width: "auto", margin: '50 50'}}/>
        ))}
      </Flickity>
      
    </div>
  )
}

export default Details