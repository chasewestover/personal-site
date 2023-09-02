import { Link } from "react-router-dom";

function GalleryImage({
    src,
    id,
    type,
}: {
    src: string;

    id: string;
    type: string;
}) {
    return (
        <Link to={`${type}/${id}`}>
            <div>
                <img src={src} alt="" className="gallery-image" />
            </div>
        </Link>
    );
}

export default GalleryImage;
