1. const JSX = <h1>Hello JSX!</h1>;

2.const JSX =
<div>
<h1>MicroLocs By Tianak</h1>
<p>I specialize in:</p>
<ul>
<li>Microlocs</li>
<li>Loc Extensions</li>
<li>Instant Locs</li>
</ul>
</div>

3.const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
     {/*comments are helpful*/}
  </div>
);

4.onst JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
let targetNode = document.getElementById("challenge-node");
ReactDOM.render(JSX, targetNode);

5.const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

6.const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

7.const MyComponent = function() {
  // Change code below this line
return (
  <div className="firstClass">
  
  <h1>I hope this is right</h1>
  </div>
);

8. class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
return (
  <div>
  <h1>Hello React!</h1>
  </div>
)
// Change code above this line
  }
};

9. const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

10. class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }

<ChildCompenent />
        { /* Change code above this line */ }
      </div>
    );
  }
};

11. const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
<TypesOfFruit />
      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
<Fruits />
        { /* Change code above this line */ }
      </div>
    );
  }
};


12. class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
<NonCitrus />
<Citrus />
        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
<Fruits />
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};


13.class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
<Fruits />
<Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
let targetNode = document.getElementById("challenge-node"); ReactDOM.render(<TypesOfFood />, targetNode);


14. class MyComponent extends React.Component{
  render(){
    return (
      <div>
      <h1>My First React Component!</h1>
      </div>
    )
  }
}
let targetNode = document.getElementById("challenge-node");
ReactDOM.render(<MyComponent />, targetNode);

15 class MyComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      <h1>My First React Component!</h1>
      </div>
    )
  }
}
let targetNode = document.getElementById("challenge-node");
ReactDOM.render(<MyComponent />, targetNode);



16. const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date} </p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};

17.const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(" ,")}</p>
  { /* Change code above this line */ }
};

18. class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={["walk dog", "workout"]}/>
        
        <h2>Tomorrow</h2>
        <List tasks={["one", "two", "three"]}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};

19.const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <p>Items: {props.items}</p>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps ={
  items:0
}

20. const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
  return <Items quantity={10}/>
    { /* Change code above this line */ }
  }
};


21. const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
}
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};


22. class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Tatiana"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
23. const Camper = props => <p>{props.name}</p>;

Camper.defaultProps = {
  name: "CamperBot"
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

24. class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
this.state ={
  name: "Tatiana"
}
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


25.class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    
    
    this.state=
    {firstName:"Tatiana"}
    

  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};


26. class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
<h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};


27. class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
this.setState({
  name:"React Rocks!"
});
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
28. class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line
this.handleClick = this.handleClick.bind(this);
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};


29.class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
    this.setState(state => {
      if (state.visibility === true) {
         return { visibility: false };
       } else {
         return { visibility: true };
      }
    });
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};

30.  class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
  reset(){
    this.setState({ count:0 })
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};


31. class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
 handleChange (event) {

    this.setState({

      input: event.target.value

    })

  }

  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
 <input value={this.state.input} onChange={this.handleChange} />

        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};


32. class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line
event.preventDefault()
    this.setState({
      submit: this.state.input
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
<input
            value={this.state.input}
            onChange={this.handleChange} />
          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}
<h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}


33. class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot"
    };
  }
  render() {
    return (
      <div>
        // Here we will call this.state.name in order to pass the value of
        CamperBot // to the NavBar component
        <Navbar name={this.state.name} />
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        // Since we passed in the CamperBot state value into the the NavBar
        component above // the h1 element below will render the value passed
        from state
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
    );
  }
}

34. class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
         <GetInput
           input={this.state.inputValue}
           handleChange={this.handleChange}/>
         <RenderInput
           input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};


35.  componentWillMount() {
  console.log('Component being mounted');
}