cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/org.solderzzc.base64imagesaverplugin/www/Base64ImageSaverPlugin.js",
        "id": "org.solderzzc.base64imagesaverplugin.Base64ImageSaverPlugin",
        "clobbers": [
            "window.Base64ImageSaverPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.0",
    "org.solderzzc.base64imagesaverplugin": "0.6.0"
}
// BOTTOM OF METADATA
});