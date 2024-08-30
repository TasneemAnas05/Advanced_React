import * as React from 'react';
import './App.css';

const Row = ({children , spacing}) => {
  //for all childs except the first one
  const childStyle = {
  marginLeft : `${spacing}px`,
  };
  return(
    <div className='Row'>
      {React.Children.map(children ,(child , index) =>{
          return React.cloneElement(child , {
            // new style to merge the previous style
            style : {
                 ...child.props.style,
                 ...(index > 0 ? childStyle :{}),//except the first child
            },
          });//return each child as a copy 
      })}
    </div>
  )
}

function LiveOrders() {
  return (
    <div className="App">
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}

export default LiveOrders;

