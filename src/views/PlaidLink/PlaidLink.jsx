import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import InsertChart from "@material-ui/icons/InsertChart";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import plaidLinkStyle from "assets/jss/material-kit-pro-react/views/plaidLinkStyle.jsx";
import PlaidLink from "react-plaid-link";

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
		this;
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
									<h2 className={classes.cardTitle}>Link Your Bank Account</h2>
									<CardBody>
										<GridContainer justify="center">
											<GridItem xs={12} sm={5} md={5}>
												<InfoArea
													className={classes.infoArea}
													title="Personal Impact Score"
													description="Get personal scores based on your impact on people, the planet, and policy through your transactions."
													icon={InsertChart}
													iconColor="info"
												/>
											</GridItem>
											<GridItem xs={12} sm={5} md={5}>
												<PlaidLink
													clientName="WiseWallet"
													env="sandbox"
													product={["auth", "transactions"]}
													publicKey="06812b585d6f3b0ebde352a7759bb1"
													onExit={this.handleOnExit}
													onSuccess={this.handleOnSuccess}
												>
													Open Link and connect your bank!
												</PlaidLink>
											</GridItem>
										</GridContainer>
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
