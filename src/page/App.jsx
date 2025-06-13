import React,{ useEffect, useState, Suspense } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { I18nProvider } from "../context/I18nContext";

const Loader = React.lazy(() => import("../components/loader/Loader"));
const Layout = React.lazy(() => import("../components/layout/LayoutPage"));
const Nav = React.lazy(() => import("../components/layout/Nav"));
const LayoutPage = React.lazy(() => import("./LayoutPage"));

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("About Me");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <I18nProvider>
        <Suspense fallback={<div className="lock-screen"></div>}>
          {loading ? (
            <Loader />
          ) : (
            <Layout>
              <Nav
                currentSection={currentSection}
                onChangeSection={setCurrentSection}
              />
              <LayoutPage section={currentSection} />
            </Layout>
          )}
        </Suspense>
      </I18nProvider>
    </ThemeProvider>
  );
};

export default App;
