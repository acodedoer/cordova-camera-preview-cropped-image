cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-camera-preview.CameraPreview",
      "file": "plugins/cordova-plugin-camera-preview/www/CameraPreview.js",
      "pluginId": "cordova-plugin-camera-preview",
      "clobbers": [
        "CameraPreview"
      ]
    },
    {
      "id": "cordova-plugin-k-imagecropper.imagecropper",
      "file": "plugins/cordova-plugin-k-imagecropper/www/imagecropper.js",
      "pluginId": "cordova-plugin-k-imagecropper",
      "clobbers": [
        "window.plugins.k.imagecropper"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-camera-preview": "0.11.2",
    "cordova-plugin-k-imagecropper": "1.2.0"
  };
});