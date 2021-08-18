import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';
import LoopIcon from '@material-ui/icons/Loop';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class AnimControls extends Component {

	render(){
		return (
			<React.Fragment>

				<Tooltip title="Previous Frame">
					<IconButton edge="end" color="inherit" aria-label="Previous Frame" onClick={this.props.keyFramePrevious} >
						<ArrowBackIcon/>
					</IconButton>
				</Tooltip>
				<Tooltip title="Current Frame">
					<IconButton color="inherit" aria-label="Current Frame">
						{this.props.keyFrameCurrent}
					</IconButton>
				</Tooltip>
				<Tooltip title="Next Frame">
					<IconButton edge="start" color="inherit" aria-label="Next Frame" onClick={this.props.keyFrameNext} >
						<ArrowForwardIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title="Add Frame">
					<IconButton color="inherit" aria-label="Add Frame" onClick={this.props.keyFrameAdd} >
						<AddIcon fontSize="large"></AddIcon>
					</IconButton>
				</Tooltip>

				<Tooltip title="Play Animation">
					<IconButton aria-label="Play Animation" color="inherit">
						<PlayArrowIcon fontSize="large" />
					</IconButton>
				</Tooltip>
				<Tooltip title="Pause Animation">
					<IconButton aria-label="Pause Animation" color="inherit" >
						<PauseIcon fontSize="large"/>
					</IconButton>
				</Tooltip>
				<Tooltip title="Stop Animation">
					<IconButton aria-label="Stop Animation" color="inherit" >
						<StopIcon fontSize="large"/>
					</IconButton>
				</Tooltip>
				<Tooltip title="Loop Animation">
					<IconButton  aria-label="Loop Animation" color="inherit" >
						<LoopIcon fontSize="large"/>
					</IconButton>
				</Tooltip>
				<Tooltip data-delay-hide="1000" title="Select frame duration">
				<Select
					id="frameDurationSelect"
					onChange={this.props.keyFrameDurationSet}
					defaultValue={5}>
					<MenuItem value={1}>1</MenuItem>
					<MenuItem value={3}>3</MenuItem>
					<MenuItem value={5}>5</MenuItem>
					<MenuItem value={7}>7</MenuItem>
					<MenuItem value={10}>10</MenuItem>
       			 </Select>
				</Tooltip>

			</React.Fragment>
		);
	}
}

AnimControls.defaultProps = {
	keyFrameCurrent: 0,
	keyFrameAdd: null,
	keyFrameNext: null,
	keyFramePrevious: null
}

AnimControls.propTypes = {
	keyFrameCurrent: PropTypes.number,
	keyFrameAdd: PropTypes.func,
	keyFrameNext: PropTypes.func,
	keyFramePrevious: PropTypes.func
}

export default AnimControls;