import React from 'react';
import Link from '../../atoms/Link/Link.component';

import './FooterNav.style.scss';

const FooterNav = () => {
	return (
		<ul>
			<Link text='Overview' varient='footer' />
			<Link text='Pricing' varient='footer' />
			<Link text='item' varient='footer' />
			<Link text='item' varient='footer' />
			<Link text='item' varient='footer' />
		</ul>
	);
};

export default FooterNav;
