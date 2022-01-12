import React from 'react';
import FeatureSection from '../../organisms/FeatureSection/FeatureSection.component';

import Header from '../../organisms/Header/Header.component';
import MainSection from '../../organisms/MainSection/MainSection.component';
import './Home.style.scss';

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<MainSection />
			<FeatureSection />
		</React.Fragment>
	);
};

export default Home;
