import React from 'react';
import classNames from 'classnames';

import './Button.style.scss';

const Button = (props) => {
	return (
		<button
			className={classNames({
				btn: true,
				btnPrimary: props.type === 'primary',
				btnSecondary: props.type === 'secondary',
				btnOutline: props.type === 'outline',
				btnSmall: props.size === 'sm',
			})}
		>
			{props.text}
		</button>
	);
};

export default Button;
