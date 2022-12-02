import { Link } from "react-router-dom";

function GalleryImage({ src, id, alt, type }) {
  return (
    <Link to={`${type}/${id}`}>
      <div>

        <img src={src} alt={alt} className="gallery-image" />
      </div>
    </Link>
  );
}


export default GalleryImage;