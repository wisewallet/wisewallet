import Home from "../views/Home.jsx";
import Search from "../views/Search.jsx";
import About from "../views/About.jsx";
import Add from "../views/Add.jsx";
import Contact from "../views/Contact.jsx";

var indexRoutes = [
  { path: "/", name: "Home", component: Home },
  { path: "/search", name: "Search", component: Search },
  { path: "/about", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/add", name: "Add", component: Add }
];

export default indexRoutes;
