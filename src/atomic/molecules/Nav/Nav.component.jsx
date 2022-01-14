import React from 'react';
import Dropdown from '../../atoms/Dropdown/Dropdown.component';
import Spacer from '../..//layout/Spacer/Spacer.component';
import './Nav.style.scss';

const Nav = ({ navItems = [] }) => {
	return (
		<ul className='nav'>
			{navItems.map((navItem) => (
				<React.Fragment key={navItem.title}>
					<Spacer right='xs'>
						<li className='list-item-nav'>
							<Dropdown
								navText={navItem.title}
								dropdownItems={navItem.dropdownItems}
							/>
						</li>
					</Spacer>
				</React.Fragment>
			))}
		</ul>
	);
};

export default Nav;
