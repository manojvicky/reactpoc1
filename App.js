import React from 'react';

class App extends React.Component{
	constructor(){
		super();
		this.state = {value1: "coconut",
					  value2: "Hello its done"	
		};
		this.changes = this.changes.bind(this);
		//this.submitform = this.submitform.bind(this);
	}
	
	changes(event){
		this.setState({[name]: event.target.value
		});
    console.log(this.state.value1);
	console.log(this.state.value2);
	}
	
	//submitform(event){
    // alert("The name submitted by user is: "+ this.state.value);
	 //event.preventDefault();
	//}
	
	render(){
			return(
			<div>
				<form>
					<textarea type="text" value={this.state.value2} onChange={this.changes}>
					
					</textarea>
					<select type="text" value={this.state.value1} onChange={this.changes}>
					<option value="grapefruit">Grapefruit</option>
					<option value="lime">Lime</option>
					<option value="coconut">Coconut</option>
					<option value="mango">Mango</option>
					</select>
					<input type="submit"/>
				</form>
			</div>
			);
	}
	
}

export default App;
 

