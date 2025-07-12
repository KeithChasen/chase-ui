import React from 'react';
import { CommonCssProps } from './interfaces';
import { getSpacings } from './utils';
import { useColorPalette } from './context/useColorPalette';

export interface ButtonProps extends CommonCssProps {
	children: React.ReactNode;
	bgColor?: string;
	tColor?: string;
}

export const Button: React.FC<ButtonProps> = props => {
	const { children, bgColor, tColor } = props;
	const { margin, padding } = getSpacings(props);

	const colorContext = useColorPalette();

	console.log({ colorContext });

	return (
		<button
			style={{
				backgroundColor: bgColor,
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
