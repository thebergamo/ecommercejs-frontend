import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

class Home extends Component {
	render() {
		return (
			<div className="main">
				<Header />
				<Footer
					email="help@web.com" 
					tel="(11)99999-9999" 
				/>
			</div>
		)
	}
}

export default connect()(Home)