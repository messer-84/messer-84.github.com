import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
	render() {
		console.log('testStore',this.props.testStore);
		return (
				<div>
					<input type="text" className="trackInput" />
					<button className="addTrack">Add track</button>
					<ul className="list">
						{this.props.testStore.map((track, index) =>
							<li key={index}>{track}</li>
						)}
					</ul>

				</div>
		);
	}
}

export default connect(
		//mapStateToProps
		state => ({
			testStore: state
		}),
		dispatch => ({})
)(App);

