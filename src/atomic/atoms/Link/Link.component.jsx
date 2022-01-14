import React from 'react';
import Spacer from '../../layout/Spacer/Spacer.component';

import './Link.style.scss';

const Link = ({ children, varient, text }) => {
	return (
		<li className={`list-item list-item-${varient}`}>
			<Spacer right='sm'>
				<a
					className={`link link-${varient}`}
					href='https://bbc.com'
					target='_blank'
					rel='noreferrer'
				>
					{text}
				</a>
			</Spacer>
			{children}
		</li>
	);
};
export default Link;
