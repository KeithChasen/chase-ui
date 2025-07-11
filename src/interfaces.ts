export interface MarginProps {
	m?: string;
	mt?: string;
	mb?: string;
	ml?: string;
	mr?: string;
}

export interface PaddingProps {
	p?: string;
	pt?: string; // 24px, 20%
	pb?: string;
	pl?: string;
	pr?: string;
}

export interface CommonCssProps extends MarginProps, PaddingProps {}
