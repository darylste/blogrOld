import React from 'react';

import Header from '../../organisms/Header/Header.component';
import FeatureSection from '../../organisms/FeatureSection/FeatureSection.component';
import MainSection from '../../organisms/MainSection/MainSection.component';
import GraphImg from '../../../images/graph-img.svg';
import LaptopImg from '../../../images/laptop-img.svg';
import Footer from '../../organisms/Footer/Footer.component';
import { labels, navItems } from './Home.labels';
import './Home.style.scss';

const Home = () => {
	return (
		<React.Fragment>
			<Header navItems={navItems} />
			<MainSection
				title='Designed for the future'
				imgUrl={GraphImg}
				content={labels.intro}
			/>
			<FeatureSection />
			<MainSection isReversed imgUrl={LaptopImg} content={labels.features} />
			<Footer navItems={navItems} />
		</React.Fragment>
	);
};

export default Home;
