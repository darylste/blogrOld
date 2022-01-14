import React from 'react';

import Logo from '../../atoms/Logo/Logo.component';
import Nav from '../../molecules/Nav/Nav.component';
import Flex from '../../layout/Flex/Flex.component';
import Button from '../../atoms/Button/Button.component';
import Container from '../../layout/Container/Container.component';
import Spacer from '../../layout/Spacer/Spacer.component';
import Hero from '../../molecules/Hero/Hero.component';
import './Header.style.scss';

const Header = ({ navItems }) => {
	return (
		<div className='header'>
			<Spacer top='med' />
			<Container>
				<Flex alignCenter justifyBetween>
					<Flex alignCenter>
						<Spacer right='lg'>
							<Logo />
						</Spacer>
						<Nav navItems={navItems} />
					</Flex>
					<Flex alignCenter>
						<Button text='Login' type='secondary' />
						<Button text='Sign Up' type='primary' />
					</Flex>
				</Flex>

				<Spacer top='xl' btm='xl'>
					<Hero />
				</Spacer>
			</Container>
		</div>
	);
};

export default Header;
