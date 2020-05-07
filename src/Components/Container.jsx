import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

export default function Container() {
	//States
	const [searchMovie, setSearchMovie] = useState();
	const [movie, setMovie] = useState({
		imdb_id: "",
		original_title: "",
		overview: "",
		poster: "",
	});

	const handleSearchMovie = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		setSearchMovie(data.get("search"));
	};

	//Secondary effects
	useEffect(() => {
		console.log("--->", searchMovie);
		const API_KEY = "4ff32b3a95fabacb861ecfa8aa1dfcba";
		const URL = `https://api.themoviedb.org/3/movie/${searchMovie}?api_key=${API_KEY}&language=es-MX`;

		const handleData = (data) => setMovie(data);

		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				const { imdb_id, original_title, overview, poster_path } = data;
				const poster = `https://image.tmdb.org/t/p/w200${poster_path}`;
				handleData({ imdb_id, title: original_title, overview, poster });
			});
	}, [searchMovie]);

	return (
		<div>
			<form onSubmit={handleSearchMovie}>
				<input
					type="text"
					name="search"
					className="field"
					placeholder="Type id imbd"
				/>
				<button className="button">Buscar</button>
			</form>

			<div className="example-id">
				Examples: tt1950186, tt7286456, tt8946378, tt8579674, tt7126948,
				tt7131622, tt7146812
			</div>
			<MovieCard {...movie} />
		</div>
	);
}
