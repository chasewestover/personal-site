

function InfoCard({src, id, title, technologies, description, links, theme}) {

  return (
  <div className='max-w-3xl mx-auto my-20 text-center'>
    
    <div className={`max-w-xl mx-auto shadow-lg`}>
      <video src={src} loop autoPlay muted playsInline/>
    </div>
    <div>
      <h1 className='font-bold'>{title}</h1>
      <h4>{technologies}</h4>
      {description.map(d => <p className='my-2 text-left'>{d}</p>)}
      
      <p>
        {links.map(l => l.length === 2 
        ? (<a className='mx-2' href={l[1]}>{l[0]}</a> )
        : <b className='mx-2'>●</b>
        )}
      </p>
    </div>
  </div>
  )
}

export default InfoCard