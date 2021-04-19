'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/Home";
import RepoQuery from "./components/Query";
import"./index.css";

ReactDOM.render(
    <div className="App-header">
	<h2 className="App-sub" >Creating a Template using React/TypeScript/Webpack. </h2>
	<hr/>
	<h3 className="App-sub2">To render a Class Component, Home.</h3>
	<Home houseName="Odessey Palace" area={2900} createdOn={"12/Jul/75"}/>
	<hr/>
	<h3 className="App-sub2">To render a Functional Component RepoQuery, using React Query.</h3>
	<RepoQuery Title="Master" Body={"12/jul/75"}/>
    <hr/>
	</div> , document.getElementById('root')
);
