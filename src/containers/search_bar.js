import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
 constructor(props){
  super(props);
  this.state = { term: '' };
 }
 onInputChange = (inputEvent) =>{
  return this.setState({ term: inputEvent.target.value })
 }
 onFormSubmit = (submit) =>{
  submit.preventDefault();
  this.props.fetchWeather(this.state.term)
  return this.setState({ term: '' })
 }
 render(){
  return(
   <form onSubmit={ this.onFormSubmit } action="submission" className="input-group">
   <input type="text" placeholder="Get a five day forecast in your favorite city"
   className="form-control"
    value={ this.state.term }
    onChange={ this.onInputChange }/>
   <span className="input-group-btn">
    <button type="submit" className="btn btn-secondary">Submit</button>
   </span>
   </form>
  )
 }
}
function mapDispatchToProps(dispatch){
 return bindActionCreators({ fetchWeather }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar)


/*
  ------Controlled Field --------
A controlled field is a form element where the value is set by the component
to create a controlled component we need to define the state at the component level

  ----- We want to handle the submit event ------
All browsers recognize the submission of form elements when the enter key is pressed therefore we need to prevent a submission or restart to happen when the enter key is pressed. We need to bind an event handler to the form element to avoid this.

*/
