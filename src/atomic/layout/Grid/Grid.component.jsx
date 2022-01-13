import classNames from 'classnames';
import React from 'react';

import './Grid.style.scss';

const Grid = ({ cols, className, isReversed, children }) => {
	return (
		<div
			className={classNames(
				'grid',
				`grid-${cols}`,
				`${className ? className : ''}`,
				{
					gridReversed: isReversed,
				},
			)}
		>
			{children}
		</div>
	);
};

export default Grid;
