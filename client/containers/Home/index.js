import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Home extends Component {
	render() {
		return (
			<div>
				<h1>
					Hello Ecommerce.js
				</h1>
			</div>
		)
	}
}

export default connect()(Home)