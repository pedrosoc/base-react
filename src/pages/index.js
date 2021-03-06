import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "@global-style";
import Header from "@/components/Header";
import routes from "@/constants/routes";

/* Pages */
import About from "./About";
import Podcast from "./Podcast";
import Podcasts from "./Podcasts";
import Home from "./Home";
import Footer from "@/components/Footer";

const App = () => {
	return (
		<BrowserRouter>

			<GlobalStyle />
			<Header />

			<Switch>
				<Route exact path={routes.home.url} component={Home}/>
				<Route exact path={routes.podcasts.url} component={Podcasts}/>
				<Route exact path={routes.podcastDetails.url} component={Podcast}/>
				<Route exact path={routes.about.url} component={About}/>
			</Switch>

			<Footer />

		</BrowserRouter>
	);
};

export default App;
