import { useParams } from "react-router";
import Carousel from "./Carousel";
import { ResourceType } from "./types";

function Details({ resources }: { resources: ResourceType[] }) {
    const { id }: { id: string } = useParams();
    const matchedResource = resources.find((r) => r.id === id);
    if (!matchedResource) {
        return null;
    }
    const { images, description, title, link } = matchedResource;

    return (
        <div>
            <div>
                <h1>{title}</h1>
                {description.map((d) => (
                    <p key={description.join()}>{d}</p>
                ))}
            </div>
            {link && (
                <div>
                    <a href={link}>Project</a>
                </div>
            )}
            <Carousel images={images} />
        </div>
    );
}

export default Details;
