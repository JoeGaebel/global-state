# Global State w/ React Hooks!
Ever had a bunch of deeply nested components and passed a bunch of state down the DOM tree?
Sucks, right?

Redux is a great way to manage state, but I was interested in producing a Pure React solution to Global State access.

# useState, useContext
By utilizing `useState` and `useContext` into two custom hooks, `useInitialAppState` and `useAppState`, one can initialize the AppState, and access it from anywhere in the DOM tree, without passing wires around.

# How to use this repo
1. Check out the second commit - "Create the widgets with App passing props". Notice that state is being initialized within the top level App, and passed through props to components.
2. Check out the third commit - "Use global state". Notice that state is being initialized within the top level App, and then a Provider wraps the rest of the components. From then on, any component can call `useAppState` to get a reference to the state and a setter.

# Downsides
1. You're giving components a lot of power, and in this implementation there aren't a lot of guards for this. This can be fixed up by following the reducer pattern, where you expose the state, and a dispatcher. That way your reducer is responsible for managing state, instead of the component.
2. When setting state in this way, you'll want to be careful that you're not using an old reference to state when updating it dynamically, ie.

```javascript
const [state, setState] = useAppState()

async function doAsyncThing() {
  const result = await asyncThing()
  setState({
    ...state,
    result
   })
}
 
 useEffect(() => {
   doAsyncThing()
 }, [])
 
 return <div>hello</div>
}
```

Done in this way, the state reference may have changed in the mean time.

Instead, do it like this:
```javascript
async function doAsyncThing() {
  const result = await asyncThing()
  setState(prevState => {
    ...prevState,
    result
   })
 }
```
That way you're referencing the up to date reference that setState provides through it's call argument.
