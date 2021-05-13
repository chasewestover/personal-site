import GalleryImage from "./GalleryImage";

function GalleryMasonry({resources, type}){

  return (
    <div className='masonry'>

      {resources.map(r => (
       <GalleryImage key={r.src} type={type} {...r}/>
      ))}
    </div>
  )
}

export default GalleryMasonry;