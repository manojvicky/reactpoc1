import React from 'react';
class  Increment extends React.Component {
	constructor(props){
     super(props);
	 this.callfuncofparent = this.callfuncofparent.bind(this);
   }
	callfuncofparent(){
	this.props.incrementcomp(this.props.incrementValue);
	};
	
	render(){
		
		return(
		<button onClick={this.callfuncofparent}>+{this.props.incrementValue}</button>
		);
	}
}

class  Decrement extends React.Component {
	constructor(props){
     super(props);
	 this.callfuncofparent = this.callfuncofparent.bind(this);
   }
	callfuncofparent(){
	this.props.decrementcomp(this.props.decrementValue);
	};
	
	render(){
		
		return(
		<button onClick={this.callfuncofparent}>-{this.props.decrementValue}</button>
		);
	}
} 
function Result(props){
	return(
	<span>{props.counter}</span>
	);
}

class App extends React.Component{
	constructor(){
		super();
		this.state = {counter: 0};
		this.incrementCounter = this.incrementCounter.bind(this);
		this.decrementCounter = this.decrementCounter.bind(this);
	}
	
	incrementCounter(incrementValue){
    this.setState(function(preState){return({counter: preState.counter+incrementValue});});
	}
	
	decrementCounter(decrementValue){
    this.setState(function(preState){return({counter: preState.counter-decrementValue});});
	}
	
	render(){
			return(
			<h1>
			<Increment incrementValue={1} incrementcomp={this.incrementCounter}/>
			<Increment incrementValue={5} incrementcomp={this.incrementCounter}/>
			<Increment incrementValue={10} incrementcomp={this.incrementCounter}/>
			<Result counter={this.state.counter}/>
			<Decrement decrementValue={1} decrementcomp={this.decrementCounter}/>
			<Decrement decrementValue={5} decrementcomp={this.decrementCounter}/>
			<Decrement decrementValue={10} decrementcomp={this.decrementCounter}/>
			</h1>
			);
	}
	
}

export default App;
 

