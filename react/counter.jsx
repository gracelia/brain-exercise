import { StrictMode, createContext, useContext, useState, useReducer } from "react";
import ReactDOM from "react-dom";

const initState = {
	count: 0
}
const CountContext = createContext({ state: initState, dispatch: () => undefined });
const useCountContext = () => useContext(CountContext);

const countReducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return {...state, count: state.count + 1}
		case 'descent':
			return {...state, count: state.count - 1}
		default:
			return state;
	}
};

const CountProvider = (props) => {
	const [state, dispatch] = useReducer(countReducer, initState);

	return (
		<CountContext.Provider value={{state, dispatch}}>{props.children}</CountContext.Provider>
	)
}

const App = () => {
	const [state, dispatch] = useReducer(countReducer, initState);
	const handleAddClick = () => {
		dispatch({type: 'add'})
	}
	const handleDescentClick = () => {
		dispatch({type: 'descent'})
	}
	return (
		<div className="App">
			<button onClick={handleAddClick}>Add</button>
			<button onClick={handleDescentClick}>Descent</button>
			<h1>{state.count}</h1>
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(
	<StrictMode>
		<CountProvider>
			<App />
		</CountProvider>
	</StrictMode>,
	rootElement
);

// https://e.leetcode-cn.com/enterprise/uzxnjoibbsbo/interview/detail/eIa2ek/