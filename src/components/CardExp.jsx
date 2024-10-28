import '../assets/css/CardCont.css'

// eslint-disable-next-line react/prop-types
const CardExp = ({svg, tech}) => {
  return (
    <article className="article_exp">
        <img src={svg} alt="" />
        <h1>{tech}</h1>
    </article>
  )
}

export default CardExp