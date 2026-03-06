1. What is JSX, and why is it used?  
-> JSX or JavaScript XML is the markup language used in React. It is HTML like code written directly inside JS files. It is used to build and structure UI components.    

2. What is the difference between State and Props?    
-> State and Props both are used to pass data in React components. The difference between them are: State has bidirectional data flow. State is passed from the parent to child, it is changeable in the child component. Based on changes in the child component changes can be done in the parent component. Props are used for unidirectional data flow that doesn't need any changing. Data is passed from parent to child, it cannot be changed in the child component. 

3. What is the useState hook, and how does it work?   
-> useState hook is used to manage reactive state of functional components. It provides a variable to hold a value and a setter function to set the value of the variable. When a setter function is called to change the value, React re-renders the component related to that value.  

4. How can you share state between components in React?    
-> We can share state between components in React by passing state variable and state setter function as props. It is best to write the useState hook in the parent component so that it is easier to pass the state to child components easily.   

5. How is event handling done in React?  
-> Event handling in React is done by writing inline event handler which is written in camel case. We pass the handler function to the event handler. When we need to pass any arguments to the handler function we wrap the handler function with an arrow function so that it doesn't get executed while rendering the component.   
  