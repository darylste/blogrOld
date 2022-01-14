import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import Button from '../Button/Button.component';
import './Dropdown.style.scss';

const Dropdown = ({ navText, dropdownItems = [] }) => {
	const ref = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<React.Fragment>
			<Button text={navText} varient='nav' hasIcon onClicked={handleClick} />
			<ul
				ref={ref}
				className={classNames('dropdown', {
					isOpen: isOpen,
				})}
			>
				{dropdownItems.map((item) => (
					<li key={item.text} className='dropdown-item'>
						{item.text}
					</li>
				))}
			</ul>
		</React.Fragment>
	);
};

export default Dropdown;
