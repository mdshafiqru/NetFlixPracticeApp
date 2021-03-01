import React from 'react';
import Card from './component/Card';
import Sdata from './Sdata';


const App = (props) => (
  <>
    <h1 className='heading_style'>Top {Sdata.length} Original Netflix seriese in 2021</h1>
    {Sdata.map((val) => {
      return(
        <Card 
        key = {val.id}
        imgsrc = {val.imgsrc} 
        title = {val.title}
        sname = {val.sname}
        link = {val.link}  />
      )
    })}
  </>
);

export default App;
