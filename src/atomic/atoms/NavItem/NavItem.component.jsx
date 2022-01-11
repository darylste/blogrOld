import React from 'react';
import Spacer from '../../layout/Spacer/Spacer.component';

import './NavItem.style.scss';

const NavItem = (props) => {
	return (
		<li>
			<Spacer right='sm'>
				<a
					className='nav-item'
					href='https://bbc.com'
					target='_blank'
					rel='noreferrer'
				>
					{props.text}
				</a>
			</Spacer>
		</li>
	);
};

export default NavItem;
