import React from 'react';
import Typography from '../../atoms/Typography/Typography.component';
import Spacer from '../../layout/Spacer/Spacer.component';
import Grid from '../../layout/Grid/Grid.component';

import './MainSection.style.scss';
import Container from '../../layout/Container/Container.component';

const MainSection = () => {
	return (
		<React.Fragment>
			<Spacer top='sm' btm='sm'>
				<Container className='main-section' alignment='right'>
					<Spacer top='lg' btm='lg'>
						<Typography type='title' alignment='center'>
							Designed for the future
						</Typography>
					</Spacer>
					<Grid cols='2'>
						<div>
							<Typography type='subtitle'>
								Introducing an extensible editor
							</Typography>

							<Spacer top='xs' btm='med' right='med'>
								<Typography type='body'>
									Blogr features an exceedingly intuitive interface which lets
									you focus on one thing: creating content. The editor supports
									management of multiple blogs and allows easy manipulation of
									embeds such as images, videos, and Markdown. Extensibility
									with plugins and themes provide easy ways to add functionality
									or change the looks of a blog.
								</Typography>
							</Spacer>

							<Typography type='subtitle'>Robust content management</Typography>
							<Spacer top='xs' btm='xl' right='med'>
								<Typography type='body'>
									Flexible content management enables users to easily move
									through posts. Increase the usability of your blog by adding
									customized categories, sections, format, or flow. With this
									functionality, you&apos;re in full control.
								</Typography>
							</Spacer>
						</div>
					</Grid>
				</Container>
			</Spacer>
		</React.Fragment>
	);
};

export default MainSection;
