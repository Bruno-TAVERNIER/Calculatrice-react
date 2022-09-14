import React from 'react';
export class Calculatrice extends React.Component {
	state = {n1: 0, n2: 0, resultat: 0};

	changeVal = (e) => {
		this.setState(() => ({[e.target.name]: e.target.value}));
	}

	operation = (e) => {
		let ope = e.target.name;
		if(ope === 'add') {
			this.setState({resultat: Number.parseFloat(this.state.n1) + Number.parseFloat(this.state.n2)});
		}
		else if(ope === 'sub') {
			this.setState({resultat: Number.parseFloat(this.state.n1) - Number.parseFloat(this.state.n2)});
		}
		else if(ope==='mul') {
			this.setState({resultat: Number.parseFloat(this.state.n1) * Number.parseFloat(this.state.n2)});
		}
		else {
			if(Number.parseFloat(this.state.n2) !== 0) {
				this.setState({resultat: Number.parseFloat(this.state.n1) / Number.parseFloat(this.state.n2)});
			}
			else this.setState({resultat: 'Bien tenté'}); 
		}
	}

	render() {
		return (
			<div>
				<p>{ this.state.resultat }</p>
				<p>
					<label>Nombre 1</label>
					<input type="number" name="n1" value={this.state.n1} onChange={ this.changeVal } />
				</p>
				<p>
					<label>Nombre 2</label>
					<input type="number" name="n2" value={this.state.n2} onChange={ this.changeVal } />
				</p>
				<p>
					<button name="add" onClick={ this.operation }>+</button>
					<button name="sub" onClick={ this.operation }>-</button>
					<button name="mul" onClick={ this.operation }>x</button>
					<button name="div" onClick={ this.operation }>/</button>
				</p>
			</div>
		)
	}
}