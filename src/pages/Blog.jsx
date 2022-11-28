import React from 'react';

const Blog = () => {
    return (
        <div className='p-5  h-screen  '>
            <div className='   my-5'>
                <h1 className='  font-bold uppercase my-4'>What are the different ways to manage a state in a React application?</h1>
                <p>React state management is a process for managing the data that React components need in order to render themselves.URL,Server state,Local state and Global state are the state to mange state </p>
            </div>
            <div className='   my-5'>
                <h1 className='  font-bold uppercase my-4'>How does prototypical inheritance work?</h1>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
            </div>
            <div className='   my-5'>
                <h1 className='  font-bold my-4 uppercase'>What is a unit test? Why should we write unit tests?</h1>
                <p> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='   my-5'>
                <h1 className='  font-bold my-4 uppercase'>React vs. Angular vs. Vue?</h1>
                <p> React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.React and Vue.js are mainly declarative, and while Angular could also be declarative, it's really more imperative.Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. Angular is a complete toolbox that offers you everything from development to testing while building a web app.</p>
            </div>
        </div>
        
        
    );
};

export default Blog;