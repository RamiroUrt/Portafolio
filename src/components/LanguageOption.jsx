import '../assets/LanguageOption.css';

const LanguageOption = () => {
  return (
<div className="wrapper">
  <div className="option">
    <input checked="" value="option1" name="btn" type="radio" className="input" />
    <div className="btn">
      <span className="span">English</span>
    </div>
  </div>
  <div className="option">
    <input value="option2" name="btn" type="radio" className="input" />
    <div className="btn">
      <span className="span">Spanish</span>
    </div>
  </div>
</div>

  );
}

export default LanguageOption;
