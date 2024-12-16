import { useEffect, useState } from 'react';
import '../assets/css/ThemeChange.css';

const ThemeChange = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="themeChange">
      <button onClick={handleTheme} className="ui-switch">
        <input type="checkbox" className="checkbox" checked={theme === 'dark'} readOnly />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </button>
    </div>
  );
};

export default ThemeChange;
