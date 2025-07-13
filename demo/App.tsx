import React from 'react';
import { Button, useColorPalette } from 'chase-ui';

export const App = () => {
	const colorContext = useColorPalette();

	console.log({ colorContext });
	return (
		<div>
			<h1>UI Demo</h1>
			<Button
				bgColor={colorContext.palette.color}
				pb='12px'
				pr='10px'
				ml='20px'
				mt='40px'
			>
				1st button
			</Button>

			<Button
				bgColor={colorContext.palette.hsl}
				pb='12px'
				pr='10px'
				ml='20px'
				mt='40px'
			>
				2nd button
			</Button>
		</div>
	);
};
