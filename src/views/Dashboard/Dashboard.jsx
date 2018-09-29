import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import plaidLinkStyle from "assets/jss/material-kit-pro-react/views/plaidLinkStyle.jsx";

import image from "assets/img/bg7.jpg";

class Components extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			firstName: "",
			lastName: ""
		};
		this.onSignUp = this.onSignUp.bind(this);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
	}
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};
	onSignUp() {
		const {email, password, firstName, lastName} = this.state;
		fetch(
			"https://tldpv6umn7.execute-api.us-east-1.amazonaws.com/default/signUp",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email: email,
					lastName: lastName,
					password: password,
					firstName: firstName
				})
			}
		)
			.then(response => response.json())
			.then(json => console.log(json));
	}
	handleOnSuccess(token, metadata) {
		// send token to client server
	}
	handleOnExit() {
		// handle the case when your user exits Link
	}
	render() {
		const {classes, ...rest} = this.props;
		return (
			<div>
				<Header
					absolute="absolute"
					color="transparent"
					brand="WiseWallet"
					links={<HeaderLinks dropdownHoverColor="rose" />}
					{...rest}
				/>
				<div
					className={classes.pageHeader}
					style={{
						backgroundImage: "url(" + image + ")",
						backgroundSize: "cover",
						backgroundPosition: "top center"
					}}
				>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={10} md={10}>
								<Card className={classes.cardSignup}>
									<h2 className={classes.cardTitle}>Dashboard</h2>
									<CardBody>

									</CardBody>
								</Card>
							</GridItem>
						</GridContainer>
					</div>
					<Footer
						content={
							<div>
								{" "}
								<div className={classes.left}>
									<List className={classes.list}>
										<ListItem className={classes.inlineBlock}>
											<a
												href="https://medium.com/@wisewallet"
												className={classes.block}
											>
												Blog
											</a>
										</ListItem>
									</List>
								</div>
								<div className={classes.right}>
									WiseWallet, Inc. &copy; 2018 All Rights Reserved.
								</div>
							</div>
						}
					/>
				</div>
			</div>
		);
	}
}

export default withStyles(plaidLinkStyle)(Components);
