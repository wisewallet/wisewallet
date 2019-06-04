import LandingPage from "views/LandingPage/LandingPage.jsx";
import InfoLogin from "views/InfoLogin/InfoLogin.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import PlaidLink from "views/PlaidLink/PlaidLink.jsx";
import Dashboard from "views/Dashboard/Dashboard.jsx";
import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
import PrivacyPage from "views/Privacy/PrivacyPage.jsx";
import Charts from "views/Charts/Charts.jsx";
import CompanyInformation from "views/CompanyInformation/CompanyInformation.jsx";
import EditCompany from "views/EditCompany/EditCompany.jsx";
import Search from "views/Search/Search.jsx";
import Filter from "views/Filter/Filter.jsx";
import About from "views/About/About.jsx";
import FAQ from "views/FAQ/FAQ.jsx";
import Causes from "views/Causes/Causes.jsx";
import Properties from "views/Properties/Properties.jsx";

var indexRoutes = [
	{path: "/login", name: "Login", component: InfoLogin},
  {path: "/companyInfo", name: "WiseWallet", component: CompanyInformation},
  {path: "/edit", name: "Edit", component: EditCompany},
  {path: "/search", name: "Search", component: Search},
  {path: "/filter", name: "Filter", component: Filter},
  {path: "/properties", name: "Properties", component: Properties},
	{path: "/signup", name: "WiseWallet", component: SignupPage},
	{path: "/link", name: "WiseWallet", component: PlaidLink},
	{path: "/dashboard", name: "WiseWallet", component: Dashboard},
  {path: "/causes", name: "WiseWallet", component: Causes},
	{path: "/charts", name: "WiseWallet", component: Charts},
  {path: "/faq", name: "WiseWallet", component: FAQ},
	{path: "/about", name: "WiseWallet", component: About},
	{path: "/privacy", name: "WiseWallet", component: PrivacyPage},
	{path: "/", name: "WiseWallet", component: LandingPage}
];

export default indexRoutes;
