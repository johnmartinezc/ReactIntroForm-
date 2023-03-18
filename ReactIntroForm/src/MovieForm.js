import React, { Component } from 'react';

class MovieForm extends Component {
    constructor(props){
        super(props); 
        this.initalState = {
            title:'',
            actors: '',
            plot: '',
            imdbRating: '',
            director:'',
            year: '',
            dateAdded: Date()
        };
        this.state = this.initalState;
    }

    
    handleChange = event => {
        const{name, value} = event.target;
        this.setState ({
            [name]: value
        })
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addMovie(this.state);
        this.setState(this.initalState);
        }

    render(){
        const { title, actors, plot, imdbRating,director,year,dateAdded } = this.state;
        return(
            <form onSubmit={this.onFormSubmit}>
            <label htmlFor="title">title: </label><br/>
            <input type="text" id="title" name="title" value={title} onChange={this.handleChange}/><br/>
            <label htmlFor="actor">actors: </label><br/>
            <input type="text" id="actors" name="actors" value={actors} onChange={this.handleChange}/><br/>
            <label htmlFor="plot">plot: </label><br/>
            <input type="text" id="plot" name="plot" value={plot} onChange={this.handleChange}/><br/>
            <label htmlFor="imdbRating">imdbRating: </label><br/>
            <input type="text" id="imdbRating" name="imdbRating" value={imdbRating} onChange={this.handleChange}/><br/>
            <label htmlFor="director">director: </label><br/>
            <input type="text" id="director" name="director" value={director} onChange={this.handleChange}/><br/>
            <label htmlFor="year">year: </label><br/>
            <input type="text" id="year" name="year" value={year} onChange={this.handleChange}/><br/>
            <label htmlFor="dateAdded">dateAdded: </label><br/>
            <input type="text" id="dateAdded" name="dateAdded" value={dateAdded} onChange={this.handleChange}/><br/>
            <button type="submit">
            Submit
            </button>
        </form> 
        )
    }
  }

  
export default MovieForm