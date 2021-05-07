import GalleryImage from "./GalleryImage";

function Gallery({resources, type}){
  return (
    <div className="masonry">

      {resources.map(r => (
       <GalleryImage type={type} {...r}/>
      ))}
    </div>
  )
}

export default Gallery