import React from 'react';
import classNames from 'classnames';

import './Flex.style.scss';

const Flex = (props) => {
	return (
		<div
			className={classNames({
				flexContainer: true,
				justifyCenter: props.justifyCenter,
				justifyBetween: props.justifyBetween,
				justifyAround: props.justifyAround,
				justifyEnd: props.justifyEnd,
				alignCenter: props.alignCenter,
				alignEnd: props.alignEnd,
				flexColumn: props.flexColumn,
			})}
		>
			{props.children}
		</div>
	);
};

export default Flex;
