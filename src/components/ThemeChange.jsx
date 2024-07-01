import '../assets/ThemeChange.css';

const ThemeChange = () => {
  return (
    <div className="themeChange">
      <label className="ui-switch">
        <input type="checkbox" className='checkbox'/>
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </div>
  )
}

export default ThemeChange;
