import React, { Component } from "react";
import { withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CompanyCard extends Component {
  constructor(props) {
    super(props);
    this.link_company = ""
    this.link_company = "/company/" + this.props.name;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.history.push({
      pathname: '/company',
      state: {
        // id: this.props.id,
        // //delete everything under this
        name: this.props.name,
        category: this.props.category,
        cause: this.props.cause,
        link: this.props.link,
        causes: this.props.causes,
        categories: this.props.categories
      }
    });
  }

  render() {
    return (
      <Card style={{ maxWidth: 345, height: 575 }}>
        <CardMedia
          style={{ justifyContent: 'center' }}
          component="img"
          alt={this.props.name}
          height="345"
          width="345"
          src={"data:image/png;base64, " + this.props.logo}
          title={this.props.name}
          onClick={this.handleClick}
        />
        <CardContent>
          <Typography gutterBottom component="h2"
            onClick={this.handleClick}>
            {this.props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.category}
          </Typography>
          <ul>
            {this.props.cause.map(cause => <li>{'\u2714' + " " + cause}</li>)}
          </ul>
        </CardContent>
        <CardActions
          style={{ justifyContent: 'center' }}
        >
          <Button variant="contained">
            <a style={{ color: "#000" }}
              href={this.props.link !== null ? this.props.link : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >Website</a></Button>
        </CardActions>
      </Card>
    )
  }
}

export default withRouter(CompanyCard);

