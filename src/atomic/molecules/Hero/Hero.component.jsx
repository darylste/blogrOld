import React from 'react';
import Typography from '../../atoms/Typography/Typography.component';
import Spacer from '../../layout/Spacer/Spacer.component';
import Flex from '../../layout/Flex/Flex.component';
import Button from '../../atoms/Button/Button.component';

import './Hero.style.scss';

const Hero = () => {
	return (
		<div className='hero'>
			<Typography type='hero-title'>A modern publishing platform</Typography>
			<Spacer top='sm' btm='sm'>
				<Typography type='hero-text'>
					Grow your audience and build your online brand
				</Typography>
			</Spacer>
			<Flex alignCenter justifyCenter>
				<Button text='Start for Free' type='primary' size='sm' />
				<Spacer left='xs' />
				<Button text='Learn More' type='outline' size='sm' />
			</Flex>
		</div>
	);
};

export default Hero;
