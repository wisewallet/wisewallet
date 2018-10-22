import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import PlaidLink from "views/PlaidLink/PlaidLink.jsx";
import Dashboard from "views/Dashboard/Dashboard.jsx";
import Charts from "view/Charts/Charts.jsx";
var indexRoutes = [
	{path: "/login", name: "Login", component: LoginPage},
	{path: "/signup", name: "WiseWallet", component: SignupPage},
	{path: "/link", name: "WiseWallet", component: PlaidLink},
	{path: "/dashboard", name: "WiseWallet", component: Dashboard},
	{path: "/charts", name: "WiseWallet", component: Charts},
	{path: "/", name: "WiseWallet", component: LandingPage}
];

export default indexRoutes;
