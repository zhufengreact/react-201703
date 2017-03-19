
import React, { Component } from "react";


import List from "../../components/List/List"

import "./index.css";

export default class App extends Component{


	render(){

		return (
				<div id="container">
					<ul>
						<List/>
					</ul>
					<button>Add</button>
				</div>
		)
	}
}
