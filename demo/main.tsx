import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ColorProvider } from 'chase-ui';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ColorProvider brandColors={['#ff0000']}>
		<App />
	</ColorProvider>
);
