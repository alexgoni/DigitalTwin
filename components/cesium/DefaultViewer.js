import * as Cesium from "cesium";

export default function defaultViewer() {
  const viewer = new Cesium.Viewer("cesiumContainer", {
    selectionIndicator: false,
    infoBox: false,
    timeline: false,
    animation: false,
    shouldAnimate: false,
    navigationHelpButton: false,
    geocoder: false,
    baseLayerPicker: false,
  });

  // 최대 확대 제한
  viewer.scene.screenSpaceCameraController.maximumZoomDistance = 6378137 * 5;

  // double click event 지우기
  viewer.screenSpaceEventHandler.removeInputAction(
    Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK,
  );

  // Cesium 하단 로고 지우기
  const cesiumViewerBottom = document.querySelector(".cesium-viewer-bottom");
  if (cesiumViewerBottom) {
    cesiumViewerBottom.remove();
  }

  return viewer;
}
