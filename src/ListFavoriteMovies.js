import React, { Component } from 'react';

class ListFavoriteMovies extends Component {
    render() {
        return(
            <ul className='movie-list'>
                {this.props.profiles.map((profile) => {
                     const userName = this.props.users[profile.userID].name;
                     const favoriteMovie = this.props.movies[profile.favoriteMovieID].name;
                    return(
                        <li key={profile.id} >
                            <div>
                                <p>{`${userName}'s favorite movie is "${favoriteMovie}."`}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ListFavoriteMovies