import React from "react";
import { Canvas, useImage, Image } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
const App = () => {
  const { width, height } = useWindowDimensions();

  const bg = useImage(
    require("../../assets/images/sprites/background-day.png")
  );
  const bird = useImage(
    require("../../assets/images/sprites/yellowbird-upflap.png")
  );

  const r = width * 0.33;
  return (
    <Canvas style={{ width, height }}>
      <Image width={width} height={height} fit={"cover"} image={bg} />

      <Image
        image={bird}
        x={width / 5}
        y={height / 2}
        width={64}
        height={48}
        fit={"contain"}
      />
    </Canvas>
  );
};
export default App;
