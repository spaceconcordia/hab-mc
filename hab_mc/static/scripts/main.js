/**
 * Launches the Open MCT application.
 */

function wsBaseUrl() {
    'use strict';

    var scheme = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    return scheme + '//' + window.location.host;
}

require.config({
    baseUrl: 'scripts',
    paths: {
        'openmct': '../node_modules/openmct/dist/openmct'
    }
});

require(['openmct'], function (openmct) {
    'use strict';

    // Create WebSocket to receive telemetry data over.
    var telemUrl = wsBaseUrl() + '/telemetry';
    var socket = new WebSocket(telemUrl);

    openmct.setAssetPath('/static/node_modules/openmct/dist'); //TODO
    openmct.install(openmct.plugins.LocalStorage());
    openmct.install(openmct.plugins.UTCTimeSystem());
    openmct.install(openmct.plugins.Espresso());

    openmct.start();
});
