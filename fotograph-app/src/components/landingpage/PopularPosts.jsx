import React, {Component} from 'react';
import axios from 'axios';

class PopularPosts extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  popularPosts: []
		};
	  }

	componentDidMount() {
		console.log('popular posts mounted')
		axios
			.get('https://artportfoliobw.herokuapp.com/')
			.then(res => {
				this.setState({
					popularPosts: res.data
				})
			}) 
			.catch(err => console.log('landing page:', err));
		}

	render() {
		const popularPostsData = this.state.popularPosts;
		console.log( popularPostsData.slice(0, 1) )
		return (
			<div className="popular-collage-wrapper">
				<h1> Photogrophers of the Week </h1>
				<h3> Top Collection </h3>
				<div className="popular-posts-wrapper">
					<div className="popular-posts">
				{
					popularPostsData.slice(52,55).map( data => (
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
