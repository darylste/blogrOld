import React from 'react';
import Button from '../../atoms/button/button.component';
import Flex from '../../layout/Flex/Flex.component';

import './Button.style.scss';

const ButtonGroup = (props) => {
	<Flex alignCenter>{props.children}</Flex>;
};
