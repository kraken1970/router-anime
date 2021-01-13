import React from 'react'
import withRouteReady from "../App/withRouteReady";
import './NotFound.scss'

const NotFound = () => {
	return (
		<section className="NotFound">
    <h1 className="NotFound__title">Not Found, sorry</h1>
  </section>
	)
}

export default withRouteReady(NotFound);
