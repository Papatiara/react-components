
var GroceryList = (props) => (
    <ul> 
        <li>{props.buy[0]}</li>
        <li>{props.buy[1]}</li>
   </ul>
)

  var App = () => (
    <div>
        <h1> Grocery List </h1>
        <GroceryList buy={['Beans', 'Eggs']}/>
    </div>
  );


//<GroceryList buy={['Beans', 'Eggs']}/>
ReactDOM.render(<App/>, document.getElementById('app'));


