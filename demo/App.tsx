import React from 'react';
import { Button, useColorPalette } from 'chase-ui';

export const App = () => {
	const colorContext = useColorPalette();

	console.log({ colorContext });
	return (
		<div
			style={{
				background: colorContext.palette.primary,
				height: '100vh',
			}}
		>
			<h1
				style={{
					background: colorContext.palette.secondary,
					color: 'white',
				}}
			>
				UI Demo
			</h1>

			<Button
				bgColor={colorContext.palette.secondary}
				tColor={colorContext.palette.primary}
				p='12px'
				m='10px'
			>
				Test
			</Button>
		</div>
	);
};
