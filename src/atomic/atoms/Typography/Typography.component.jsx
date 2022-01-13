import React from 'react';
import classNames from 'classnames';

import './Typography.style.scss';

const Typography = ({ type, color = 'blue', alignment = 'left', children }) => {
	switch (type) {
		case 'hero-title':
			return (
				<h1 className={classNames('heroTitle', `text-align-${alignment}`)}>
					{children}
				</h1>
			);
		case 'hero-text':
			return (
				<p className={classNames('heroText', `text-align-${alignment}`)}>
					{children}
				</p>
			);
		case 'title':
			return (
				<h2
					className={classNames(
						'title',
						`text-${color}`,
						`text-align-${alignment}`,
					)}
				>
					{children}
				</h2>
			);
		case 'subtitle':
			return (
				<h3
					className={classNames(
						'subtitle',
						`text-${color}`,
						`text-align-${alignment}`,
					)}
				>
					{children}
				</h3>
			);
		case 'body':
			return (
				<p
					className={classNames(
						'body',
						`text-${color}`,
						`text-align-${alignment}`,
					)}
				>
					{children}
				</p>
			);
		case 'footer-title':
			return <p className='footer-title'>{children}</p>;
		default:
			return null;
	}
};

export default Typography;
