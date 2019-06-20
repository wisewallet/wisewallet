import React, { Component } from 'react';
import { withRouter, Redirect} from 'react-router';

// @material-ui/core components
import TableBody from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class CompanyInfo extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.deleteValue = this.deleteValue.bind(this);
  }

  deleteValue = () => {
    const id = this.props.id;
    fetch("/admin/company/delete/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log("json", json);
        if(json.data.code == 200){
          console.log("success");
          window.location.reload();
        }
      })
      .catch(error => console.log("Error caught", error));
  };

  handleClick = () => {
    this.props.history.push({
      pathname: '/edit',
      state: {
        id: this.props.id,
        //delete everything under this
        name: this.props.name,
        category: this.props.category,
        cause: this.props.cause,
        link: this.props.link,
        causes: this.props.causes,
        categories: this.props.categories
      }
    });
  }

  render(){
    return(
    <TableRow>
      <TableCell>{this.props.id}</TableCell>
      <TableCell>
        <img src={"data:image/png;base64, " + this.props.logo}
          style={{objectFit: "fill"}}
          alt={this.props.name}
          height="50px"
          width="50px"/>
      </TableCell>
      <TableCell>{this.props.name}</TableCell>
      <TableCell> {this.props.category} </TableCell>
      <TableCell> {this.props.cause.toString()} </TableCell>
      <TableCell> <a href={this.props.link} target="_blank"> {this.props.link}</a> </TableCell>
      <TableCell>
        <Button variant="contained" onClick={this.handleClick}>
          Edit
        </Button>
      </TableCell>
      <TableCell> 
        <Button variant="contained" onClick={this.deleteValue} color="secondary" >
          Delete 
        </Button>
      </TableCell>
    </TableRow>
    )
  }

}

export default withRouter(CompanyInfo)
