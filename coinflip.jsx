
var Coin = React.createClass({
    sides: [
        'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
        'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'
    ],

    getInitialState: function() {
        return {
            image: this.sides[0]
        }
    },

    flipCoin: function(){
        var newSide;
        // will find us a number between 0 and 1
        let randomSide = Math.round(Math.random());
        if (randomSide == 0){
            // the user flipped tails
            newSide = this.sides[randomSide]
            console.log("Tails!")
        }else{
            newSide = this.sides[randomSide]
            console.log("Heads!")
        }
        // *******'this.' cannot have an equal sign with it. React has to be in control
        // of 'this.'.***************
        // this.state.image = newSide; SOOOOOO BAD!!!!!!!

        this.setState({
            // everytime the state changes, render is run
            image: newSide
        })
    },

        render:function(){
        return(
            <div>
                <button onClick={this.flipCoin}>Click To Flip</button>
                <img src={this.state.image} />
            </div>
        )
    }
})

function Application(){
    return(
        <div>
            {/*instantiate Coin*/}
            <Coin />
            <Coin />
            <Coin />
        </div>
    )
}

ReactDOM.render(
    <Application />,
    document.getElementById('root')
)