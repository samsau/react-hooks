## useEffect Hook in React js.

The useEffect hook is a built-in function in React that allows functional components to perform side effects, such as fetching data, subscribing to events, and updating the document title. Here are some important points to remember when using the useEffect hook:

1. The useEffect hook takes a function as its first argument, which is called after the component is rendered. This function is where you can put your side effects.
2. The useEffect hook can optionally take a second argument, which is an array of dependencies. If this array is provided, the effect will only be run if one of the dependencies changes. If the array is empty, the effect will only be run once, similar to componentDidMount and componentWillUnmount.
3. The useEffect hook can return a function, which is called before the component is unmounted. This function can be used to clean up any resources that were created during the effect.
4. The useEffect hook is called after every render, even if the component's props or state didn't change. To avoid unnecessary renders, you can add a check inside the effect to see if the props or state actually changed before performing any side effects.
5. The useEffect hook can be used to fetch data, but it's important to remember that the data fetching should be done inside the effect function, not in the component's render method. This is because the render method should be pure and not have any side effects.
6. The useEffect hook can also be used to subscribe to events, such as scroll events or resize events. However, it's important to remember to unsubscribe from these events when the component is unmounted to avoid memory leaks.
7. The useEffect hook can update the document title by using the document.title property inside the effect function. However, it's important to remember to reset the title when the component is unmounted.
