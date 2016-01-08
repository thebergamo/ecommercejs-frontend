import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Product extends Component {
	render() {
		return (
			<div>
				<h1>
					Category Page
				</h1>
			</div>
		)
	}
}

export default connect()(Product)