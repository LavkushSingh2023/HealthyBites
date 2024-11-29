# Namaste-React
React form Akshay Shaini

# React element- jsx is a react element
const heading = (<h2 className="root">
Hi i am developer
and programmer.
</h1>)

# React Components- 
1) Class Based Component
2) Functional Component

# Functional Component- a javaScript function which return react element called functional component
const Heading = () => (
<h1 id="root" className="root">
    Hi ! i am MERN developer 
what you think about it</h1>
)

# Component Composition- when component inside component
const HeadInHead = () => (
    <div className="container">
        <Heading/>
        <h2>I know everything but become unbale to do.</h2>
    </div>
)

# React Hook- normal JS utility functions
 1) UseState()- generate supowerful variables in react`
 2) UseEffect()

 Hooks can be called only inside your body fun at starting and never called outside and nerver inside any conditions or other functions.
 
 # Two types of routing in web apps-
 1) Client Side Routing
 2) Server Side Routing

 # Redux Toolkit-
 -npm install @reduxjs/toolkit and react-redux
 -Build our store
 -Connect our store to our app
 -Slice(cartSlice)
 -dispatch(action)
 -Selector

# Types of Testing (developer)-
-Unit Testing
-Integration Testing
-End to End Testing (e2e)

# Setting up Testing in our app-
-install React Testing Library 
-install jest
-install Babel dependencies
-configure Babel
-Configure parcel confug file to disable default babel transpilation
-Jest- npx jest --init
-install jsdom library
-install @babel/preset-react - to make jsx work in test cases
-include @babel/preset-react inside my babel config
-npm i -D @testing-library/jest-dom

