import React, { createContext, useEffect, useMemo } from 'react';
import { generateSchema, getHSLString, hexToHsl } from '../colors/utils';

export type HSLObject = { h: number; s: number; l: number };

export interface ColorContextProps {
	// palette: string[];
	palette: {
		// color: string;
		// hsl: HSLObject;
		primary: string;
		secondary: string;
	};
}

export const ColorContext = createContext<ColorContextProps>({
	// palette: [],
	palette: {
		// color: '',
		// hsl: { h: 0, s: 0, l: 0 },
		primary: '',
		secondary: '',
	},
});

export enum ColorSchema {
	COMPLEMENTARY = 'COMPLEMENTARY',
	SPLIT_COMPLEMENTARY = 'SPLIT_COMPLEMENTARY',
	TRIADIC = 'TRIADIC',
	TETRADIC = 'TETRADIC',
	ANALOGOUS = 'ANALOGOUS',
	MONOCHROMATIC = 'MONOCHROMATIC',
}

interface ColorProviderProps {
	children: React.ReactNode;
	brandColors: string[];
	schema: ColorSchema;
}

export const ColorProvider = ({
	brandColors,
	schema = ColorSchema.COMPLEMENTARY,
	children,
}: ColorProviderProps) => {
	const hsl: HSLObject = hexToHsl(brandColors[0]);
	const color = brandColors[0];

	const brandSchema = generateSchema(hsl, schema);

	const palette = {
		// hsl,
		// color,
		primary: brandSchema?.main ? getHSLString(brandSchema?.main) : '',
		secondary: brandSchema?.c ? getHSLString(brandSchema?.c) : '',
	};

	// useMemo(
	// () => {
	// 	return [...brandColors];
	// };
	// , [brandColors]);

	useEffect(() => {}, [palette]);
	return <ColorContext value={{ palette }}>{children}</ColorContext>;
};
