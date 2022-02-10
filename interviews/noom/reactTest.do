// 1.) JavaScript Security analyzes understanding of JavaScript security issues such as same origin policy and cross-site scripting attacks.

same origin policy - browser js must have same protocol/hostname/protocol
cross site scripting - attacker makes website vunerable to attack. User uses it and runs script and loses cookie or something.


// 2.) Arrow Functions tests knowledge of the shorthand function syntax (=>) in JavaScript and understanding the scope and binding of the "this" value.

Arrow Function this depends on lexical context and parent function surrounding child
function this depends on how it is called using function, call, apply, bind. For last two it is the first arg

  arrow functions are the best choice when working with closures or callbacks, 
  but not a good choice when working with class/object methods or constructors.

// 3.) Classes determines knowledge of classes in JavaScript, including their syntax, inheritance, and how they compare to prototypes.

for performant methods - stick in memory, storage for common pieces of functionality. 
Create a bond that connects our data to functionality. Only found if not available in original object. 

Object.create - alway returns an empty obj, You can pass in an store that JS creates a bond from object to what is passed in. 
So now we have a lookup process.

a.)Literal construction
b.)dot Notification
c.)obj.create()  only one method, many objects but all have access to one method.

this - rules
a.) left of the dot rule - user1.increment(), executing a method this will equal the object that we are executing that method on
    this.score++, user1.score++

b.) using new keyword - this is the new object created.


What is bond?
__proto__
new will automate 
1.)return of new obj
2.)creation of obj automatically done.
3.)What is __proto__ pointing to? What is JS points to? function is an object. 

- userCreator.name = Carlos /* do something to object form */
- userCreator() /* invoke using function form */

On the object form of userCreator JS creates a prototype : another obj
set __proto__ to prototype object of the obj form..

Usercreator.prototype.increment = function(){}

what happens with new?
1.) assigns new object ot this.
2.) this object - bonus piece, __proto__, points to prototype object of the object form of userCreator
3.) set this.name property
4.) set this.score property
5.) this obj gets returned
6.) stored in user1 global memory.


Protoype is stored as object in object form of function.


// JavaScript Features Used with React measures knowledge of destructuring, rest and spread operators, and template literals in JavaScript.
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, 
or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// React.js: Events, Refs and Router measures knowledge of the use of refs to maintain parent-child relationship; also measures understanding of how routing is handled when events are invoked or triggered inside React.js.
Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.

Refs are created using React.createRef() and attached to React elements via the ref attribute. 
Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.


// React.js: Components tests knowledge of components as the building blocks of React.js. Also measures understanding of subcomponent creation for use with HTML and JavaScript.
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and 
return React elements describing what should appear on the screen.


// React.js: Configuration and Setup measures understanding of React.js setup and configuration for use in a web application, as well as customizing parameters for use in a production environment.


// React.js: Hooks and Context tests knowledge of hooks as ways to use React features without writing classes and the use of context to pass data without having to pass props down at every level of the component tree.
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

1.)Wrapper Hell
2.)huge components
3.)Confusing classes




export default class Greetings extends React.Component
  constructor(props) {
    super(props)
    this.state = {
      name: 'Mary'
    }
  }
  this.handleNameChange = this.handleNameChange(this)

  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
  }

  render(){

    <input 
        value={this.state.name}
        onChange={this.handleNameChange}
  }

import React, { useState, useContext } from 'react';
import { ThemeContext, LocaleContext } from './context';

export default function Greeeting(props){
  const [name, setName] = useState('mary')   // hook into react state
  const them = useContext(ThemeContext);
  const locale = useContext(LocaleContext);

  function handleNameChange(e){
    setName(e.target.value)
  }


  useEffect(() =>{
    document.title = name + ' ' + surname;
  })

  return (
    <input 
       value={name}
       onChange={HandleNameChange}
  )
}


Context - global variables - avoid passing props



// React.js: JSX assesses knowledge of JSX and how it compares to XML, HTML and JavaScript. Also examines how to embed regular HTML inside JavaScript code, as well as how JSX is used in React.js.

Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function

// React.js: Lifecycle Methods tests knowledge of how and when lifecycle methods of React.js are invoked and the purpose of each method, as well as understanding of important lifecycle functions.

// Mounting

constructor()
getDerivedStateFromProps()
CanvasRenderingContext2D()
componentDidMount()

// Updating

getDerivedStateFromProps()
shouldComponentUpdate()
render()
componentDidUpdate()

// UnMounting

componentWillUnmount() - unsubscribe
// React.js: Props measures knowledge of the use of props in React.js in conjunction with components and in states.
// Also tests the read-only nature of props and how to extract data from complex props.

// React.js: State tests understanding of a state in React.js, including the use of states with props and how states can be used to re-render the view.

 
// constructor
Typically, in React constructors are only used for two purposes:

Initializing local state by assigning an object to this.state.
Binding event handler methods to an instance.




// Classes tests knowledge of object-oriented programming using Python and object-oriented features like inheritance and polymorphism as well as subclassing, static methods, and private attributes.

// Control Flow determines knowledge of the Python flow control statements and generators (i.e., while, if, for, range, pass, yield, etc.) and what instructions are executed or evaluated depending on the value of the contextual data or the resulting expressions.

// Dictionaries assesses understanding of the ability to define and use dictionary (mapping) types in a Python program, including setting values, using default values, and iterations.

// Functions tests Python function definition syntax, parameter passing, and returning results. Lambda expressions are also covered.

// Modules and Imports tests understanding of how to use external modules in Python, how modules are defined, and how to use modules to enforce data hiding practices.

// Regular Expression Usage tests the definition and application of Python regular expressions to locate, extract, and change text in context.

// Backend Protocols determines knowledge of the authentication modules, middleware, caching, files and available protocols that help improve the usability and performance of the Django system.

// Django Models and Databases tests understanding of how the Django framework encapsulates database tables through models.

// Forms measures understanding of the tools and libraries to help build Django forms to accept input from site visitors.

// HTTP, URLs and Views measures understanding of how to create Django views and then how to access views via URL mappings.

// Templates determines knowledge of the Django template language and how Django generates HTML dynamically.

// Testing and Deployment analyzes ability to deploy Django, start a Django server, and use Django's test-execution framework.