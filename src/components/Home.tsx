'use strict';
import React from 'react';
interface IHomeProps
{
	houseName: string;
	area: number;
	createdOn: string;
}
interface IHomeState
{
	houseName: string;
	area: number;
	createdOn: string;
}
export default class Home extends React.Component<IHomeProps, IHomeState>{

	constructor(home: IHomeProps){
		super(home);
		this.state={
			houseName:this.props.houseName,
			area:this.props.area,
			createdOn:this.props.createdOn,
		}
	}
	render(){
		return(<div> Home  {this.state.houseName} with area {this.state.area} Sq Ft, Created On : {this.state.createdOn} </div>);
	}
}