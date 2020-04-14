import React from 'react';
import { connect } from 'react-redux';
import { deleteCard, fetchUser } from '../actions/cardActions';

class Card extends React.Component {

	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		const { users } = this.props;
		return(
			users.map(user => {
				return (
					<div 
						className='ui raised very padded text container segment'
						style={{marginTop:'80px'}}
						key={user.id} 
					>
						<h3 className='ui header'>{ user.name }</h3>
						<p>{ user.email }</p>
					</div>	
				)
			})	
		)
	}
}

const mapStateToProps = (state,ownProps) => {
	let title = ownProps.match.params.user;
	return {
		card : state.cards.find(card => card.title === title ),
		users: state.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteCard: (id) => { dispatch(deleteCard(id)) },
		fetchUser: () => { dispatch(fetchUser()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);