import React from 'react';

import Header from '../../organisms/Header/Header.component';
import MainSection from '../../organisms/MainSection/MainSection.component';
import './Home.style.scss';

const Home = () => {
	return (
		<React.Fragment>
			<Header />

			<MainSection />
		</React.Fragment>
	);
};

export default Home;
