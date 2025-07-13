import React, { createContext, useEffect, useMemo } from 'react';
import { hexToHsl } from '../colors/utils';

export interface ColorContextProps {
	// palette: string[];
	palette: {
		color: string;
		hsl: string;
	};
}

export const ColorContext = createContext<ColorContextProps>({
	// palette: [],
	palette: {
		color: '',
		hsl: '',
	},
});

interface ColorProviderProps {
	children: React.ReactNode;
	brandColors: string[];
}

export const ColorProvider = ({
	brandColors,
	children,
}: ColorProviderProps) => {
	const hsl = hexToHsl(brandColors[0]);
	const color = brandColors[0];

	const palette = {
		hsl,
		color,
	};

	// useMemo(
	// () => {
	// 	return [...brandColors];
	// };
	// , [brandColors]);

	useEffect(() => {}, [palette]);
	return <ColorContext value={{ palette }}>{children}</ColorContext>;
};
