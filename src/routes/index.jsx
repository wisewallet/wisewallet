import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var indexRoutes = [
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/", name: "WiseWallet", component: LandingPage }
];

export default indexRoutes;
