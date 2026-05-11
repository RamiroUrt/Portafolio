import { useState } from "react";
import BrowserWindow from "../components/layout/BrowserWindow/BrowserWindow";
import Aside from "../components/layout/Sidebar/Sidebar";
import Loader from "../components/ui/Loader/Loader"; 
import { ThemeProvider } from "../context/ThemeContext"; 

function App() {
  const [renderMain, setRenderMain] = useState(false);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  const handleLoaderFinish = () => {
    setRenderMain(true);

    requestAnimationFrame(() => {
      setTimeout(() => {
        setIsLoaderVisible(false);
      }, 10); 
    });
  };

  return (
    <ThemeProvider>
      {renderMain && (
        <main className="main-layout">
          <Aside />
          <BrowserWindow />
        </main>
      )}

      {isLoaderVisible && (
        <Loader onFinish={handleLoaderFinish} />
      )}
    </ThemeProvider>
  );
}
export default App;