import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

interface ChartProps {
  width?: number;
  height?: number;
  data?: number[];
}

export const Chart: React.FC<ChartProps> = ({
  width = 170,
  height = 200,
  data = [60, 40, 60, 40, 100 ],
}) => {
  const chartWidth = width;
  const chartHeight = height;
  const maxValue = Math.max(...data);

  // Calculate points for the line graph
  const points = data.map((value, index) => ({
    x: (index * chartWidth) / (data.length - 1),
    y: height - ((value / maxValue) * chartHeight),
  }));

  // Create smooth curve path
  const smoothLine = (points: { x: number; y: number }[]) => {
    if (points.length < 2) return '';

    const firstPoint = points[0];
    let path = `M ${firstPoint.x} ${firstPoint.y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      
      // Calculate control points for the curve
      const controlX1 = current.x + (next.x - current.x) / 2;
      const controlX2 = current.x + (next.x - current.x) / 2;
      
      path += ` C ${controlX1} ${current.y} ${controlX2} ${next.y} ${next.x} ${next.y}`;
    }

    return path;
  };

  const linePath = smoothLine(points);
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;

  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      <Svg width="100%" height="100%" >
        <Defs>
          <LinearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#ff3b1f" stopOpacity="0.4" />
            <Stop offset="1" stopColor="#ff3b1f" stopOpacity="0.1" />
          </LinearGradient>
        </Defs>

        {/* Area shadow */}
        <Path
          d={areaPath}
          fill="url(#areaGradient)"
        />

        {/* Main line */}
        <Path
          d={linePath}
          stroke="#ff3b1f"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </Svg>
    </View>
  );
}; 