/**
 * Provides real time telemetry data from the server over a WebSocket connection.
 */

/**
 * Returns the base url for websocket connections.
 */
function wsBaseUrl() {
    'use strict';

    var scheme = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    return scheme + '//' + window.location.host;
}

define(function () {
    'use strict';

    // WebSocket to receive telemetry data over.
    var wsUrl = wsBaseUrl() + '/api/telemetry';
    var socket = new WebSocket(wsUrl);

    // Keys are domain object keys, values are sets of callbacks that are
    // invoked when a telemetry datum is received.
    var subscribers = new Map();

    socket.onmessage = function (event) {
        var datum = JSON.parse(event.data);
        console.log(event.data);
        if (subscribers.has(datum.id)) {
            var callbacks = subscribers.get(datum.id);
            callbacks.forEach(function (c) {
                c(datum);
            });
        }
    };

    return {
        supportsSubscribe: function (domainObject) {
            return domainObject.type === 'telemetry-plot';
        },

        subscribe: function (domainObject, callback, options) {
            var key = domainObject.identifier.key;

            if (!subscribers.has(key)) {
                subscribers.set(key, new Set());
            }

            var callbacks = subscribers.get(key);
            callbacks.add(callback);

            return function unsubscribe() {
                var key = domainObject.identifier.key;
                var callbacks = subscribers.get(key);
                callbacks.delete(callback);

                if (!callbacks.size) {
                    subscribers.delete(key);
                }
            }
        }
    };
});
