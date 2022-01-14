import React from 'react';
import Link from '../../atoms/Link/Link.component';

import './FooterNav.style.scss';

const FooterNav = ({ dropdownItems = [] }) => {
	return (
		<ul>
			{dropdownItems.map((dropdownItem) => (
				<Link
					key={dropdownItem.text}
					text={dropdownItem.text}
					varient='footer'
				/>
			))}
		</ul>
	);
};

export default FooterNav;
