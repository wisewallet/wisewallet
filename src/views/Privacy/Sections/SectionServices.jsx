import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.jsx";

function SectionServices(props) {
  const {classes} = props;
  return (<div className={classes.services}>
    <center>
      <h3>Effective: November 18, 2018</h3>
    </center>
    <p style={{
        fontSize: '14pt',
        lineHeight: '1.5'
      }}>
      This privacy notice discloses the privacy practices for WiseWallet, Inc at https://mywisewallet.com. This privacy notice applies solely to information collected by this website. It will notify you of the following:
    <br/><br/>
      <ol>
        <li>What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.
        </li>
        <li>What choices are available to you regarding the use of your data.
        </li>
        <li>The security procedures in place to protect the misuse of your information.</li>
        <li>How you can correct any inaccuracies in the information.</li>
      </ol>
      <h3>Information Collection, Use, and Sharing
      </h3>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via our website, email or other direct contact from you. We will not sell or rent this information to anyone.
      <br/><br/>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. gather transactional data.
      <br/><br/>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.
      <h3>Your Access to and Control Over Information</h3>
      You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address given on our website:
      <ul>
        <li>See what data we have about you, if any.
        </li>
        <li>Change/correct any data we have about you.
        </li>
        <li>Have us delete any data we have about you.
        </li>
        <li>
          Express any concern you have about our use of your data.</li>
      </ul>
      <h3>Security</h3>
      We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.<br/><br/>
      Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.
      <br/><br/>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.
      <h3>Registration
      </h3>In order to use this website, a user must first complete the registration form. During registration a user is required to give certain information (such as name and email address). This information is used to contact you about the products/services on our site in which you have expressed interest. At your option, you may also provide demographic information (such as gender or age) about yourself, but it is not required.
      <h3>Cookies</h3>
      We use "cookies" on this site. A cookie is a piece of data stored on a site visitor's hard drive to help us improve your access to our site and identify repeat visitors to our site. For instance, when we use a cookie to identify you, you would not have to log in a password more than once, thereby saving time while on our site. Usage of a cookie is in no way linked to any personally identifiable information on our site.
      <br/><br/>Some of our business partners may use cookies on our site (for example, bank account connection). However, we have no access to or control over these cookies.
      <br/><br/>This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
      <br/><br/>Please visit <a href='https://plaid.com/legal/#end-user-privacy-policy'>https://plaid.com/legal/#end-user-privacy-policy</a> for more information on privacy regarding your transactional data and linking your bank account.
      <br/><br/>If you feel that we are not abiding by this privacy policy, you should contact us immediately via email at <a href='privacy@mywisewallet.com'>privacy@mywisewallet.com</a>.
    </p>
  </div>);
}

export default withStyles(servicesStyle)(SectionServices);
