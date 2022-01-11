import React from 'react';

import './Container.style.scss';

const Container = (props) => {
	return <div className='container'>{props.children}</div>;
};

export default Container;
