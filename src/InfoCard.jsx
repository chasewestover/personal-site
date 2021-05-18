function InfoCard({src, id, title, technologies, description, links, theme}) {

  return (
  <div className='max-w-3xl px-5 mx-auto my-20 text-center'>
    <h1 className='font-bold'>{title}</h1>
    <div className={`max-w-xl mx-auto shadow-lg rounded border-4 border-${theme}`}>
      <video src={src} loop autoPlay className=''/>
    </div>
    <div>
      <h4>{technologies}</h4>
      {description.map(d => <p className='my-2 text-left'>{d}</p>)}
      
      <p>
        <a className='mx-2' href={links[0]}>Github</a>
        ●
        <a className='mx-2' href={links[1]}>Demo</a>
      </p>
    </div>
  </div>
  )
}

export default InfoCard