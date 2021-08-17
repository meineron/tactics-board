import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ball from '../pitch/Ball';

class BallEdit extends Component {

	ballImage() {
		return (
			<g transform="translate(-30 -30)">
				<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 952 952">
					<path d="M813 139A475 475 0 000 476a474 474 0 00476 476 474 474 0 00476-476 474 474 0 00-139-337zm-600-31l12-10a457 457 0 01370-60c-14 6-33 18-65 45a393 393 0 00-182 22c-31 11-55 23-71 33l-74-25c3 1 8-4 10-5zm433 119l-81 222-196 37-161-166c11-76 63-143 63-143s34-25 88-44a403 403 0 01174-20l113 114zM39 460c-5 32-6 66-3 100l-9-20a451 451 0 0136-252c-3 30-2 61 0 85-11 28-19 57-24 87zm40 173a418 418 0 018-239c33-28 77-44 101-52l158 164-16 179-155 52c-39-29-72-68-96-104zm470 260c-34 22-121 28-157 29a451 451 0 01-200-92c0-1-4-49-4-66l156-52 181 78 25 103h-1zm300-158c-27 38-59 75-98 102-36 25-85 34-128 41-3 1-44 8-45 6l-25-103 128-132 168-15 8 89-8 12zm3-135l-2 3-168 16-90-158 82-223 115 7a366 366 0 01118 169 434 434 0 01-55 186zm60-250a396 396 0 00-108-131c-5-25-19-65-57-107l2 2 7 5a459 459 0 01156 230v1z"/>
				</svg>
			</g>
		);
	}

	render() {
		const b = this.props.ball;
		const editID = this.props.isEdit ? b.id : null;
		const editClassName = this.props.isEdit ? 'draggable' : null;
		const className = 'ball bc' + b.color;
		const transform = 'translate(' + b.x + ' ' + b.y + ')';
		const ball = b.color === 4 ? this.ballImage() : null;
		return (
			<g className={className} transform={transform}>
				<circle r="30" className={editClassName} data-ref={editID} />
				{ball}
			</g>
		);
	}
}

BallEdit.defaultProps = {
	ball: null,
	isEdit: true
}

BallEdit.propTypes = {
	ball: PropTypes.instanceOf(Ball),
	isEdit: PropTypes.bool
}

export default BallEdit;