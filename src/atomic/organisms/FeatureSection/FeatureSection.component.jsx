import React from 'react';

import Container from '../../layout/Container/Container.component';
import Grid from '../../layout/Grid/Grid.component';
import Typography from '../../atoms/Typography/Typography.component';
import Spacer from '../../layout/Spacer/Spacer.component';
import Flex from '../../layout/Flex/Flex.component';
import PhoneImg from '../../../images/illustration-phones.svg';
import './FeatureSection.style.scss';

const FeatureSection = () => {
	return (
		<div className='feature-section'>
			<Container>
				<Grid className='feature-section' cols='2'>
					<div>
						<img className='phone-img' src={PhoneImg} alt='phones' />
					</div>
					<Flex className='feature-textbox' flexColumn justifyCenter>
						<Spacer right='lg'>
							<Typography type='title' color='white'>
								State of the Art Infrastructure
							</Typography>
							<Spacer top='sm' />
							<Typography type='body' color='white'>
								With reliability and speed in mind, worldwide data centers
								provide the backbone for ultra-fast connectivity. This ensures
								your site will load instantly, no matter where your readers are,
								keeping your site competitive.
							</Typography>
						</Spacer>
					</Flex>
				</Grid>
			</Container>
		</div>
	);
};

export default FeatureSection;
