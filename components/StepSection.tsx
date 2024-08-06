const StepSection = () => {
    return (
		<div className="contain-wrapp dark-container padding-bot40">	
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-heading">
						<h4>HOW TO APPLY</h4>
						<p>Application is first come, first take provided you meet the criteria for selection. 
							If you missed out as state coordinator you may join our waiting list as an LGA coordinator.
							Make sure you have the means to meet all requirements specified under REQUIREMENTS above. </p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<ol className="process-line">
						<li className="col-md-3 col-sm-3">
							<span className="icons">
								<i className="fa fa-users green"></i>
							</span>
							<h5>Create Profiles</h5>
							<p>Creat an account in the following platforms if you dont have one and get your profile url.</p>
								i. <a href='https://x.com' target="_blank">X.com</a><br />
								ii. <a href='https://facebook.com' target="_blank">Facebook.com</a><br />
								iii. <a href='https://linkedin.com' target="_blank">Linkedin.com</a><br />
								iv. <a href='https://github.com' target="_blank">Github.com</a><br />
								v. <a href='https://www.whatsapp.com/' target="_blank">WhatsApp</a>
						</li>
						<li className="col-md-3 col-sm-3">
							<span className="icons">
							<i className="fa fa-user yellow"></i>
							</span>
							<h5>Apply Quickly</h5>
							<p>Go to the form below and fill the application form you will be expected to upload your cv and provide link to the account above</p>
						</li>
						<li className="col-md-3 col-sm-3">
							<span className="icons">
							<i className="fa fa-credit-card red"></i>
							</span>
							<h5>Make Payment</h5>
							<p>Call in for the account details to pay so that we may inform you if the state slot is still available.
								The first person to make payment for the state will be selected. Others may join our waiting list for LGA Training Coordinators.</p>
						</li>
						<li className="col-md-3 col-sm-3">
							<span className="icons">
							<i className="fa fa-code"></i>
							</span>
							<h5>Learn & Earn</h5>
							<p>Join our masterclass sessions, learn, apply and start earning.
								There are many more opportunities to earn in adition to the benefits above.
							</p>
						</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
    );
};

export default StepSection;