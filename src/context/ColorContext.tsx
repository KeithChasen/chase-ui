import React, { createContext, useEffect, useMemo } from 'react';

export interface ColorContextProps {
	palette: string[];
}

export const ColorContext = createContext<ColorContextProps>({
	palette: [],
});

interface ColorProviderProps {
	children: React.ReactNode;
	brandColors: string[];
}

export const ColorProvider = ({
	brandColors,
	children,
}: ColorProviderProps) => {
	const palette = useMemo(() => {
		return [...brandColors];
	}, [brandColors]);

	useEffect(() => {}, [palette]);
	return <ColorContext value={{ palette }}>{children}</ColorContext>;
};
