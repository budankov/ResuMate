import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const ChevronLeftIcon = ({
  color,
  size,
}: {
  color?: string;
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <G id="Arrow / Chevron_Left">
      <Path
        id="Vector"
        d="M15 19L8 12L15 5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ChevronLeftIcon;
