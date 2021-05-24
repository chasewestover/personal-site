import GalleryImage from "./GalleryImage";

function GalleryMasonry({resources, type}){

  return (
    <div className='masonry -mx-4 md:-mx-10 lg:-mx-28 xl:mx-0'>

      {resources.map(r => (
       <GalleryImage key={r.src} type={type} {...r}/>
      ))}
    </div>
  )
}

export default GalleryMasonry;