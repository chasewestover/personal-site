import GalleryImage from "./GalleryImage";

function GalleryScroll({resources, type}){

  return (
    <div className='masonry'>

      {resources.map(r => (
       <GalleryImage key={r.src} type={type} {...r}/>
      ))}
    </div>
  )
}

export default GalleryScroll;