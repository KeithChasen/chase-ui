import React from 'react';
import { CommonCssProps } from './interfaces';
import { getSpacings } from './utils';

export interface ButtonProps extends CommonCssProps {
	children: React.ReactNode;
	bg?: string;
	tColor?: string;
}

export const Button: React.FC<ButtonProps> = props => {
	const { children, bg, tColor } = props;
	const { margin, padding } = getSpacings(props);
	return (
		<button
			style={{
				backgroundColor: bg,
				color: tColor,
				border: 'none',
				...padding,
				...margin,
			}}
		>
			{children}
		</button>
	);
};
