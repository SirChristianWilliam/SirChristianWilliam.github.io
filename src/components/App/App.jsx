import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import "../scss/styles.scss";

import AboutPage from "../AboutPage/AboutPage";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import HomePage from "../HomePage/HomePage";
import JQueryCalcPage from "../JqueryCalcPage/JqueryCalcPage";
import Landing from "../Landing/Landing";
import LinkedIn from "../LinkedIn/LinkedIn";
import MissingLink from "../MissingLink/MissingLink";
import Movies from "../Movies/Movies";
import Nav from "../Nav/Nav";
import QueerspaceCollective from "../QueerspaceCollective/QueerspaceCollective";
import Resume from "../Resume/Resume";
import Surveys from "../Surveys/Surveys";
import Todo from "../Todo/Todo";
import "./App.css";
function App() {
	return (
		<Router>
			<div className="noclass">
				<div class="bird-container bird-container--one">
					<div class="bird bird--one"></div>
				</div>

				<div class="bird-container bird-container--two">
					<div class="bird bird--two"></div>
				</div>

				<div class="bird-container bird-container--three">
					<div class="bird bird--three"></div>
				</div>

				<div class="bird-container bird-container--four">
					<div class="bird bird--four"></div>
				</div>
			</div>
			<Nav />

			<Route path="/about">
				<AboutPage />
			</Route>

			<Route path="/home">
				<HomePage />
			</Route>

			<Route path="/todolist">
				<Todo />
			</Route>

			<Route path="/netclips">
				<Movies />
			</Route>

			<Route path="/reduxsurveys">
				<Surveys />
			</Route>
			<Route path="/nav">
				<Nav />
			</Route>
			<Route path="/queerspaceCollective">
				<QueerspaceCollective />
			</Route>

			<Route path="/jqueryCalculator">
				<JQueryCalcPage />
			</Route>

			<Route path="/missingLink">
				<MissingLink />
			</Route>
			<Route path="/Resume">
				<Resume />
			</Route>
			<Route path="/footer">
				<Footer />
			</Route>

			<Route path="/linkedIn">
				<LinkedIn />
			</Route>

			<Route path="/contact">
				<Contact />
			</Route>

			<Route exact path="/" component={Landing} />
		</Router>
	);
}

export default App;
