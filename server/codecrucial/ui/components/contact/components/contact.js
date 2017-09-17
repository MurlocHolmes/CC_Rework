import React, { Component } from 'react';
import "../styles.scss";

export const Contact = () => {
  return (
    <div className="section-container container-fluid">
		<form className="contact-form col-lg-6 col-md-8 col-sm-10 col-xs-12">
			<div className="form-group">
				<label className="col-form-label" for="name">Name</label>
				<input type="text" className="form-control" id="name" placeholder="Enter your name" />
			</div>
			<div className="form-group">
				<label className="col-form-label" for="email">E-mail</label>
				<input type="text" className="form-control" id="email" placeholder="Enter your email" />
			</div>
			<div className="form-group">
				<label className="col-form-label" for="phoneNumber">Phone Number</label>
				<input type="tel" className="form-control" id="phoneNumber" placeholder="Enter your phoneNumber" />
			</div>
			<div className="form-group">
				<label className="col-form-label" for="message">Name</label>
				<textarea rows="3" type="text" className="form-control" id="message" placeholder="Enter your message" />
			</div>
		</form>
	</div>
  )
}

export default Contact;