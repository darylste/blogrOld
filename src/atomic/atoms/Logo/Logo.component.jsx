import React from 'react';
import LogoImg from '../../../images/logo.svg';
import './Logo.style.scss';

const Logo = () => {
	return <img className='logo-img' src={LogoImg} alt='logo' />;
};

export default Logo;
