import { React, useState, useEffect } from "react";
import AboutSection from "./components/AboutSection";
// Global style
import GlobalStyle from "./components/GlobalStyle";
// Components
import Nav from "./components/Nav";
// Pages
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import CustomDesktops from "./pages/CustomDesktops";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
// Router
import { Switch, Route, useLocation, BrowserRouter } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";
// Styled components
import styled from "styled-components";

function App() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // alert("hi");
    setIsNavOpen(false);
  }, [location]);

  return (
    <div className="App">
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <GlobalStyle />
      <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {/* <Route path="/" exact> */}
          <Route path={`${process.env.PUBLIC_URL}/`} exact>
            <AboutUs isNavOpen={isNavOpen} />
          </Route>
          {/* <Route path="/projects" exact> */}
          <Route path={`${process.env.PUBLIC_URL}/projects`} exact>
            <Projects isNavOpen={isNavOpen} />
          </Route>
          {/* <Route path="/projects/:id"> */}
          <Route path={`${process.env.PUBLIC_URL}/projects/:id`}>
            <ProjectDetail isNavOpen={isNavOpen} />
          </Route>
          {/* <Route path="/custom-desktops"> */}
          <Route path={`${process.env.PUBLIC_URL}/custom-desktops`}>
            <CustomDesktops isNavOpen={isNavOpen} />
          </Route>
          {/* <Route path="/contact"> */}
          <Route path={`${process.env.PUBLIC_URL}/contact`}>
            <Contact isNavOpen={isNavOpen} />
          </Route>
        </Switch>
      </AnimatePresence>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
