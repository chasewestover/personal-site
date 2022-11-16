import InfoCard from "./InfoCard";

function GalleryScroll({ resources }) {
  return (
    <div className="mx-16 collapse-margins-large">
      {resources.map((r) => (
        <InfoCard key={r.src} {...r} />
      ))}
    </div>
  );
}

export default GalleryScroll;
