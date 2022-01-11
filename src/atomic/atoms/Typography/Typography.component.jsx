import React from 'react';

import './Typography.style.scss';

const Typography = (props) => {
	switch (props.type) {
		case 'hero-title':
			return <h1 className='heroTitle'>{props.children}</h1>;
		case 'hero-text':
			return <p className='heroText'>{props.children}</p>;
		default:
			return null;
	}
};

export default Typography;
