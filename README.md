# JavaScript Overview

## JavaScript:
- **Interpreted Language**: JavaScript is not compiled but executed directly by the JavaScript engine in the browser or server. This means that the code is read and executed line by line.
- **Helps Obtain Info**: JavaScript can interact with the Document Object Model (DOM) to retrieve information from web pages, such as user inputs.
- **Weakly Typed Language**: Variables in JavaScript do not require a type definition. The type is inferred based on the value assigned to the variable. For instance, you can define a variable with `var a = 5;` and later change it to `a = "Hello";` without any error.

## Execution Environments:
- **In the Browser**:
  - **As a part of a website**: JavaScript can be embedded directly within HTML pages.
  - **Executes inside the browser**: The browser's JavaScript engine interprets and runs the code.
- **On any Computer**:
  - **Server-side Code**: Using environments like Node.js or Deno, JavaScript can be executed on the server.
  - **Outside of the Browser**: Node.js and Deno allow JavaScript to run directly on the machine, outside the browser environment.
- **On Mobile Devices**:
  - **Embedded Websites**: JavaScript can run on mobile browsers just like on desktops.
  - **Capacitor or React Native**: These technologies allow JavaScript to be used for building native mobile applications, providing access to mobile-specific features.

## Statements, Keywords, Identifiers, Values/Expressions:
- **Statements**: These are the commands that get executed in JavaScript. Examples include variable declarations, function calls, and control structures.
- **Keywords**: Reserved words in JavaScript that have special meanings and are used to perform various operations. Examples:
  - `let`: Declares a block-scoped variable.
  - `if`: Defines a conditional statement.
  - `for`: Creates a loop.
- **Identifiers**: Names given to various elements in the code, such as variables, functions, and objects. These are defined by developers and follow certain naming conventions.
  - Example: `alert()`, `age`
- **Values/Expressions**: These produce new values and can be constants, variables, or results of operations.
  - Example: `'Hello world'`, `5 - 3`

## Types of Values:
- **String**:
  - Textual data enclosed in single (`'`), double (`"`), or backticks (`` ` ``).
  - Example: `'Hello'`, `"World"`, `` `Template Literal` ``
- **Number**:
  - Numeric values can be integers or floating-point numbers.
  - Example: `42` (integer), `3.14` (float)
- **Boolean**:
  - Represents logical values: `true` or `false`.
  - Often used in conditions and control structures.
  - Example: `let isValid = true;`
- **Null or Undefined**:
  - `undefined`: A variable that has been declared but not assigned a value.
  - `null`: An explicitly assigned value indicating the absence of any value.
  - Example: `let x;` // x is undefined, `let y = null;` // y is null

## Why Variables?
- **Reusability**: Variables allow values to be stored and reused throughout the code, avoiding redundancy.
- **Readability**: Using variables helps to break down complex operations into simpler parts, making the code easier to read and maintain.

## Variables vs. Constants:
- **Variables**:
  - Declared using `let`.
  - Can be reassigned new values.
  - Example: `let age = 34; age = 35;`
- **Constants**:
  - Declared using `const`.
  - Once assigned, their values cannot be changed.
  - Example: `const PI = 3.14;` // PI cannot be reassigned

## Promises 
- Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never. A promise has three states:
  - **Pending**: The initial state, neither fulfilled nor rejected.
  - **Fulfilled**: The operation completed successfully.
  - **Rejected**: The operation failed.

## Async/Await
- Async/Await is syntactic sugar built on top of promises. It allows you to write asynchronous code in a synchronous style, making it more readable and easier to understand.
  - **Async Functions**: An async function is a function that returns a promise. It is declared using the async keyword.
  - **Await Keyword**: The await keyword can only be used inside an async function. It makes the function pause the execution until the promise is resolved.
    
# What is ReactJS?
- **React** is a JavaScript library designed for building user interfaces (UI). It allows developers to create complex UIs from small, isolated pieces of code called components.
- **UI Composition**: UIs in React are built from small units like buttons, text, and images. React enables these units to be combined into reusable, nestable components, making development more efficient and organized.
- **Code Conversion**: React converts developer-friendly code (written in JSX) into browser-compatible code using a build process.
- **Getting Started**: Developers can quickly start a new React project using tools like create-react-app with the command `npx create-react-app` (followed by `npm start`), or using vite with `npm create vite` (followed by `npm run dev`).

## ReactJS vs. JavaScript:
- **ReactJS (Declarative)**:
  - Focuses on defining the desired outcome (the goal), not the detailed steps to achieve it.
  - Example:
    ```javascript
    let content;
    if (user.isLoggedIn) {
      content = 'Continue';
    } else {
      content = 'Log In';
    }
    return content;
    ```
- **JavaScript (Imperative)**:
  - Focuses on defining the detailed steps to achieve the desired outcome.
  - Example:
    ```javascript
    let btn = document.querySelector('button');
    if (user.isLoggedIn) {
      button.textContent = 'Continue';
    } else {
      button.textContent = 'Log In';
    }
    document.body.append(btn);
    ```

## package.json
- **Purpose**: `package.json` is a file used by Node.js to manage the dependencies of your project.
- **Function**: It lists the third-party packages that your project uses, including their versions.

## React and React DOM
- **React**:
  - A JavaScript library for building user interfaces, primarily used for building complex, interactive, and reactive user interfaces.
- **React DOM**:
  - A separate library from React, created by the same team.
  - Used for rendering React components to the DOM.
- **Together**:
  - React and React DOM together form what is commonly referred to as the React Library.

## Strict Mode
- **Feature**: Strict Mode is a special feature offered by React.
- **Function**: It enables extra checks and warnings for potentially suboptimal code.
- **Benefits**:
  - Helps identify components with side effects.
  - Warns about deprecated or unsafe lifecycle methods.
  - Alerts about potential future issues with React updates.

## Components:
- **Building Blocks**: React apps are composed of components. Each component is a piece of the UI that has its own logic and appearance.
- **Export Default Keywords**: Used to specify the main component in a file.
- **Single Component Return**: Components typically return only one element.
- **JSX Transformation**: React projects include a build process that transforms JSX code (a syntax extension for JavaScript) into standard JavaScript that browsers can understand.
- **Example Component**:
  ```javascript
  export default function Profile() {
    return (
      <h1>Hello World!!</h1>
    );
  }

  export default function App() {
    return <Profile />;
  }
  ```
	
### Reusable Building Blocks:
- **Modular Design**: Components can be small building blocks that are composed to create the UI.
- **Reusability**: Components can be reused in different parts of the UI, such as a reusable button component.

### Related Code Lives Together:
- **Unified Storage**: HTML, JavaScript, and possibly CSS related to a specific component are stored together. This makes sense because JavaScript heavily influences the HTML output.
- **Example**: A component file might include both JSX and CSS-in-JS to style that component.

### Separation of Concerns:
- **Component Responsibility**: Different components handle different parts of the data and logic. This separation simplifies the process of managing and maintaining complex applications.

### Naming Conventions:
- **Uppercase Initial**: Component names must start with an uppercase letter.
- **Descriptive Names**: It's recommended to choose names that describe the UI building block, like "Header" or "MyHeader".
- **PascalCase**: Multi-word names should follow PascalCase formatting (e.g., "MyHeader").

### Default Exports vs. Named Exports:
- **Default Exports**:
  - Each file can have only one default export.
  - Example:
    ```javascript
    export default function Profile() {
      return <h2>Default Export</h2>;
    }
    import Profile from './Profile';
    ```
- **Named Exports**:
  - A file can have multiple named exports.
  - Example:
    ```javascript
    export function Profile() {
      return <h2>Named Export</h2>;
    }
    import { Profile } from './Profile';
    ```

## Component Tree:
- **Root Component**: The top-level component that contains all other components.
- **Hierarchy**: Components are organized in a hierarchical structure, where each component can contain other components (nested components).
- **Example Structure**:
  ![image](https://github.com/user-attachments/assets/f34b57fc-afa9-46d7-93f9-241c0049ac4f)

## Built-In Components vs. Custom Components:
- **Built-In Components**:
  - **Lowercase Names**: Names start with a lowercase character.
  - **Standard HTML Elements**: Only valid, officially defined HTML elements are used.
  - **DOM Nodes**: Rendered as DOM nodes by React.
- **Custom Components**:
  - **Uppercase Names**: Names start with an uppercase character.
  - **User-Defined**: Defined by developers and can wrap built-in or other custom components.
  - **Traversal**: React traverses the component tree until only built-in components are left for rendering.

## JSX:
JSX is a syntax extension for JavaScript that allows you to write HTML-like markup within JavaScript files. It is used extensively in React to describe the UI.

### Returns "Renderable" Content
- **Function Return Value**: In React, a function component must return a value that can be rendered on the screen. This is typically JSX but can also be strings, numbers, booleans, null, or arrays of these types.
- **Fragments**: These are empty tags (`<>...</>`) used to group multiple elements without adding extra nodes to the DOM.
  ```jsx
  <>
    <Component1 />
    <Component2 />
  </>
  ```

### Using Curly Braces
- JSX allows you to embed JavaScript expressions within curly braces `{}`.
- **Examples:**
```jsx
export default function TodoList() {
  const name = 'Urmi Patel';
  return (
    <h1>{name}'s To Do List</h1>
  );
}
```
- **Text inside JSX Tags**:
```jsx 
<h1>{name}'s To Do List</h1>
```
- **Attributes**:
```jsx 
<img src={avatar} />
```
	
### Using {{}} for CSS and Other Objects: 
**CSS and Objects**:
```jsx
const style = { color: "red" };
<div style={style}></div>
```
**Passing JS Objects**:
 ```jsx
const person = { name: "Hedy Lamarr" };
<Component person={{ name: "Hedy Lamarr" }} />
```
	
## Static Content vs. Dynamic Content
- **Static Content**: Hardcoded into JSX and cannot change at runtime.
```jsx
<h1>Hello World!</h1>
```
- **Dynamic Content**: Generated at runtime using JavaScript logic.
```jsx
const username = "JohnDoe";
<h1>{username}</h1>
```

## Props (Properties)
- **Props**: Arguments passed into React components. They allow parent components to pass data to child components.
- **Static and Dynamic Props**: Props can change over time and are not static.
- **Immutability**: Props are read-only and cannot be modified by the receiving component.
- **Example**:
```jsx
function Avatar({ person, age }) {
  return (
    <div>
      <h4>{person.name}</h4>
      <p>{age}</p>
    </div>
  );
}
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
export default function Profile() {
  return (
    <div>
      <Avatar age={23} person={{ name: 'Urmi Patel' }} />
    </div>
  );
}
```

### Using Children
- For components that accept a single piece of renderable content, using the children prop can be more natural.
- **Example**
```jsx
function Card({ children }) {
  return <div>{children}</div>;
}
export default function Profile() {
  return (
    <Card>
      <Avatar age={23} person={{ name: 'Urmi Patel' }} />
    </Card>
  );
}
```

## Conditional Rendering
JSX expressions can be conditionally rendered using JavaScript control structures.
- **If Statement**:
```jsx
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```
- **Ternary Operator**:
```jsx
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```
- **Logical AND Operator**:
```jsx
return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```

## Rendering Lists
- **Arrow Functions**: Arrow functions return expressions directly after =>, so you don't need a return statement. However, if the expression follows {}, you must explicitly use return.
- **Unique Keys**: Each item in an array needs a unique key to help React identify which items have changed, been added, or removed.

### Example of map():
```javascript
const people = ['Hello', 'Urmi', 'Patel'];
const listItems = people.map(person => <li>{person}</li>);
return <ul>{listItems}</ul>;
```

### Example of filter():
```javascript
const people = [
  { id: 0, name: 'Urmi', profession: 'mathematician' },
  { id: 1, name: 'abc', profession: 'chemist' }
];
const chemists = people.filter(person => person.profession === 'chemist');
const listItems = chemists.map(person => <li>{person.name}</li>);
return <ul>{listItems}</ul>;
```
### Where to Get the Key
- **Database Keys/IDs**: Use unique IDs from the database.
- **Locally Generated Data**: Use an incrementing counter.

### Rules for Keys
- **Uniqueness**: Keys must be unique among sibling elements.
- **Consistency**: Keys should not change.

### Pure Components
- **Pure Functions**:
  - **Deterministic**: Always returns the same output for the same input.
  - **Has no side effects**: This means it doesn't modify any state or data outside of its scope and does not rely on or alter external variables or states.
- **Example**:
  ```jsx
  import React from 'react';
  const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
  };
  export default Greeting;
  ```
## The Render Tree
- **Definition**: Composed only of React components (not HTML components) and represents the nested relationships between React components during a single render.
- **Performance**: Identifying top-level and leaf components can help in understanding and debugging rendering performance.

**Example Render Tree**:

![image](https://github.com/user-attachments/assets/7e5beb16-51a7-459b-a6d4-3c15144d7e53)

- **Conditional Rendering**: The tree can change with different renders and prop values, affecting which components are rendered.
**Example Conditional Rendering Tree**:

![image](https://github.com/user-attachments/assets/fc9c76b3-2b80-4696-8fee-eedc37353681)

## The Module Dependency Tree
- **Definition**: Represents the dependencies between modules in a React app.
- **Purpose**: Used by build tools to bundle necessary code and useful for debugging large bundle sizes.
- **Optimization**: Helps identify opportunities for optimizing code bundling.

**Example Module Dependency Tree**:

![image](https://github.com/user-attachments/assets/4cde54fd-04bd-4e52-9287-d677c1382914)

## Adding Interactivity: Responding to Events
- **Event Handlers**: Functions defined to handle events like clicks. Typically defined inside components and passed as props to elements.
- **Naming Convention**: Event handler function names usually start with `handle` followed by the event name.

**Example**:
```jsx
export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```
In this example, handleClick is an event handler that triggers an alert when the button is clicked.

## Naming Event Handler Props
- **Built-In Components**: Components like `<button>` and `<div>` only support standard browser event names such as `onClick`. When building custom components, you can name event handler props as needed.
- **Event Handling Methods**:
  - `e.stopPropagation()`: Stops the event handlers attached to parent elements from firing.
  - `e.preventDefault()`: Prevents the default browser behavior for specific events.

## State Management with Hooks
- **State**: Data that changes over time within a component.
- **Hooks**: Special functions that let components use React features. Hooks cannot be called inside conditions, loops, or other nested functions.
- **useState Hook**:
  - **Initialization**: `const [state, setState] = useState(initialValue);`
  - **Purpose**: Provides a state variable to retain data between renders and a setter function to update the state and trigger a re-render.
  - **Privacy**: State is private to the component declaring it.

**Example**:
```jsx
const [index, setIndex] = useState(0);
```

## Rendering Steps
1. **Triggering a Render**: Equivalent to placing an order in a restaurant.
2. **Rendering the Component**: Preparing the order in the kitchen.
3. **Committing to the DOM**: Serving the order on the table.

## Responding to Events
- **Event Handler Props**: When passing event handlers, omit parentheses to avoid calling the function immediately.
```jsx
<button onClick={handleClick}>Click me</button>
```
- **useState for Tracking**: Use `useState` to keep track of data and update the UI accordingly.
```jsx
 const [count, setCount] = useState(0);
```

## Steps to Build a React App
1. **Break the UI into a Component Hierarchy**:
   - Identify individual components and their hierarchical relationships.

   ![image](https://github.com/user-attachments/assets/d65544c1-9774-41d3-a404-dad637b5f9f6)

2. **Build a Static Version**:
   - Build components to render data models.
   - Use props to pass data from parent to child components.
3. **Determine the State Representation**:
   - Apply the DRY(Don't Repeat Yourself) principle to state management.
   - **State vs. Props**:
     - **Props**: Passed from parent to child, does not change over time.
     - **State**: Component's memory, changes in response to interactions.
4. **Identify Where State Should Live**:
   - Find components using state.
   - Determine the common parent component for the state.
   - Decide the most appropriate place to manage the state.
5. **Add Inverse Data Flow**:
   - Implement mechanisms for child components to communicate changes back to parent components.

## React Frameworks
### Production-Grade Frameworks
- **Next.js**: Full-stack React framework. Create projects with `npx create-next-app@latest`.
- **Remix**: Full-stack framework with nested routing. Create projects with `npx create-remix`.
- **Gatsby**: Optimized for fast, CMS-backed websites. Create projects with `npx create-gatsby`.
- **Expo**: Allows universal Android, iOS, and Web app development with native UIs. Create projects with `npx create-expo-app`.

### Bleeding-Edge Frameworks
- **Next.js (App Router)**: A redesigned version of the Next.js APIs focusing on full-stack architecture.

## Hooks in React

### useState
- **Initialization**: `useState` initializes state with a value and provides a state variable and a function to update that state.
  ```jsx
  const [count, setCount] = useState(0);
  ```
- **Type Determination**: The type of state is inferred from the initial value provided.

### useReducer
- **Purpose**: `useReducer` is used for managing complex state logic involving multiple sub-values.
- **Initialization**: It takes a reducer function and an initial state.
  ```jsx
  const [state, dispatch] = useReducer(reducer, initialState);

### useContext
- **Purpose**: Allows passing data down the component tree without using props.
- **Usage**: Wrap components in a Context.Provider and use useContext to access the context value.
```jsx
const value = useContext(MyContext);
```
### useMemo
- **Purpose**: Memoizes a value and recomputes it only when its dependencies change.
- **Usage**: Improves performance by preventing unnecessary recalculations.
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
### useCallback
- **Purpose**: Returns a memoized callback function that changes only if one of the dependencies has changed.
- **Usage**: Useful to prevent unnecessary re-renderings.
```jsx
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

## CSS in React

### Vanilla CSS
- **Advantages**: Decoupled from JSX, familiar syntax, reusable by other developers.
- **Disadvantages**: Requires knowledge of CSS, not scoped to components (potential for clashes).

### Inline Styles
- **Advantages**: Quick to add, scoped to specific elements, supports dynamic styling.
- **Disadvantages**: Requires CSS knowledge, styles each element individually, no separation from JSX.

### CSS Modules
- **Advantages**: Decoupled from JSX, scoped to components, no class name clashes.
- **Disadvantages**: Requires CSS knowledge, can result in many small CSS files.

### Tailwind CSS
- **Advantages**: Minimal CSS knowledge needed, rapid development, no style clashes, highly configurable.
- **Disadvantages**: Long class names, style changes require editing JSX, many small wrapper components or lots of copying and pasting.

## State and Refs

### State
- **Purpose**: Manages dynamic data that influences the UI.
- **Behavior**: Causes component re-evaluation when changed, should be used for values directly affecting the UI.

### Refs
- **Purpose**: Accesses DOM elements directly without causing re-renders.
- **Usage**: Ideal for reading values or interfacing with browser APIs.
```jsx
const inputRef = useRef(null);
```

## Reducer and Side Effects

### Reducer
- **Definition**: A function that reduces one or more complex values to a simpler form.
- **Usage**: Ideal for complex state transitions.

### Side Effects
- **Definition**: Tasks that don't affect the current render cycle should be handled carefully to maintain predictable component behavior.
- **Example**: Fetching data, subscribing to services.
 
## Memoization and Virtual DOM

### Memoization
- **Use `memo()`**: Only where necessary, preferably high up in the component tree.
- **Performance**: Overuse can degrade performance due to unnecessary checks.
```jsx
memo(Component);
```

### Virtual DOM
- **Function**: React creates and compares virtual DOM snapshots to determine the minimal number of changes needed to update the actual DOM.
- **Benefit**: Efficiently updates the UI by batching and optimizing DOM operations.

## Functional vs. Class-based Components

### Functional Components
- **Definition**: These are JavaScript functions that return JSX, representing the UI.
- **Example**:
  ```jsx
  function Product(props) {
    return <h2>A Product</h2>;
  }
- **Modern Approach**: Functional components are the default and most modern approach in React.
- **Hook**s: Functional components can use React Hooks for state and lifecycle management.

### Class-based Components
- **Definition**: These are ES6 classes that extend React.Component and must have a render() method returning JSX.
- **Example**:
```jsx
class Product extends Component {
  render() {
    return <h2>A Product</h2>;
  }
}
```
- **Legacy Approach**: Class-based components were more common in the past.
- **Lifecycle Methods**: Class-based components cannot use React Hooks.

### Class Components Lifecycle
- **componentDidMount()**: Called once the component is mounted.
- **componentDidUpdate()**: Called after the component is updated.
- **componentWillUnmount()**: Called right before the component is unmounted and removed from the DOM.

**Side Effects**: In functional components, use `useEffect()` to handle side effects, which replaces the need for lifecycle methods in class-based components.

### Choosing Component Type
- **Functional Components**: Strongly recommended for most use cases.
- **Class-based Components**: Use if:
  - You prefer them.
  - Working on an existing project or in a team where they are already used.
  - Building an Error Boundary (error boundaries currently must be class components).

## State Management

**State**: Data that affects the UI when changed.

### Types of State
1. **Local State**: Belongs to a single component.
   - **Example**: Input field value, toggling visibility of details.
   - **Managed via**: `useState()` or `useReducer()`.
2. **Cross-component State**: Affects multiple components.
   - **Example**: Open/closed state of a modal overlay.
   - **Requires**: "prop drilling" (passing state through multiple components).
3. **App-wide State**: Affects the entire application.
   - **Example**: User authentication status, theme.
   - **Requires**: "prop drilling".

## React Context

**Disadvantages**:
- Complex setup and management.
- Can lead to deeply nested or "fat" `Context.Provider` components in complex apps.
- Not optimized for high-frequency state changes.

# Redux

**Redux**: A state management system for managing cross-component or app-wide state.

## Visualizing Redux Flow
1. **Action**: Payloads of information that send data from your application to your Redux store.
2. **Reducer Function**: Receives the action and the current state, then returns the new state.
3. **Store**: The central repository for the state, updated by the reducer.
4. **Components**: Subscribed to the store to receive updates and render the UI accordingly.

## Redux Reducer Function
- **Role**: It is a pure function that takes the current state and an action as inputs and returns a new state object.
- **Immutability**: Important because objects and arrays are reference values in JavaScript. Changes to an object property affect all references to that object.
- **Example**:
```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```
## Thunk:
- **Definition**: A function that delays an action until later.
- **Usage**: In Redux, it’s an action creator function that does not return the action itself but another function which eventually dispatches the action.
- **Example**:
```jsx
const fetchUser = (userId) => {
  return (dispatch) => {
    fetch(`/api/user/${userId}`)
      .then(response => response.json())
      .then(user => dispatch({ type: 'FETCH_USER_SUCCESS', payload: user }))
      .catch(error => dispatch({ type: 'FETCH_USER_ERROR', error }));
  };
};
```

## Authentication

### Server-Side Sessions
- **Storage**: Unique identifier stored on the server and sent to the client.
- **Client-Side**: Sends the identifier with requests to protected resources.
- **Server-Side**: Validates the identifier.

### Authentication Tokens
- **Creation**: Token created (but not stored) on the server and sent to the client.
- **Client-Side**: Attaches the token to future requests.
- **Server-Side**: Verifies the token.

## Client (Browser) vs. Server (Backend)

### Client (Browser)
- **SPAs**: Most React apps are single-page applications (SPAs) served by a server decoupled from the backend.
- **Routing**: Handled on the client side, communicates with the backend as needed.

### Server (Backend)
- **Decoupled**: Served by a different server than the React frontend app.
- **Resources**: Provides various routes for the client-side app to communicate with.
- **Flexibility**: Can serve multiple client-side apps.

## Deployment Steps
1. **Test Code**: Manually and with automated tests.
2. **Optimize Code**: Enhance user experience and performance.
3. **Build App**: Run build process to parse, transform, and optimize code.
4. **Upload App**: Upload production code to the hosting server.
5. **Configure Server**: Ensure secure and intended service of the app.

## Lazy Loading
- **Load code only when it's needed**: Runs in the user's browser, theoretically allowing users to view the entire code.
- **Backend**: Runs on a separate, inaccessible server that can interact with databases and perform other server-side operations.

## Custom Hooks
- **Usage**: Only call Hooks inside component functions or other Hook functions.
- **Level**: Always call Hooks at the top level of the function.

## Form Submission and Input Validation

### Form Submission
- **Handling**: Can be managed via state, refs, or FormData and native browser features.

### Input Validation
- **User Experience**: Tricky to provide a good experience.
- **Methods**:
  - **Validate on every keystroke**: Errors may show too early.
  - **Validate on lost focus**: Errors may show too long.
  - **Validate on form submission**: Errors may show too late.

## Tanstack Query
- A library that helps with sending HTTP requests and keeping your frontend UI in sync.
- **Important Note**: Tanstack Query does not send HTTP requests on its own. You need to write the code for the actual HTTP request.
- **Features**: Manages data, errors, caching, and more after you handle the HTTP request.

## TypeScript
- A superset of JavaScript that adds static typing.
- **Benefits**: Helps catch errors at compile-time rather than at runtime, enhances code quality and maintainability.

## Testing in React

### Manual Testing

**Process**:
1. Write Code
2. Preview & Test in Browser
3. Improve Code
4. Repeat

**Advantages**:
- Ensures you see what users will see.

**Disadvantages**:
- Error-prone: Difficult to test all possible combinations and scenarios.

### Automated Testing

**Process**:
1. Write code that automatically tests your code.
2. Test individual building blocks of your app.

**Advantages**:
- Allows testing of all building blocks.
- Reduces human error.

**Disadvantages**:
- Requires additional knowledge on how to write tests.

#### Types of Automated Tests

**Unit Tests**:
- **Focus**: Test individual building blocks (functions, components) in isolation.
- **Scope**: Projects typically contain dozens or hundreds of unit tests.
- **Importance**: Most common and important kind of test.

**Integration Tests**:
- **Focus**: Test combinations of multiple building blocks.
- **Scope**: Projects usually contain a couple of integration tests.
- **Importance**: Important, but focus primarily on unit tests.

**End-to-End (E2E) Tests**:
- **Focus**: Test complete scenarios/user flows in your app as the user would experience them.
- **Scope**: Projects typically contain only a few E2E tests.
- **Importance**: Important, can also be partially done manually.

### Tools for Testing

**Jest**:
- A tool for running tests and asserting results.

**React Testing Library**:
- A tool for simulating (rendering) React app/components.

## Writing Tests
1. **Arrange**: Set up test data, test conditions, and test environment.
2. **Act**: Execute the function or logic that should be tested.
3. **Assert**: Compare the execution results with the expected result.
