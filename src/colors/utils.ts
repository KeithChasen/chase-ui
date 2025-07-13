import { ColorSchema } from '../context/ColorContext';
import type { HSLObject } from '../context/ColorContext';

export const hexToHsl = (hex: string): HSLObject => {
	if (hex.length < 7) {
		throw new Error('HEX should be in format #xxxxxx');
	}

	let r = parseInt(`0x${hex[1]}${hex[2]}`),
		g = parseInt(`0x${hex[3]}${hex[4]}`),
		b = parseInt(`0x${hex[5]}${hex[6]}`);

	r /= 255;
	g /= 255;
	b /= 255;

	let cmin = Math.min(r, g, b),
		cmax = Math.max(r, g, b),
		delta = cmax - cmin;

	let h = Math.round(getH(delta, cmax, r, g, b) * 60);

	if (h < 0) h += 360;

	let l = (cmax + cmin) / 2;
	let s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);

	return {
		h,
		s,
		l,
	};
};

export const getHSLString = (hsl: HSLObject): string => {
	const { h, s, l } = hsl;
	return `hsl(${h},${s}%,${l}%)`;
};

const getH = (delta: number, cmax: number, r: number, g: number, b: number) => {
	if (delta === 0) return 0;
	if (cmax === r) return ((g - b) / delta) % 6;
	else if (cmax === g) return (b - r) / delta + 2;
	return (r - g) / delta + 4;
};

export const generateSchema = (hsl: HSLObject, schema: ColorSchema) => {
	if (schema === ColorSchema.COMPLEMENTARY) {
		const newH = (hsl.h + 180) % 360;
		return {
			main: hsl,
			c: { h: newH, s: hsl.s, l: hsl.l },
		};
	}
};
