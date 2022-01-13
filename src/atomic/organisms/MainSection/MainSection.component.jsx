import React from 'react';
import Typography from '../../atoms/Typography/Typography.component';
import Spacer from '../../layout/Spacer/Spacer.component';
import Grid from '../../layout/Grid/Grid.component';

import './MainSection.style.scss';
import Container from '../../layout/Container/Container.component';
import classNames from 'classnames';

const MainSection = ({ imgUrl, title, isReversed = false, content }) => {
	const alignment = isReversed ? 'left' : 'right';

	return (
		<React.Fragment>
			<Spacer top='sm' btm='sm'>
				<Container
					className={classNames({
						section: true,
						sectionReversed: isReversed,
					})}
					alignment={alignment}
					style={{
						backgroundImage: `url('${imgUrl}')`,
					}}
				>
					{title && (
						<Spacer top='lg' btm='lg'>
							<Typography type='title' alignment='center'>
								{title}
							</Typography>
						</Spacer>
					)}

					<Grid cols='2' isReversed={isReversed}>
						<div>
							{isReversed && <Spacer top='xl' />}
							{content}
						</div>
					</Grid>
				</Container>
			</Spacer>
		</React.Fragment>
	);
};

export default MainSection;
