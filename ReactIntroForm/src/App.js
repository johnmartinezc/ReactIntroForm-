// import React, { Component } from 'react';
// import Table from "./Table"
// import MovieForm from './MovieForm'
// import HomePage from './Pages/HomePage';
// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import NavBar from './Components/NavBar'


// import './App.css';

// function App() { 
//   return (
//     <div className="MovieForm">
//       <header  className="App-header">
//         <h1>Movie Form</h1>
//       </header>
//       <NavBar/>
//     </div>


//   );
// }




import './App.css';
import Table from './Components/Table'
import MovieForm from './MovieForm';
import SearchBar from './Components/SearchBar';
import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';



const DATA_URL = "https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json"


// class App extends Component  {
//   state = {
//      movies : [{
//         title: "The Godfather",
//         actors: ["Marlon Brando", "Al Pacino", "James Caan"],
//         plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
//         genre: "Crime, Drama",
//         imdbRating: 9.2,
//         director: "Francis Ford Coppola",
//         year: 1972,
//       },
//       {
//         title: "The Shawshank Redemption",
//         actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
//         plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
//         genre: "Drama",
//         imdbRating: 9.3,
//         director: "Frank Darabont",
//         year: 1994,
//       },
//       {
//         title: "The Dark Knight",
//         actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
//         plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
//         genre: "Action, Crime, Drama",
//         imdbRating: 9.0,
//         director: "Christopher Nolan",
//         year: 2008,
//       },
//       {
//         title: "Pulp Fiction",
//         actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
//         plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
//         genre: "Crime, Drama",
//         imdbRating: 8.9,
//         director: "Quentin Tarantino",
//         year: 1994,
//       },
//       {
//         title: "The Lord of the Rings: The Return of the King",
//         actors: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
//         plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
//         genre: "Action, Adventure, Drama",
//         imdbRating: 8.9,
//         director: "Peter Jackson",
//         year: 2003,
//       },
//       {
//         title: "Forrest Gump",
//         actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
//         plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
//         genre: "Drama, Romance",
//         imdbRating: 8.8,
//         director: "Robert Zemeckis",
//         year: 1994,
//       },
//       {
//         title: "Inception",
//         actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
//         plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
//         genre: "Action, Adventure, Sci-Fi",
//         imdbRating: 8.7,
//         director: "Christopher Nolan",
//         year: 2010,
//       },
//       {
//         title: "The Matrix",
//         actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
//         plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
//         genre: "Action, Sci-Fi",
//         imdbRating: 8.7,
//         director: "Lana Wachowski, Lilly Wachowski",
//         year: 1999,
//       },
//       {
//         title: "Schindler's List",
//         actors: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
//         plot: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
//         genre: "Biography, Drama, History",
//         imdbRating: 8.9,
//         director: "Steven Spielberg",
//         year: 1993,
//       },
//       {
//         title: "Goodfellas",
//         actors: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
//         plot: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
//         genre: "Crime, Drama",
//         imdbRating: 8.7,
//         director: "Martin Scorsese",
//         year: 1990,
//       },
//   ]
// }







function App() {

	//we make a hook for movies into the state
  // because we are in a function
  const [movies, setMovies] = useState();

// use effect is equivalent to "Component did Mount" runs
// after a  component has been rendered.
// component first renders when it's created
// also renders when a change happens to it 
  useEffect(() => {

	//asyncronously request data 
	// wait for promise to resolve
	// const moviesData = []
	fetch(DATA_URL)
	.then((result) => result.json())
	.then((result) => {
		setMovies(result);
	});

  }, [])
  // when we pass [] to useEffect -> it only runs once in the beginning
  // we can subscript multiple fields for it to run on 	


  const addMovie = (movie) => {
     setMovies([...movies, movie]);
  }

  const removeMovie = (toDelIdx) => {
    const filteredMovies = movies.filter((_, index) => {
       return index !== toDelIdx
    })
    setMovies(filteredMovies)
  }


  const filterMovies = (input, field) => {

	// //show all films if there is no query 
	// if (searchField.trim().length === 0) {
	// 	setMovies(moviesData);
	// 	return;
	// }

	 const moviesFiltered = movies.filter((movie) => {
		   return movie[field].toLowerCase().includes(input.toLowerCase())
	 })

	 setMovies(moviesFiltered)
  } 
  
  

  return (
 <div className="App">
  <NavBar/>
  <SearchBar	
	filterMovies={filterMovies}
  />
  <Table 
     movies={movies || []}
     removeMovie={removeMovie}
	
  />
  <MovieForm 
    addMovie={addMovie}
  />
</div>
  );
}
export default App;



// removeMovie = (index) => {
//       const { movies } = this.state 
//       this.setState({
//           movies: movies.filter((_, i) => {
//              return i !== index
//        }),
//   })
// } 
//   addMovie = movie => {     
//     this.setState({movies: [...this.state.movies, movie ]})
//   } 
//         render (){
//         return (
//     <div>
        
//         <MovieForm addMovie ={this.addMovie}/>
//         <Table movieData={this.state.movies} 
//         removeMovie = {this.removeMovie}/>
//     </div>
//         )
// }
// }
// export default App;