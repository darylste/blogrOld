import React from 'react';
import classNames from 'classnames';

import './Container.style.scss';

const Container = ({ className, alignment = 'center', children, style }) => {
	return (
		<div
			style={style}
			className={classNames('container', className, `container-${alignment}`)}
		>
			{children}
		</div>
	);
};

export default Container;
