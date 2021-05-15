import InfoCard from "./InfoCard";

function GalleryScroll({resources}){

  return (
    <div className=''>

      {resources.map(r => (
       <InfoCard key={r.src} {...r}/>
      ))}
    </div>
  )
}

export default GalleryScroll;