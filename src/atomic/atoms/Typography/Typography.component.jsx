import React from 'react';

import './Typography.style.scss';

const Typography = (props) => {
	switch (props.type) {
		case 'hero-title':
			return <h1 className='heroTitle'>{props.children}</h1>;
		case 'hero-text':
			return <p className='heroText'>{props.children}</p>;
		case 'title':
			return <h2 className='title'>{props.children}</h2>;
		case 'subtitle':
			return <h3 className='subtitle'>{props.children}</h3>;
		case 'body':
			return <p className='body'>{props.children}</p>;
		default:
			return null;
	}
};

export default Typography;
