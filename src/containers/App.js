import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";

/* Pages */
import About from "./about";
import Home from "./home";
import PostsDetails from "./posts/PostDetails";
import PostsList from "./posts/PostList";
import SnippetsDetails from "./snippets/SnippetDetails";
import SnippetsList from "./snippets/SnippetList";

import GlobalStyle from "@global-style"; 

const App = () => {
	return (
		<BrowserRouter>

			<GlobalStyle />
			<Header />

			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/about" component={About}/>
				<Route exact path="/posts" component={PostsList}/>
				<Route exact path="/posts/:id" component={PostsDetails}/>
				<Route exact path="/snippets" component={SnippetsList}/>
				<Route exact path="/snippets/:id" component={SnippetsDetails}/>
			</Switch>

		</BrowserRouter>
	);
};

export default App;
