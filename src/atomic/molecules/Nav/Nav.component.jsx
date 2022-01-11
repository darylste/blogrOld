import React from 'react';

import './Nav.style.scss';
import NavItem from '../../atoms/NavItem/NavItem.component';

const Nav = () => {
	return (
		<ul className='nav'>
			<NavItem text='Product' />
			<NavItem text='Company' />
			<NavItem text='Connect' />
		</ul>
	);
};

export default Nav;
