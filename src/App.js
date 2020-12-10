import React from "react";
import AboutSection from "./components/AboutSection";
// Global style
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
// Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
