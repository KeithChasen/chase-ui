import React from 'react';

export type ButtonProps = {
	children: React.ReactNode;
	color?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, color }) => {
	return <button style={{ backgroundColor: color }}>{children}</button>;
};
