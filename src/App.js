import React from 'react';
import Navbar from './navbar';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Testimonial from './Testimonial';
import Contact from './Contact';
import {Route, Link} from 'react-router-dom';

const App=() =>{
  return (
    <div>
      <Navbar />
      <Route path="/" component={Home}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/skills" component={Skills}/>
      <Route path="/testimonial" component={Testimonial}/>
      <Route path="/contact" component={Contact}/>
    </div>
  );
}

export default App;
