import React from "react";
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
// Router
import { Switch, Route, useLocation, BrowserRouter } from "react-router-dom";
// Pages
import ProjectDetail from "./pages/ProjectDetail";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {/* <Route path="/" exact> */}
          <Route path={`${process.env.PUBLIC_URL}/`} exact>
            <AboutUs />
          </Route>
          {/* <Route path="/projects" exact> */}
          <Route path={`${process.env.PUBLIC_URL}/projects`} exact>
            <Projects />
          </Route>
          {/* <Route path="/projects/:id"> */}
          <Route path={`${process.env.PUBLIC_URL}/projects/:id`}>
            <ProjectDetail />
          </Route>
          {/* <Route path="/custom-desktops"> */}
          <Route path={`${process.env.PUBLIC_URL}/custom-desktops`}>
            <CustomDesktops />
          </Route>
          {/* <Route path="/contact"> */}
          <Route path={`${process.env.PUBLIC_URL}/contact`}>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
