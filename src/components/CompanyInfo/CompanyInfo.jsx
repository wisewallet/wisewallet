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
  }

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
      <TableCell>{this.props.name}</TableCell>
      <TableCell> {this.props.category} </TableCell>
      <TableCell> {this.props.cause.toString()} </TableCell>
      <TableCell> <a href={this.props.link}> {this.props.link}</a> </TableCell>
      {this.props.isAdmin 
          ? <TableCell>
          <Button variant="contained" onClick={this.handleClick}>
                Edit
              </Button>
            </TableCell>
          : null}
      {this.props.isAdmin
          ? <TableCell> 
              <Button variant="contained" color="secondary">
                Delete 
              </Button>
            </TableCell>
          : null}
    </TableRow>
    )
  }

}

export default withRouter(CompanyInfo)