import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {initGlobalStore} from "./state/store";
import Application from "./Application";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

export const serviceConnectionError = "Service connection error";

const globalStore = initGlobalStore();

root.render(
	<Provider
		store={globalStore}>
		<Application/>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();