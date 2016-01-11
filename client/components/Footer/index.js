import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Footer extends Component {
	render() {
		return(
			<footer>
				<div className="footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-3">
								<h3>Suporte</h3>
								<ul>
									<li><p>Lorem ipsum dolor sit amet, consectetur</p></li>
									<li><h4><strong>{this.props.tel}</strong></h4></li>
									<li><h4>{this.props.email}</h4></li>
								</ul>
							</div>
							<div className="col-lg-2">
								<h3>Categorias</h3>
								<ul>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
								</ul>
							</div>
							<div className="col-lg-2">
								<h3>Institucional</h3>
								<ul>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
								</ul>
							</div>
							<div className="col-lg-2">
								<h3>Minha Conta</h3>
								<ul>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
								</ul>
							</div>
							<div className="col-lg-3">
								<h3>Newsletter</h3>
								<ul>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
									<li><Link to="#">Link</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<p className="pull-left"> © Ecommerce.js 2016. All right reserved.</p>
						<p className="pull-right">cards</p>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer