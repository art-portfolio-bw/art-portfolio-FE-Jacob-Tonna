import React, { Component } from 'react';
import ShowCase from './ShowCase'
import PhotographersOfTheWeek from './PhotographersOfTheWeek';
import RecentPosts from './RecentPosts';

class LandingPage extends Component {
	render() { 
		return (
			<div className="landing-page-wrapper">
				<ShowCase />
				<PhotographersOfTheWeek />
				<RecentPosts />
			</div>
		);
	}
}
 
export default LandingPage;
