import React from 'react';
import Letter from '../Containers/Letter';
import NumberKey from '../Containers/Number';
import Data from '../data';

class Keys extends React.Component {
	render() {
		let { row } = this.props

		let keys = row.keys.map(item => {
			return (
				<Letter letter={item.title} key={item.title} />
			)
		})
		return (
			<span key={row.id}>{keys}</span>
		)
	}
}

export default class Soundboard extends React.Component {
	render() {
		const { showInstructions, soundboard, keyTitle } = this.props;
		let trueSoundboard;

		Data.soundboards.map( testSoundboard => {
			if (testSoundboard.title === soundboard) {
				trueSoundboard = testSoundboard;
			}
		})


		let rows = trueSoundboard.rows.map( row => {
			return (
				<div className="row" key={row.id}>
					<Keys row={row} />
				</div>
			)
		});

		let numberKeys = Data.numbers.map ( numberKey => {
			if (numberKey.title) {
				return <NumberKey numberKey={numberKey.numberKey} key={numberKey.id} enabled={true} />
			} else {
				return <NumberKey numberKey={numberKey.numberKey} key={numberKey.id} enabled={false} />
			}
		});

		if (showInstructions === true) {
			return <div />
		} else {
			return (
				<div className="soundboard">
					<h1>{soundboard}</h1>
					<h2>Playing: {keyTitle || "Sweet, sweet silence"}</h2>
					<div className="row">
						{numberKeys}
					</div>
					<div className="soundboard-inner" key={trueSoundboard.title}>
						{rows}
					</div>
				</div>
			);  
		}
	}
}