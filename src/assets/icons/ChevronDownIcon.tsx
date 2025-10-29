import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDownIcon = ({
  color,
  size,
}: {
  color?: string;
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7l6 6 6-6"
    />
  </Svg>
);
export default ChevronDownIcon;
