import React, {Component} from 'react';
import axios from 'axios';

class PopularPosts extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  recentPosts: []
		};
	  }

	componentDidMount() {
		console.log('recent posts')
		axios
			.get('https://artportfoliobw.herokuapp.com/')
			.then(res => {
				this.setState({
					recentPosts: res.data
				})
			}) 
			.catch(err => console.log('landing page:', err));
		}

	render() {
		const recentPostsData = this.state.recentPosts;
		return (
			<div className="recent-collage-wrapper">
				<h1> Recent Posts </h1>
				<div className="recent-posts-wrapper">
					<div className="recent-posts">
				{
					recentPostsData.reverse().slice(30, 36).map( data => (
							<img src={data.src} alt={data.alt} key={data.photoId} />
							))
				}
					</div>
				</div>

			</div>
		);
	}
}
 
export default PopularPosts;
