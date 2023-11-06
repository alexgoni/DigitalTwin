import * as Cesium from "cesium";

export default function defaultCamera(viewer, position, orientation = []) {
  // position 배열로 받음
  const [longitude, latitude, height] = position;

  const cartesianPosition = Cesium.Cartesian3.fromDegrees(
    longitude,
    latitude,
    height,
  );

  // orientation 배열로 받음
  const [heading = 0, pitch = -90, roll = 0] = orientation;

  const transformedOrientation = {
    heading: Cesium.Math.toRadians(heading),
    pitch: Cesium.Math.toRadians(pitch),
    roll: roll,
  };

  const options = {
    destination: cartesianPosition,
    orientation: transformedOrientation,
  };

  viewer.scene.camera.setView(options);
}
