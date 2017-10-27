import React from 'react';

function Datatransfer(props){
	
	const arraydata = Object.keys(props.data);
	console.log(arraydata);
	
	return(
		<div>
		{arraydata}
		</div>
	)
}
export default Datatransfer;