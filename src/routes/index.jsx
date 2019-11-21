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
import TempLanding from "views/TempLanding/TempLanding.jsx";

var indexRoutes = [
  { path: "/", name: "WiseWallet", component: CompanyInformation },
  { path: "/CompanyInfo", name: "WiseWallet", component: CompanyInformation },
  { path: "/search", name: "Search", component: Search },
  { path: "/properties", name: "Properties", component: Properties },
  { path: "/causes", name: "WiseWallet", component: Causes },
  { path: "/faq", name: "WiseWallet", component: FAQ },
  { path: "/about", name: "WiseWallet", component: About }
];

export default indexRoutes;
