import { CommonCssProps } from './interfaces';

type SpacingProps = {
	all?: string;
	left?: string;
	right?: string;
	top?: string;
	bottom?: string;
};

export enum SpacingTypes {
	MARGIN = 'margin',
	PADDING = 'padding',
}

export type SpacingReturnType = Record<string, string>;
export type SpacingsReturnType = {
	margin: SpacingReturnType;
	padding: SpacingReturnType;
};

export const getSpacing = (
	{ all, left, right, top, bottom }: SpacingProps,
	type: SpacingTypes
): SpacingReturnType => {
	if (all) return { [type]: all };

	return {
		...(left && { [`${type}Left`]: left }),
		...(right && { [`${type}Right`]: right }),
		...(top && { [`${type}Top`]: top }),
		...(bottom && { [`${type}Bottom`]: bottom }),
	};
};

export const getSpacings = (props: CommonCssProps): SpacingsReturnType => {
	const { p, pl, pr, pb, pt, m, ml, mr, mt, mb } = props;
	const padding = getSpacing(
		{
			all: p,
			left: pl,
			right: pr,
			bottom: pb,
			top: pt,
		},
		SpacingTypes.PADDING
	);
	const margin = getSpacing(
		{
			all: m,
			left: ml,
			right: mr,
			bottom: mb,
			top: mt,
		},
		SpacingTypes.MARGIN
	);
	return { padding, margin };
};
