import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Link } from 'react-router'

class Header extends Component {
	render() {
		return(
			<header>
				<div className="navbar">
					<div className="navbar-top">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-sm-6 col-xs-6 col-md-6">
									<div className="pull-left">
										<ul>
											<li className="inline-block"><Link to="#">SAC</Link></li>
											<li className="divider inline-block"></li>
											<li className="inline-block"><Link to="#">(11)99999-9999</Link></li>
										</ul>
									</div>
								</div>
								<div className="col-lg-6 col-sm-6 col-xs-6 col-md-6">
									<div className="pull-right">
										<ul>
											<li className="inline-block"><Link to="#">Minha Conta</Link></li>
											<li className="divider inline-block"></li>
											<li className="inline-block"><Link to="#">Entrar</Link></li>
											<li className="divider inline-block"></li>
											<li className="inline-block"><Link to="#">Criar Conta</Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row"></div>
					</div>
				</div>
			</header>
		)
	}
}

export default Header