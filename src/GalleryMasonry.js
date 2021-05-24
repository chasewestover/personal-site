import GalleryImage from "./GalleryImage";

function GalleryMasonry({resources, type}){

  return (
    <div className='masonry -mx-4 md:-mx-5>'>

      {resources.map(r => (
       <GalleryImage key={r.src} type={type} {...r}/>
      ))}
    </div>
  )
}

export default GalleryMasonry;