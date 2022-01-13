import React from 'react';
import Logo from '../../atoms/Logo/Logo.component';
import Typography from '../../atoms/Typography/Typography.component';
import Container from '../../layout/Container/Container.component';
import Grid from '../../layout/Grid/Grid.component';
import Spacer from '../../layout/Spacer/Spacer.component';
import FooterNav from '../../molecules/FooterNav/FooterNav.component';

import './Footer.style.scss';

const Footer = () => {
	return (
		<React.Fragment>
			<Spacer top='lg' />
			<footer className='footer'>
				<Container>
					<Spacer top='lg' />
					<Grid cols='4'>
						<Logo />
						<div>
							<Typography type='footer-title'>Product</Typography>
							<Spacer top='sm' btm='med'>
								<FooterNav />
							</Spacer>
						</div>
					</Grid>
				</Container>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
