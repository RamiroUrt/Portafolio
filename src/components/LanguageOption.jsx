import '../assets/LanguageOption.css';

const LanguageOption = () => {
  return (
<div className="wrapper dark:-bg--light-black--">
  <div className="option">
    <input checked="" value="option1" name="btn" type="radio" className="input" />
    <div className="btn">
      <span className="span dark:-text--light-white">English</span>
    </div>
  </div>
  <div className="option">
    <input value="option2" name="btn" type="radio" className="input" />
    <div className="btn">
      <span className="span dark:-text--light-white">Spanish</span>
    </div>
  </div>
</div>

  );
}

export default LanguageOption;
