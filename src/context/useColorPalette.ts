import { useContext } from 'react';
import { ColorContext, ColorContextProps } from './ColorContext';

export const useColorPalette = (): ColorContextProps => {
	const colorContext = useContext(ColorContext);
	return colorContext ?? null;
};
