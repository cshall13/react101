
// this is a dumb component! that means it only prints to the DOM. thats its ONLY job
	// this is where props will shine 
// make component called Application that returns a single DOM element
// components should be uppercase
// add props param so we can get properties sent by component rendering this component
// to name a class in React - 'className'

// the app works. but its bit. and its no better than if we just copy 
// and pasted it in to our hyml file. if it gets any bigger, we are in 
// big trouble because we have to manage both JSX and html.
// Lets break the app up into components
// 1.header
// 2.multiple teams
// 3.each team has a counter

// our app sucks!! There is no point in useing React. Everything is hard coded. 
// I want my money back
// Lets make some JSON

// state.
// props are immutable. they DO NOT change
// state is simply a piece of data that DOES change
// props and state are counterparts
// state has:
// 1. an initial value
// 2. (infinite number of) changed values
// in the case of the NL east. all gamesback start at 0
// some kind of mutation occurs (namely, someone loses or wins a game)

// in es5, to use state, react provides a component class for us to use.
// it takes an object as a param
// *******ANYTIME STATE CHANGES THE COMPONENT WILL RE-RENDER******

// create JSON (hardcoded and fake)
var teams = [
	{
		name: "Braves",
		gamesBack: 0,
		city: "Atlanta"
	},
	{
		name: "Nationals",
		gamesBack: 0,
		city: "Washington"
	},
	{
		name: "Marlins",
		gamesBack: 0,
		city: "Miami"
	},
	{
		name:"Mets",
		gamesBack:0,
		city: "New York"
	},
	{
		name:"Phillies",
		gamesBack:0,
		city:"Philadeliphia"
	}
]

function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}

// create a new component called Team to be used by Application
// we can use it twice with props!
// all props are being sent to application and used where the attributes are and 
// being applied to those attributes
function Team(props){
	return(
		<div className="row">
			<div className="col-sm-8 col-sm-offset-2 team">
				<div className="team-name col-sm-12">{props.city} {props.name}</div>
					<Counter gamesBack={props.gamesBack} />
			</div>
		</div>
	)
}

// var with the name of the component
// createClass is a helper class.
// the only REQUIRED property, is render, which will return a DOM element
var Counter = React.createClass({
	render: function(){
		// back to the good old days...
		return(
			<div className="counter">
				<button className="btn btn-success">+</button>
				<div className="games-back">games-back will go here</div>
				<button className="btn btn-danger">-</button>			
			</div>
		)
	}
})

function Application(props){
	return(
	// Use map to loop throught the teams array. We no longer
	// need:
	// 	<Team name="Braves" score="0" />
	// 	<Team name="Brewers" score="0" />
	// props.teams is an array, with tteam objects
	// send Team the team object, in map, ES6 style

		<div className="container">
			{/*<h1>{props.title}</h1>*/}
			<Header title={props.title} />
	{ /*curly brackets are for ES6. index = i in for loops.
	.map() = write a for loop */}
			{props.teams.map((team,index)=>{
		// a key is a tool solely for react to use internally to manage an array
				return <Team key={index} name={team.name} gamesBack={team.gamesBack} city={team.city} />
			})}						
		</div>
	)
}

// Add a prop to send the title to the Application component

ReactDOM.render(
	// title and teams are defined up top
	<Application title="Braves Scoreboard" teams={teams} />,
	document.getElementById('root')
)