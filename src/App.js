import React from "react";
import AboutSection from "./components/AboutSection";
// Global style
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
// Router
import { Switch, Route, useLocation } from "react-router-dom";
// Pages
import ProjectDetail from "./pages/ProjectDetail";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/projects/:id">
            <ProjectDetail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
