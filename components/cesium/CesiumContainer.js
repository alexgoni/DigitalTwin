import { useEffect } from "react";
import defaultCamera from "./Camera";
import defaultViewer from "./DefaultViewer";
import * as Cesium from "cesium";

export default function CesiumContainer({ setMainStart }) {
  useEffect(() => {
    const viewer = defaultViewer();
    viewer.scene.globe.depthTestAgainstTerrain = true;

    defaultCamera(viewer, [127.026941, 35.8404738, 100], [45, -30, 0]);

    const cartesianPosition = Cesium.Cartesian3.fromDegrees(
      127.028941,
      35.8414738,
      10,
    );

    const greenhouse = viewer.entities.add({
      position: cartesianPosition,
      model: {
        uri: "/glb/greenhouse-transformed.glb",
        scale: 18,
        color: Cesium.Color.WHITE,
      },
    });

    const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

    handler.setInputAction((movement) => {
      const pickedObject = viewer.scene.pick(movement.endPosition);

      if (Cesium.defined(pickedObject) && pickedObject.id === greenhouse) {
        greenhouse.model.color = Cesium.Color.fromAlpha(
          Cesium.Color.YELLOW,
          3.0,
        );
      } else {
        greenhouse.model.color = Cesium.Color.fromAlpha(
          Cesium.Color.WHITE,
          1.0,
        );
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    handler.setInputAction((click) => {
      const pickedObject = viewer.scene.pick(click.position);

      if (Cesium.defined(pickedObject) && pickedObject.id === greenhouse) {
        setMainStart(true);
        viewer.destroy();
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }, []);

  return (
    <div
      id="cesiumContainer"
      className="m-0 h-full w-full overflow-hidden p-0"
    ></div>
  );
}
