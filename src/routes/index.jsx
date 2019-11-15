import About from "views/About/About.jsx";
import Causes from "views/Causes/Causes.jsx";
import Charts from "views/Charts/Charts.jsx";
import CompanyDetail from "views/CompanyInformation/CompanyDetail.jsx";
import CompanyInformation from "views/CompanyInformation/CompanyInformation.jsx";
import CompanyUsersCompany from "views/CompanyInformation/CompanyUsersInformation.jsx";
import Dashboard from "views/Dashboard/Dashboard.jsx";
import EditCompany from "views/EditCompany/EditCompany.jsx";
import FAQ from "views/FAQ/FAQ.jsx";
import InfoCompanyLogin from "views/InfoLogin/InfoCompanyLogin.jsx";
import InfoLogin from "views/InfoLogin/InfoLogin.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import PlaidLink from "views/PlaidLink/PlaidLink.jsx";
import PrivacyPage from "views/Privacy/PrivacyPage.jsx";
import Properties from "views/Properties/Properties.jsx";
import Search from "views/Search/Search.jsx";
import SignupCompanyPage from "views/SignupPage/SignUpCompanyPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import TempLanding from "views/TempLanding/TempLanding.jsx";


var indexRoutes = [
	{path: "/login", name: "Login", component: InfoLogin},
  {path: "/companyInfo", name: "WiseWallet", component: CompanyInformation},
  {path: "/edit", name: "Edit", component: EditCompany},
  {path: "/search", name: "Search", component: Search},
  //{path: "/filter", name: "Filter", component: Filter},
  {path: "/properties", name: "Properties", component: Properties},
  {path: "/signup", name: "WiseWallet", component: SignupPage},
  {path: "/company/signup", name: "WiseWallet", component: SignupCompanyPage},
  {path: "/company/login", name: "WiseWallet", component: InfoCompanyLogin},
  {path: "/company_users/company", name:"Wisewallet", component: CompanyUsersCompany},
	{path: "/link", name: "WiseWallet", component: PlaidLink},
  {path: "/dashboard", name: "WiseWallet", component: Dashboard},
  {path: "/company", name:"WiseWallet", component:CompanyDetail},
  {path: "/causes", name: "WiseWallet", component: Causes},
	{path: "/charts", name: "WiseWallet", component: Charts},
  {path: "/faq", name: "WiseWallet", component: FAQ},
	{path: "/about", name: "WiseWallet", component: About},
  {path: "/beta", name: "WiseWallet", component: LandingPage},
	{path: "/privacy", name: "WiseWallet", component: PrivacyPage},
	{path: "/", name: "WiseWallet", component: TempLanding},
];

export default indexRoutes;
