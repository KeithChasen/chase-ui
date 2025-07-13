import React from 'react';
import { Button, useColorPalette } from 'chase-ui';

export const App = () => {
	const colorContext = useColorPalette();

	console.log({ colorContext });
	return (
		<div
			style={{
				background: 'grey',
				height: '100vh',
			}}
		>
			<h1
				style={{
					background: 'black',
					color: 'white',
				}}
			>
				UI Demo
			</h1>

			<Button bgColor={colorContext.palette.hsl} p='12px' m='10px'>
				Test
			</Button>
		</div>
	);
};
