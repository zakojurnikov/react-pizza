import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
	return (
		<ContentLoader
			speed={2}
			width={280}
			height={460}
			viewBox="0 0 280 460"
			backgroundColor="#f0f0f0"
			foregroundColor="#dbdbdb"
			className="pizza-block"
		>
			<circle cx="120" cy="120" r="120" />
			<rect x="0" y="250" rx="6" ry="6" width="240" height="20" />
			<rect x="0" y="289" rx="12" ry="12" width="240" height="80" />
			<rect x="115" y="380" rx="12" ry="12" width="125" height="40" />
			<rect x="0" y="388" rx="6" ry="6" width="60" height="25" />
		</ContentLoader>
	);
}

export default LoadingBlock;
