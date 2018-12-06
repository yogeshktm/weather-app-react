import React from 'react';

export class SearchBox extends React.Component{
  render(){
    return(
      <form onSubmit={this.props.handleSubmit} className="search-box">
        <input autoFocus className="search" type="search" id="search" autoComplete="off" onChange={this.props.handleChange} placeholder="Search"/>
        <button className="btn" type="submit">Search</button>
      </form>
    )
  }
}