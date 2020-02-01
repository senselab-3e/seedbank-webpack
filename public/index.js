import React from "react";
import ReactDOM from "react-dom";
import moduleName from 'module'

import MyImage from './assets/dog.jpg';
import './index.css';

const App = () => {
  return (
    <div>
        <div>Index page</div>
        <img src={MyImage} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));