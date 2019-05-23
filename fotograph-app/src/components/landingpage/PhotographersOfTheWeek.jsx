import React, {Component} from 'react';
import axios from 'axios';

class PhotographersOfTheWeek extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  PhotographersOTW: []
		};
	  }

	componentDidMount() {
		console.log('popular posts mounted')
		axios
			.get('https://artportfoliobw.herokuapp.com/')
			.then(res => {
				this.setState({
					PhotographersOTW: res.data
				})
			}) 
			.catch(err => console.log('landing page:', err));
		}

	render() {
		const POTWData = this.state.PhotographersOTW;
		console.log( POTWData.slice(0, 1) )
		return (
			<div className="popular-collage-container">
				<h1> Photographer's of the Week </h1>
				<h3> Top Collection </h3>
				<div className="popular-posts-container">
					<div className="popular-posts">
				{
					POTWData.slice(52,55).map( data => (
							<img src={data.src} alt={data.alt} key={data.photoId} />
							))
				}
					</div>
				</div>

			</div>
		);
	}
}
 
export default PhotographersOfTheWeek;
