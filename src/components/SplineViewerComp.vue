<template>
  <div class="spline-viewer-wrapper">
    <spline-viewer :url="splineUrl"></spline-viewer>
  </div>
</template>

<script>
import SplineViewer from '@splinetool/viewer/build/spline-viewer';

export default {
  name: 'SplineViewerComponent',
  components: { SplineViewer }, // Register the SplineViewer component
  data() {
    return {
      splineUrl: 'https://prod.spline.design/lzPWUC6U7rd10gRA/scene.splinecode'
    };
  }
};
</script>

<style>
.spline-viewer-wrapper {
  width: 100%;
  height: 500px;
}
</style>