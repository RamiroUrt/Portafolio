import { useState } from "react";
import BrowserWindow from "../components/layout/BrowserWindow/BrowserWindow";
import Aside from "../components/layout/Sidebar/Sidebar";
import Loader from "../components/ui/Loader/Loader"; 
import AlertIOS from "../components/ui/Alert/Toast"; 
import { ThemeProvider } from "../context/ThemeContext"; 
import { TabProvider } from '../context/tabContex';
function App() {
  const [renderMain, setRenderMain] = useState(false);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [showTutorial, setShowTutorial] = useState(false); 

  const handleLoaderFinish = () => {
    setRenderMain(true);

    requestAnimationFrame(() => {
      setTimeout(() => {
         setIsLoaderVisible(false);
        
        setTimeout(() => {
          setShowTutorial(true);
        }, 500);

      }, 10); 
    });
  };

  return (
    <ThemeProvider>
      <TabProvider>
      {renderMain && (
        <main className="main-layout">
          <Aside />
          <BrowserWindow />
          
          <AlertIOS 
            show={showTutorial} 
            onClose={() => setShowTutorial(false)} 
            translationKey="welcome"
          />
        </main>
       )}

       {isLoaderVisible && (
        <Loader onFinish={handleLoaderFinish} />
      )} 
      </TabProvider>
    </ThemeProvider>
  );
}

export default App;