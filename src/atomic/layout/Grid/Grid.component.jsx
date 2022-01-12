import React from 'react';

import './Grid.style.scss';

const Grid = (props) => {
	return <div className={`grid grid-${props.cols}`}>{props.children}</div>;
};

export default Grid;
