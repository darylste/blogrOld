import React from 'react';
import FeatureSection from '../../organisms/FeatureSection/FeatureSection.component';
import Header from '../../organisms/Header/Header.component';
import MainSection from '../../organisms/MainSection/MainSection.component';
import GraphImg from '../../../images/graph-img.svg';
import LaptopImg from '../../../images/laptop-img.svg';
import labels from './Home.labels';
import './Home.style.scss';

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<MainSection
				title='Designed for the future'
				imgUrl={GraphImg}
				content={labels.intro}
			/>
			<FeatureSection />
			<MainSection isReversed imgUrl={LaptopImg} content={labels.features} />
		</React.Fragment>
	);
};

export default Home;
