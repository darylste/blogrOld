import React from 'react';
import classNames from 'classnames';

import './Spacer.style.scss';

const Spacer = (props) => {
	return (
		<div
			className={classNames({
				topXs: props.top === 'xs',
				topSm: props.top === 'sm',
				topMed: props.top === 'med',
				topLg: props.top === 'lg',
				topXl: props.top === 'xl',

				rightXs: props.right === 'xs',
				rightSm: props.right === 'sm',
				rightMed: props.right === 'med',
				rightLg: props.right === 'lg',
				rightXl: props.top === 'xl',

				btmXs: props.btm === 'xs',
				btmSm: props.btm === 'sm',
				btmMed: props.btm === 'med',
				btmLg: props.btm === 'lg',
				btmXl: props.top === 'xl',

				leftXs: props.left === 'xs',
				leftSm: props.left === 'sm',
				leftMed: props.left === 'med',
				leftLg: props.left === 'lg',
				leftXl: props.top === 'xl',
			})}
		>
			{props.children}
		</div>
	);
};

export default Spacer;
