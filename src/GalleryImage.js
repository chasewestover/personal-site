import { Link } from "react-router-dom";

function GalleryImage({ src, id, alt, type }) {
  return (
    <Link to={`${type}/${id}`}>
      <div>

        <img src={src} alt={alt} className=' w-full float-left mb-7' />
      </div>
    </Link>
  );
}


export default GalleryImage;