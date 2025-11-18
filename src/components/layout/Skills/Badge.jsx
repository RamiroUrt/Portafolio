

const Badge = ({icon, text, alt}) => {
  return (
    <>
    <div className="box-badge">
        <div className="icon-skills">
            <img src={icon} alt={alt} loading='lazy' title={alt}/>
        </div>
            <div className="box-text">{text}</div>
    </div>
    </>
  )
}

export default Badge