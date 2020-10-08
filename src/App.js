import React from 'react';
import {HeaderNav} from "./layouts/HeaderNav";
import {MainContent} from "./layouts/MainContent";

function App() {
  return (
<div className="min-h-screen bg-gray-100">
   <HeaderNav/>
   <MainContent/>
</div>
  );
}

export default App;
