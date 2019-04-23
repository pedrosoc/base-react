import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";

/* Pages */
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import PostsDetails from "../pages/posts/PostsDetails";
import PostsList from "../pages/posts/PostsList";
import SnippetsDetails from "../pages/snippets/SnippetsDetails";
import SnippetsList from "../pages/snippets/SnippetsList";

const App = () => {
	return (
		<BrowserRouter>

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
	)
};

export default App;
