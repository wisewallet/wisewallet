import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import PlaidLink from "views/PlaidLink/PlaidLink.jsx";

var indexRoutes = [
	{path: "/login", name: "Login", component: LoginPage},
	{path: "/signup", name: "WiseWallet", component: SignupPage},
	{path: "/plaidlink", name: "WiseWallet", component: PlaidLink},
	{path: "/", name: "WiseWallet", component: LandingPage}
];

export default indexRoutes;
