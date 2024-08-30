import logo from './logo.svg';
import './App.css';
const topDesserts =[
  { 
    id : "1",
    title : "Tiramisu",
    description : "The best tiramisu in town",
    image :"https://picsum.photo/200/300/?random",
    price:"$5.00",
  },
  { 
    id : "2",
    title : "Lemon Ice Cream",
    description : "Mind blowing taste",
    image :"https://picsum.photo/200/300/?random",
    price:"$4.50",
  },
  { 
    id : "3",
    title : "Chocolate mousse",
    description : "Unexplored flavour",
    image :"https://picsum.photo/200/300/?random",
    price:"$6.00",
  }
];
// return the data as it is 
// const topDesserts = data.map(dessert=>{
//   return dessert;
// })
// const topDesserts = data.map(dessert=>{
//   return {
//     content : `${dessert.title} - ${dessert.description}`,
//     price : dessert.price ,
//   }
// })

function App() {
  //console.log(topDesserts);
  const listItems = topDesserts.map(dessert =>{
    const itemText =`${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>
  })
  return (
    <div >
      <ul>
       {listItems}
      </ul>
    </div>
  );
}

export default App;
