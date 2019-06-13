import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CompanyCard extends Component{
  constructor(props){
    super(props);
  }

  getImage = () => {
    try{
      return require("../../assets/img/company_logos/"
        + this.props.name.toLowerCase().replace(/\s/g, '') + ".png")
    }
    catch(err){
      return null
    }
  }

  render(){
    return(
      <Card style={{maxWidth: 345}}>
        <CardMedia
          style={{justifyContent:'center'}}
          component="img"
          alt={this.props.name}
          height="100%"
          width="100%"
          image={this.getImage()}
          title={this.props.name}
        />
        <CardContent>
          <Typography gutterBottom component="h2">
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
          style={{justifyContent:'center'}}
        >
          <Button variant="contained"><a style={{color: "#000"}} href={this.props.link != null ? this.props.link : "#"}>Website</a></Button>
        </CardActions>
      </Card>
    )
  }
}

export default CompanyCard;
