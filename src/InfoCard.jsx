

function InfoCard({src, id, title, technologies, description, links, theme}) {

  return (
  <div className='max-w-3xl px-5 mx-auto my-20 text-center'>
    <h1 className='font-bold'>{title}</h1>
    <div className={`max-w-xl mx-auto shadow-lg border-${theme}`}>
      <video src={src} loop autoPlay muted />
    </div>
    <div>
      <h4>{technologies}</h4>
      {description.map(d => <p className='my-2 text-left'>{d}</p>)}
      
      <p>
        {links.map(l => l.length === 2 
        ? (<a className='mx-2' href={l[1]}>{l[0]}</a> )
        : <b className='mx-2'>●</b>
        )}
        
        {/* 
        <a className='mx-2' href={links[1]}>Demo</a> */}
      </p>
    </div>
  </div>
  )
}

export default InfoCard