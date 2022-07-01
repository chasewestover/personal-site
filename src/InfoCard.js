import { v4 as uuidv4 } from "uuid";

function InfoCard({ src, title, technologies, description, links, theme }) {
  return (
    <div className="max-w-3xl mx-auto my-20 text-center">
      <div className={`max-w-xl mx-auto shadow-lg`}>
        <video src={src} loop autoPlay muted playsInline />
      </div>
      <div>
        <h1 className="font-bold">{title}</h1>
        <h4>{technologies}</h4>
        {description.map((d) => (
          <p key={uuidv4()} className="my-2 text-left">
            {d}
          </p>
        ))}

        <p>
          {links.map((link) =>
            link.length === 2 ? (
              <a key={uuidv4()} className="mx-2" href={link[1]}>
                {link[0]}
              </a>
            ) : (
              <b key={uuidv4()} className="mx-2">
                ●
              </b>
            )
          )}
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
