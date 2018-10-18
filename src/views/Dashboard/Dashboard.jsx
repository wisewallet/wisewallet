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
			userID: "",
			password: "",
			firstName: "",
			lastName: ""
		};
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
	handleOnSuccess(token, metadata) {
		// send token to client server
	}
	handleOnExit() {
		// handle the case when your user exits Link
	}
	render() {
		const {classes, ...rest} = this.props;
		var userID = sessionStorage.getItem("userID");
		if (userID == null) {
			return <Redirect to='/login'  />
		}
		return (
			<div>
				<Header
					absolute="absolute"
					color="transparent"
					brand="WiseWallet"
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
									<h2 className={classes.cardTitle}>{userID}</h2>
									<CardBody />
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
