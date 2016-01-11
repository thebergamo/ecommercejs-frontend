import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Header extends Component {
	render() {
		return(
			<div>
				<div className="container">Header</div>
			</div>
		)
	}
}

export default Header