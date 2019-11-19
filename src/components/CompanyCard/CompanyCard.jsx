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

  render(){
    return(
      <Card style={{maxWidth: 345, height:575}}>
        <CardMedia
          style={{justifyContent:'center'}}
          component="img"
          alt={this.props.name}
          height="345"
          width="345"
          src={"data:image/png;base64, " + this.props.logo}
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
          <Button variant="contained">
            <a style={{color: "#000"}}
            href={this.props.link != null ? this.props.link : "#"}
            target="_blank"
          >Website</a></Button>
        </CardActions>
      </Card>
    )
  }
}

export default CompanyCard;

