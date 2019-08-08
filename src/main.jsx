import React from 'react';
import './main.css';
import Header from './app/component/header';
// import Divider from '@material-ui/core/Divider';
import BigComponent from './app/component/component';
// import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Content from './app/component/content';

const Components = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}

function Main() {
    return (
        <BigComponent
          ClassName='Main'
          smallComponent={Components()}
        ></BigComponent>
      
      /*<div className="Main">
        <Header />
        <Divider light />
      </div>*/
    );
}
  
  export default Main;