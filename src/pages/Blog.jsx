import React from 'react';

const Blog = () => {
    return (
        <div className='p-5  min-h-screen  '>
            <section className="bg-gray-100 text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<div  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50">
			<img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-npl-illustration_23-2149262969.jpg?w=740&t=st=1679786621~exp=1679787221~hmac=58ef04743c7917c407df517e9b78ed3069f01e576b4c03fa9b24d98ef493ca55" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">What are the different ways to manage a state in a React application?</h3>
				<span className="text-xs text-gray-600">February 19, 2023</span>
				<p>React state management is a process for managing the data that React components need in order to render themselves.URL,Server state,Local state and Global state are the state to mange state. Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components. The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of: Hooks, React Context API, Apollo Link State.</p>
			</div>
		</div>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<div  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://img.freepik.com/free-vector/flat-design-sql-illustration_23-2149231424.jpg?size=338&ext=jpg&uid=R68670765&ga=GA1.1.31902201.1666701009&semt=ais" alt='' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How does prototypical inheritance work?</h3>
					<span className="text-xs text-gray-600">January 21, 2023</span>
					<p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
				</div>
			</div>
			<div className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010127.jpg?w=740&t=st=1680066116~exp=1680066716~hmac=5d7dbb7a3324646599083ac510a05b221285237708a00b768e51fb1804231335" alt=''/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What is a unit test? Why should we write unit tests?</h3>
					<span className="text-xs text-gray-600">January 22, 2023</span>
					<p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
				</div>
			</div>
			<div  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://img.freepik.com/free-vector/programmers-concept-with-flat-design_23-2147852753.jpg?w=740&t=st=1679786962~exp=1679787562~hmac=7cdec1301e6877b1c9c74d2886c56fe65a51e8281c71687fb5aea4157cadab11" alt=''/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">React vs. Angular vs. Vue?</h3>
					<span className="text-xs text-gray-600">January 23, 2023</span>
					<p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.React and Vue.js are mainly declarative, and while Angular could also be declarative, it's really more imperative.Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. Angular is a complete toolbox that offers you everything from development to testing while building a web app.</p>
				</div>
			</div>
		
		</div>
		
	</div>
</section>
        </div>        
        
    );
};

export default Blog;