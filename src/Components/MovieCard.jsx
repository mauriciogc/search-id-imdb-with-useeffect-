import React, { Fragment } from "react";

export default function MovieCard(props) {
	const { imdb_id, title, overview, poster } = props;
	return (
		<div className="movie-card">
			{title ? (
				<Fragment>
					<h2>{title}</h2>
					<img src={poster} alt={imdb_id} />
					<p>{overview}</p>
				</Fragment>
			) : (
				"No hay pelicula."
			)}
		</div>
	);
}
