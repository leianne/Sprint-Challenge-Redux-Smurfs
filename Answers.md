1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    .map(), .filter(), .find(), Object.Assign(), or the spread operator (...Array, ...Object)

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions, reducers and our store all work together as building blocks for our Redux application. Starting with our store, we have our single source of truth. Our Store holds our application level state and a few helper methods ( i.e.. getState(), dispatch(), ect.) that allow us to dispatch actions and register listeners. Next are our actions. With actions we actually have actions and action creators. Actions are the message that we dispatch() to our store, and the action creators are a function the creates and returns the action. The action creators we pass to our components and when a user interacts with our application or some internal event happens these action creators are called within the dispatch() function. The dispatch() function triggers a state change calling our reducer. The Reducer takes in our current state and the action. It will then check the action type and from there determine what changes need to be made on state. Because our reducer will always be a pure function, we never have to worry about our state being altered and this makes for easy debugging. So, actions, reducers and our store all work in tandem in our React application. 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state can be though of as a global state. Any component within your application can have access to this state so long as there are connected to it. Component level state however, lives within that specific component and only that component will have access to it. Both have there benefits, but it is up to the developer/team to decide which fits where. Application State gives us the ability to have multiple components accessible a given part of the state. Component level states are usually used within forms where the info that is being will then be passed up to the Application state. 

4.  What is middleware?

Middleware allows us to hook into our application after the action is dispatched but before the reducer takes place and execute some code like logging the action or the upcoming state change. We have the ability to create our own middleware but there are many that have already been provided to us like redux-logger and redux-thunk.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that allows us to look at our actions and determine whether or not they are functions, and from there if the actions are functions it will then call them. Thunk allows us to do asynchronous calls within our  react-redux application, allowing us to do Axios calls!  

6.  Which `react-redux` method links up our `components` with our `redux store`?

The connect() method used along with mapStateToProps  allows us to like up our components with our redux store.