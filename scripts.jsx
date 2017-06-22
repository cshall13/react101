// create a Component
// component - a variable that will contain JSX or html

function Application(){
	var name = "Shane";
	console.log(React)
	return(
// ************RETURN WILL ONLY RETURN  ONE TAG AT A TIME*******
// ALL TAGS MUST HAVE A COMMON ANCESTOR(1 PARENT/1 DIV MUST WRAP AROUND EVERYTHING) TO RUN MORE THAN ONE TAG		
		<div>
			<div>
				<h1>Hello, World!</h1>
		 {/* ****runs the return of the component 'Message'. can be used wherever and however 
		 many times */} 
		{/* calling component name/gender as an attribute */}
				<Message name="Shane" gender ="M"/>
				<Message name="Carla"/>
				<Message name="Nick"/>
				<Message name="Hayes"/>				
			</div>
			<div>
				<h2>From {name}. {2+2} </h2>
			</div>
			{ /* "if commenting inside of a 'return' the comment has to be surrounded
			by {} and then place '/*' and close with * followed / inside of the
			 {}" */}
		</div>
		)
}
// calling 'props' is 'property' and will be used to allow attributes to be added  
function Message(props){
	return(
		<div>
			<h1>Hello, {props.name}. Gender:{props.gender}</h1>
		</div>
	)
}

// ReactDOM is available because we included reactDOM.js
// the .render function needs React (react.js) and takes 2 arguments
// 1. the component to render
// 2.where to render it.
// When reactDOM.render runs it will own that element


// react
// ***********ReactDOM ONLY manages ONE component*************
ReactDOM.render(
	// ****html
	// <h1>Hello, world!</h1>,
	// **** runs the return of component 'Application'. all 
	// react tags are self closing and cannot be 
	// left open*******
	<Application />,
	// native JS
	document.getElementById('container')
)