import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom'
import Route from  'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
