import React from 'react';
import Link from '../../atoms/Link/Link.component';
import './Nav.style.scss';

const Nav = () => {
	return (
		<ul className='nav'>
			{/* {labels.forEach((element) => {
				<Link text={element} varient='nav-item' />;
				console.log(element);
			})} */}

			<Link text='Product' varient='nav' />
			<Link text='Company' varient='nav' />
			<Link text='Connect' varient='nav' />
		</ul>
	);
};

export default Nav;
