import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import PlayerEdit from './PlayerEdit'
import BallEdit from './BallEdit'
import './PitchEdit.css';

// this is for offset from toolbar and default class
const styles = theme => ({
	offset: {
		paddingTop: theme.mixins.toolbar.minHeight,
	}
})

class PitchEdit extends Component {

	constructor(props) {
		super(props);
		this._bgRef = React.createRef();	// background reference to get client size of pitch for editing
		this._orgWidth = this.props.viewBoxRight - this.props.viewBoxLeft;
		this._orgHeight = this.props.viewBoxBottom - this.props.viewBoxTop;
		this.state = {
			players: this.initPlayers(props.noPlayers, 8),
			balls: this.initBalls(props.noBalls, 5)
		};
	
		// mouse drag init
		this._dragNode = null;
		this._dragObjectType = -1;
		this._mouseX = 0;
		this._mouseY = 0;

		// add events
		this.hMouseDown = this.hMouseDown.bind(this);
		this.hMouseUp = this.hMouseUp.bind(this);
		this.hMouseMove = this.hMouseMove.bind(this);
	}

	initPlayers(noPlayers, noColors) {
		//console.log("Create player data noPlayers:", noPlayers)
		let groupSize = Math.floor(noPlayers / noColors)
		let players = [];
		for (var i = 0; i < noPlayers; i++) {
			let col = Math.floor(i / groupSize);
			let numb = groupSize - (i % groupSize);
			players.push({
				id: "pl"+i.toString(),
				x: col * 120,
				y: 0,
				color: col,
				number: numb.toString(),
				name: "",
			});
		}
		return players;
	}

	initBalls(noBalls, noColors) {
		//console.log("Create ball data noBalls:", noBalls)
		let groupSize = Math.floor(noBalls / noColors)
		let balls = [];
		for (var i = 0; i < noBalls; i++) {
			let col = Math.floor(i / groupSize);
			balls.push({
				id: "bl"+i.toString(),
				x: col * 80,
				y: 0,
				color: col
			});
		}
		return balls;
	}

	getScale() {
		const box = this._bgRef.current.getBoundingClientRect();
		return {
			X: this._orgWidth / box.width,
			Y: this._orgHeight / box.height
		}
	}

	playerDrag(id, deltaX, deltaY) {
		const pl = this.state.players.map(p => {
			if (id === p.id) {
				p.x += deltaX;
				p.y += deltaY;
			}
			return p;
		});

		this.setState({
			players:pl
		});
	}

	ballDrag(id, deltaX, deltaY) {
		const bl = this.state.balls.map(b => {
			if (id === b.id) {
				b.x += deltaX;
				b.y += deltaY;
			}
			return b;
		});

		this.setState({
			balls:bl
		});
	}

	hMouseDown(e) {
		if (!e.target.classList.contains('draggable')) {
			return;
		}
		this._dragNode = e.target.getAttribute("data-ref");
		if (null === this._dragNode) {
			return;
		}
		e.preventDefault();
		this._mouseX = e.clientX;
		this._mouseY = e.clientY;

		this._dragObjectType = -1;
		if (this._dragNode.startsWith("pl")) {
			this._dragObjectType = 0;
		}
		if (this._dragNode.startsWith("bl")) {
			this._dragObjectType = 1;
		}
	}

	hMouseUp(e) {
		e.preventDefault();
		this._dragNode = null;
		this._dragObjectType = -1;
	}

	hMouseMove(e) {
		if (null == this._dragNode) {
			return;
		}
		e.preventDefault();
		let scale = this.getScale();
		let deltaX = (e.clientX - this._mouseX) * scale.X;
		let deltaY = (e.clientY - this._mouseY) * scale.Y;
		this._mouseX = e.clientX;
		this._mouseY = e.clientY;

		switch (this._dragObjectType) {
			case 0:
				this.playerDrag(this._dragNode, deltaX, deltaY);
				break;
			case 1:
				this.ballDrag(this._dragNode, deltaX, deltaY);
				break;
			default:
				console.log("Invalid drag object type", this._dragObjectType, this._dragNode);
				break;
		}
	}

	render() {
		const viewBox = this.props.viewBoxLeft.toString() + ' ' + this.props.viewBoxTop.toString() + ' ' + this.props.viewBoxRight.toString() + ' ' + this.props.viewBoxBottom.toString()

		const playersShow = this.state.players.map((pl, index) => {
			return (
				<PlayerEdit key={index.toString()} id={pl.id} x={pl.x} y={pl.y} number={pl.number} name={pl.name} color={pl.color} />
			);
		});

		const ballsShow = this.state.balls.map((b, index) => {
			return (
				<BallEdit key={index.toString()} id={b.id} x={b.x} y={b.y} color={b.color} />
			);
		});

		// default class is full screen width and height with paading for menu height
		const pitchClasses = "pitch " + this.props.classes.offset;

		// Caclculate pitch position in viewBox
		const pitchLeft = (this._orgWidth - 4000) / 2; // Goals are relative to pitch no need to take them in calc
		const pitchTop = (this._orgHeight - 2000) / 2;
		const pitchTransform = 'translate(' + pitchLeft + ' ' + pitchTop + ')';

		// calculate players position in viewbox
		const playersLeft = pitchLeft;
		const playersTop = pitchTop + 2000 + 50;
		const playersTransform = 'translate(' + playersLeft + ' ' + playersTop + ')';

		// calclulate balls position in viewBox
		const ballsLeft = pitchLeft + 1050
		const ballsTop = pitchTop + 2000 + 100;
		const ballsTransform = 'translate(' + ballsLeft + ' ' + ballsTop + ')'; // "translate(1200 2210)"

		return (
			<div className={pitchClasses}>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} onMouseDown={this.hMouseDown} onMouseUp={this.hMouseUp} onMouseMove={this.hMouseMove}>
					<pattern id="goal-net" x="0" y="0" width="20" height="20" stroke="black" patternUnits="userSpaceOnUse">
						<line x1="0" x2="20" y1="0" y2="20" />
						<line x1="20" x2="00" y1="0" y2="20" />
					</pattern>
					<g id="background" ref={this._bgRef}>
						<rect width={this._orgWidth} height={this._orgHeight} fill="#b7b7b7" fillOpacity="0.5" />
					</g>
					<g id="pitch" transform={pitchTransform} fill="#0280c6" stroke="white" strokeWidth="8">
						<rect width="4000" height="2000" />
						<line x1="2000" x2="2000" y1="0" y2="2000" />
						<circle r="300" cx="2000" cy="1000" fill="none" />
						<circle r="12" cx="2000" cy="1000" fill="white" strokeWidth="0" />
						<g id="corner_marks">
							<path fill="none" d="M25,0 a25,25 0 0,1 -25,25" />
							<path fill="none" d="M4000,25 a25,25 0 0,1 -25,-25" />
							<path fill="none" d="M0,1975 a25,25 0 0,1 25,25" />
							<path fill="none" d="M3975,2000 a25,25 0 0,1 25,-25" />
						</g>
						<g id="substitition-zones">
							<line x1="1000" x2="1000" y1="-48" y2="32" />
							<line x1="1500" x2="1500" y1="-48" y2="32" />
							<line x1="2500" x2="2500" y1="-48" y2="32" />
							<line x1="3000" x2="3000" y1="-48" y2="32" />
						</g>
						<g id="left">
							<line x1="600" x2="600" y1="842" y2="1158" />
							<circle r="12" cx="600" cy="1000" fill="white" strokeWidth="0" />
							<path fill="none" d="M0,242 a600,600 0 0,1 600,600" />
							<path fill="none" d="M600,1158 a600,600 0 0,1 -600,600" />
							<line x1="0" x2="-40" y1="500" y2="500" />
							<line x1="0" x2="-40" y1="1500" y2="1500" />
							<g id="goal-left">
								<rect width="100" height="300" x="-100" y="850" fill="url(#goal-net)" stroke="#777777" strokeWidth="4" />
								<line x1="0" x2="0" y1="850" y2="1150" />
								<line x1="0" x2="0" y1="850" y2="1150" stroke="red" strokeDasharray="20" />
							</g>
						</g>
						<g id="left-penalty" fill="white" strokeWidth="0">
							<rect width="16" height="16" x="992" y="492" />
							<circle r="12" cx="1000" cy="1000"/>
							<rect width="16" height="16" x="992" y="1492" />
						</g>
						<g id="right">
							<line x1="3400" x2="3400" y1="842" y2="1158" />
							<circle r="12" cx="3400" cy="1000" fill="white" strokeWidth="0" />
							<path fill="none" d="M3400,842 a600,600 0 0,1 600,-600" />
							<path fill="none" d="M3400,1158 a600,600 0 0,0 600,600" />
							<line x1="4000" x2="4040" y1="500" y2="500" />
							<line x1="4000" x2="4040" y1="1500" y2="1500" />
							<g id="goal-right">
								<rect width="100" height="300" x="4000" y="850" fill="url(#goal-net)" stroke="#777777" strokeWidth="4" />
								<line x1="4000" x2="4000" y1="850" y2="1150" />
								<line x1="4000" x2="4000" y1="850" y2="1150" stroke="red" strokeDasharray="20" />
							</g>
						</g>
						<g id="right-penalty" fill="white" strokeWidth="0">
							<rect width="16" height="16" x="2992" y="492" />
							<circle r="12" cx="3000" cy="1000" />
							<rect width="16" height="16" x="2992" y="1492" />
						</g>
					</g>
					<g id="players" transform={playersTransform} fontSize="50">
						{playersShow}
					</g>
					<g id="balls" transform={ballsTransform}>
						{ballsShow}
					</g>
				</svg>
			</div>
		);
	}
}

PitchEdit.defaultProps = {
	noPlayers: 0,
	viewBoxLeft: 0,
	viewBoxTop: 0,
	viewBoxRight: 4300,
	viewBoxBottom: 2300
}

PitchEdit.propTypes = {
	noPlayers: PropTypes.number,
	viewBoxLeft: PropTypes.number,
	viewBoxTop: PropTypes.number,
	viewBoxRight: PropTypes.number,
	viewBoxBottom: PropTypes.number
}

export default withStyles(styles, { withTheme: true })(PitchEdit);