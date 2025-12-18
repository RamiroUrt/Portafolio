import { ChevronLeft, ChevronRight, RotateCw, Share  } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useI18n } from '../../context/I18nContext';
import Layers from '../../assets/svg/Layers';
import ShareSvg from '../../assets/svg/ShareSvg';
import { useTheme } from '../../context/ThemeContext';
import ToggleControls from './Buttons/ToggleControls';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { GitHubIcon } from './icons/GitHubIcon';
const WindowItem = ({ window, active, onClick, index, moveWindow, t }) => {
  const { darkMode, toggleTheme } = useTheme();
  const ref = useRef(null);
  
  const [{ isDragging }, drag] = useDrag({
    type: 'WINDOW',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'WINDOW',
    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      
      if (dragIndex === hoverIndex) return;
      
      moveWindow(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`windows ${active ? 'active' : ''} ${isDragging ? 'dragging' : ''}`}
      onClick={() => !isDragging && onClick(window)}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="windows-content">
        <div className="circle" style={{ backgroundColor: getWindowColor(window, t) }}></div>
        <p className='windows-text title'>{window}</p>
      </div>
    </div>
  );
};

const Nav = ({ currentSection, onChangeSection }) => {
  const { darkMode, toggleTheme } = useTheme();
  const { t } = useI18n();
  const sectionKeys = [
    'about_me', 
    'experience', 
    'projects', 
    'skills',
    'education', 
    'pdf', 
  ];
  const getTranslatedSections = () => {
    return sectionKeys.map(key => t(`sections.${key}`));
  };
  const [showWindowGrid, setShowWindowGrid] = useState(false);
  const [windows, setWindows] = useState(getTranslatedSections());
  const [activeWindow, setActiveWindow] = useState(currentSection);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  // Update input value when activeWindow changes
  useEffect(() => {
    setInputValue(`https://wwww.ramirourteaga.online/${activeWindow.replace(/\s+/g, '')}`);
  }, [activeWindow]);

  useEffect(() => {
    setWindows(getTranslatedSections());
    // Mantener la sección activa traducida
    const activeKey = sectionKeys.find(key => 
      t(`sections.${key}`) === currentSection
    );
    if (activeKey) {
      setActiveWindow(t(`sections.${activeKey}`));
    }
  }, [t]);

  const moveWindow = (dragIndex, hoverIndex) => {
    const draggedItem = windows[dragIndex];
    const newWindows = [...windows];
    newWindows.splice(dragIndex, 1);
    newWindows.splice(hoverIndex, 0, draggedItem);
    setWindows(newWindows);
  };

  const handleWindowClick = (window) => {
    setActiveWindow(window);
    onChangeSection(window);
  };

  const navigateWindows = (direction) => {
    const currentIndex = windows.indexOf(activeWindow);
    let newIndex;
    
    if (direction === 'left') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : windows.length - 1;
    } else {
      newIndex = currentIndex < windows.length - 1 ? currentIndex + 1 : 0;
    }
    
    const nextWindow = windows[newIndex];
    setActiveWindow(nextWindow);
    onChangeSection(nextWindow);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigateFromInput();
    }
  };

  const handleInputBlur = () => {
    navigateFromInput();
  };

  const navigateFromInput = () => {
    // Extract the last part of the URL
    const path = inputValue.replace('http://localhost:5173/', '').trim();
    
    // Find matching window (case insensitive, ignore spaces)
    const matchingWindow = windows.find(window => 
      window.replace(/\s+/g, '').toLowerCase() === path.toLowerCase()
    );
    
    if (matchingWindow) {
      setActiveWindow(matchingWindow);
      onChangeSection(matchingWindow);
    } else {
      // If no match found, reset to current active window
      setInputValue(`http://localhost:5173/${activeWindow.replace(/\s+/g, '')}`);
    }
  };

  const handleRefreshClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // You could add actual refresh logic here if needed
  };

  return (
    <>
    <section className='navbar'>
      <nav>
        <div className="button-explorer">
          <div className="circle" style={{ backgroundColor: "#FF5F56" }}></div>
          <div className="circle" style={{ backgroundColor: "#FFBD2E" }}></div>
          <div className="circle" style={{ backgroundColor: "#27C93F" }}></div>
        </div>
        <div className="icons">
          <ChevronLeft 
            style={{cursor: 'pointer'}}
            size={25} 
            className='icon' 
            onClick={() => navigateWindows('left')}
          />
          <ChevronRight 
            style={{cursor: 'pointer'}}
            size={25} 
            className='icon' 
            onClick={() => navigateWindows('right')}
          />
          <div className="rotate" onClick={handleRefreshClick}>
            <RotateCw size={19} className='icon'/>
          </div>
        </div>
        <div className="explorer">
          <div className="explorer-text">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleInputKeyPress}
              onBlur={handleInputBlur}
              className="explorer-input text-secondary"
              spellCheck="false"
            />
          </div>
        </div>
      </nav>

      <DndProvider backend={HTML5Backend}>
        <div className="windows-bar">
          {windows.map((window, index) => (
            <WindowItem
              key={window}
              window={window}
              active={currentSection === window}
              onClick={() => handleWindowClick(window)}
              index={index}
              moveWindow={moveWindow}
              t={t}
            />
          ))}
        </div>
      </DndProvider>
    </section>


        <div className="navbar-mobile">
        {showWindowGrid && (
  <div className="window-grid-overlay">
    <div className="window-grid-header">
    <div className="explorer">
          <div className="explorer-text">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleInputKeyPress}
              onBlur={handleInputBlur}
              className="explorer-input text-secondary"
              spellCheck="false"
            />
          </div>
        </div>
    </div>
    <div className="container-mobile-tabs">
      <div className="text-windows-mobile">
        <h1 className='title'>FAVORITES</h1>
        <p className='text-secondary'>Show more</p>
      </div>
      <div className="window-wrapper">
        <div className="window-grid">
          {windows.map((window, index) => (
            <div
              key={index}
              className={`window-grid-item ${currentSection === window ? 'active' : ''}`}
              onClick={() => {
                handleWindowClick(window);
                setShowWindowGrid(false);
              }}
            >
              <div className="grid-circle" style={{ backgroundColor: getWindowColor(window, t) }}></div>
              <p className='grid-text'>{window}</p>
            </div>
          ))}
        </div>
      </div>
          <div className="toggle-mobile">
            <ToggleControls />
          <div className="buttons-social-mobile">
          <button className="icon-btn">
            <a target="_blank"  href="https://www.linkedin.com/in/ramiro-urteaga-b32430242/">
              <LinkedinIcon darkMode={darkMode} />
            </a>
          </button>
          <button className="icon-btn">
            <a href="https://github.com/RamiroUrt" target="_blank">
              <GitHubIcon darkMode={darkMode} />
            </a>
          </button>
        </div>
          </div>
        </div>
    </div>
)}

      <div className="icons-nav-mobile">
      <div className="icons-mobile">
          <ChevronLeft 
            style={{cursor: 'pointer'}}
            size={25} 
            className='icon' 
            onClick={() => navigateWindows('left')}
          />
          <ChevronRight 
            style={{cursor: 'pointer'}}
            size={25} 
            className='icon' 
            onClick={() => navigateWindows('right')}
          />
          <Share
            style={{cursor: 'pointer'}}
            size={25} 
            className='icon'/>
          <ShareSvg
            darkMode={darkMode} 
            style={{cursor: 'pointer'}}
            className={'icon icon-mobile share'}  
            />
          <Layers
            darkMode={darkMode} 
            style={{cursor: 'pointer'}}
            className={'icon icon-mobile layers'}
            onClick={() => setShowWindowGrid(prev => !prev)}
          />
  </div>
  
   </div>
  </div>
  </>
  );
};

const getWindowColor = (windowName, t) => {
  const colors = {
    'About Me': '#4A6FA5',       // Azul apagado, profundo pero tranquilo
    'Experience': '#A18BA4',     // Lavanda grisáceo para variedad
    'Projects': '#6BA292',       // Verde menta apagado
    'Skills': '#D3B66C',         // Amarillo mostaza suave
    'Resume': '#B47163',         // Rojo teja apagado
    'Education': '#7E9BAE',      // Azul grisáceo, intelectual
  
    'Sobre mí': '#4A6FA5',
    'Experiencia': '#A18BA4',
    'Proyectos': '#6BA292',
    'Habilidades': '#D3B66C',
    'Currículum': '#B47163',
    'Educación': '#7E9BAE'
  };

  const sectionKey = Object.entries(colors).find(([key]) => 
    t(`sections.${key}`) === windowName
  )?.[0];
  
  return colors[windowName] || '#CCCCCC';
};


export default Nav;