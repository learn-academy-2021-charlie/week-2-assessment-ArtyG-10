# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is iteration?

  Your answer:
    Iteration is the process of running the same code multiple times. Higher order functions like .map and .filter use iteration by running the same code on each value of an array. Each time the code is run it is another iteration.
  Researched answer:
    Iteration is when a program repeats a task for however many times you specify until a condition is met. A loop can theoretically be iterated forever, at which point you can press ctrl+C.


2. The built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer:
    the .map method takes in (value, index, array) in that order. The value parameter is the only required parameter and the rest are situational.
  Researched answer:
    The .map method takes the predefined parameters of value, index, and array. The value and index are at current iteration and the array is the array that was passed in. They have to be in that order but can be named something arbitrary. The value parameter is required and the rest are optional.


3. What is object destructuring?

  Your answer:
    I am not 100% sure on how object destructuring works but I know it is used to break up the data contained in objects.
  Researched answer:
    Object destruction is a JavaScript expression which makes it possible to unpack data from objects into distinct variables. The syntax is a variable declaration followed by curly brackets and a list of variables and after the second curly bracket it is set equal to the object name. The variables in the curly brackets are named after the corresponding keys in the object and assigned the designated value.


4. What is the difference between an object and a class?

  Your answer:
    An object is similar to an array in that it is a thing which holds multiple pieces of data, each piece of data is identified by its key. A class is just a template from which you can create a new object which inherits the data in the class. Classes can be used to manipulate and create modified objects as you see fit.
  Researched answer:
    Objects are collections of values identified by paired keys. A class is a blueprint for an object but it is not an object until it is created and assigned to a variable using the protected language 'new'. Classes can be modified and customized.


5. Why would you use the method super()?

  Your answer:
    The method super() would be used when you are extending a class into a subclass. You need it to pass parameters into the parent class. If you don't need to pass any parameters you would still include super but with empty parenthesis.
  Researched answer:
    Super() is contained within the constructor() method and used in an extended class which is inheriting information from the parent class. The super arguments pass into the arguments of the constructor in the parent class.

6. STRETCH: What is hoisting in JavaScript?

  Your answer:

  Researched answer:



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. React:
    React is a JavaScript library used to create user interfaces or UIs. These can be webpages or mobile apps. Since it is based on encapsulated components it is very scaleable and can be used to put together very complex UIs.
2. React lifecycle methods:
    The three phases of the React lifecycle are Mounting, Updating, and Unmounting. First a component is created and mounted into the DOM. Then any changed to the state are updated. lastly the component is removed from the DOM.

3. React state:
    State is an object managed within a component that stores dynamic data and determines how the component renders and behaves.

4. Component invocation/call:
    Nesting components allows us to call a component within the return of another component.
    
5. DOM Events:
    Document Object Model (DOM) events occur when a user interacts with the application. Events normally execute functions when the event occurs (such as when a user clicks a button).
