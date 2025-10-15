import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const ChevronRightIcon = ({
  color,
  size,
}: {
  color?: string;
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <G id="Arrow / Chevron_Right">
      <Path
        id="Vector"
        d="M9 5L16 12L9 19"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ChevronRightIcon;
