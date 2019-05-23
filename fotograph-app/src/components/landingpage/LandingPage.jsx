import React, { Component } from 'react';
import ShowCase from './ShowCase'
import PopularPosts from './PopularPosts';
import RecentPosts from './RecentPosts';

class LandingPage extends Component {
	render() { 
		return (
			<div className="landing-page-wrapper">
				<ShowCase />
				<PopularPosts />
				<RecentPosts />
			</div>
		);
	}
}
 
export default LandingPage;
