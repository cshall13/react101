
function Poster(props){
    return(
        <div className="col-sm-6 col-md-4 col-lg-3">
            <img src={props.poster} />
        </div>
    )
}

var Application = React.createClass({

    getInitialState: function(){
        return {
            moviesToShow : [1,2]
        }
    },
// component will run on the very first render and never again
    componentDidMount:function(){
        console.log("The application component has loaded")
        var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
        // AJAX requests creates its own this
        $.getJSON(url, function(movieData){
            console.log(this);
            var nowPlayingArray =  [];
            for(let i = 0; i < movieData.results.length; i++){
                nowPlayingArray.push(movieData.results[i]);
            }
            // the this below is the 'this' appended to bind farther below.constructor
            // bind makes the this apply to the AJAX 'this'
            console.log(nowPlayingArray)
            this.setState({
                moviesToShow: nowPlayingArray
            });

        }.bind(this));
    },

    render: function() {
        var imagePath = "http://image.tmdb.org/t/p/w300"
        return (
            <div className="container">
                <div className="row">
                    <h1>Movie App</h1>
                    <div className="col-sm-12">
                        {/*posters go here*/}
                        {/*updates the 'getInitialState' property above*/}
                    {/*/!*below is JS *!/          '.map' makes a for loop*/}
                        {this.state.moviesToShow.map((movie,index)=>{
                      // 'movie.poster_path' is the url path within the API call to find the
                      //  poster images to return.
                            var moviePoster = imagePath + movie.poster_path
                            // *****POSTER is dumb. poster is basically the opposite of state. very good at displaying data*****
                            return <Poster key={index} poster={moviePoster} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
})


ReactDOM.render(
    <Application />,
    document.getElementById('root')
)