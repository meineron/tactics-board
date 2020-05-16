import React, { Component } from 'react';

class Pitch extends Component {
	render() {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 4300 2300">
				<pattern id="goal-net" x="0" y="0" width="20" height="20" stroke="black" patternUnits="userSpaceOnUse">
					<line x1="0" x2="20" y1="0" y2="20" />
					<line x1="20" x2="00" y1="0" y2="20" />
				</pattern>
				<g id="background">
					<rect width="4300" height="2300" fill="#b7b7b7" />
				</g>
				<g id="pitch" transform="translate(150 100)" fill="#0280c6" stroke="white" strokeWidth="8">
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
				<g id="players" transform="translate(150 2150)" fontSize="50">
					<g id="player-01" textAnchor="middle">
						<circle r="50" cx="50" cy="70" />
						<text fill="white" x="50" y="70" dominantBaseline="central">0</text>
						<text x="50">Goran Test</text>
					</g>
				</g>
				<g id="balls"></g>
			</svg>
		);
	}
}

export default Pitch;