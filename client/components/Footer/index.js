import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Footer extends Component {
	render() {
		return(
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-lg-3">store info</div>
						<div className="col-lg-2">links 1</div>
						<div className="col-lg-2">links 2</div>
						<div className="col-lg-2">links 3</div>
						<div className="col-lg-3">newsletter</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer