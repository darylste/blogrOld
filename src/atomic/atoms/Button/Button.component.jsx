import React from 'react';
import classNames from 'classnames';
import ExpandIcon from '../../../images/icon-arrow-light.svg';

import './Button.style.scss';

const Button = ({
	type,
	size,
	text,
	varient = 'rounded',
	hasIcon = false,
	onClicked,
}) => {
	return (
		<button
			onClick={onClicked}
			className={classNames({
				btn: varient === 'rounded',
				btnPrimary: type === 'primary',
				btnSecondary: type === 'secondary',
				btnOutline: type === 'outline',
				btnSmall: size === 'sm',
				btnNav: varient === 'nav',
			})}
		>
			{text}
			{hasIcon && (
				<img className='expand-icon' src={ExpandIcon} alt='expand icon' />
			)}
		</button>
	);
};

export default Button;
