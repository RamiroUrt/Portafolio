import '../assets/css/CardCont.css'

// eslint-disable-next-line react/prop-types
const CardExp = ({svg, tech}) => {
  return (
    <article className="article_exp">
        <img src={svg} alt="" className='img-svg'/>
        <h1 data-cursor="text" className='text'>{tech}</h1>
    </article>
  )
}

export default CardExp