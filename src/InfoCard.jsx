function InfoCard({src, id, title, technologies, description, links}) {

  return <div className='max-w-3xl px-5 mx-auto my-20 text-center'>
    <div className='max-w-xl mx-auto'>
      <img src={src} alt=''/>
    </div>
    <div>
      <h1 className='font-bold'>{title}</h1>
      <h4>{technologies}</h4>
      <p className='text-left'>{description}</p>
      <p>
        <a className='mx-2' href={links[0]}>Github</a>
        ●
        <a className='mx-2' href={links[1]}>Demo</a>
      </p>
      <button>Something</button>
    </div>
  </div>
}

export default InfoCard