import React from 'react';
import {HeaderNav} from "./layouts/HeaderNav";
import {MainContent} from "./layouts/MainContent";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
<div className="min-h-full bg-gray-100 ">
    <Router>
    <HeaderNav/>
   <MainContent/>
    </Router>
</div>
  );
}

export default App;
