/**
 * Defines the structure of the incoming telemetry.
 * TODO send this from server.
 */

define(function () {
    'use strict';

    return function () {
        return {
            telemetry: [
                {
                    name: 'Latitude',
                    key: 'telem.latitude',
                    values: [
                        {
                            key: 'value',
                            name: 'Latitude',
                            units: '°',
                            format: 'float',
                            min: -90,
                            max: 90,
                            hints: {
                                range: true
                            }
                        },
                        {
                            key: 'timestamp',
                            name: 'Timestamp',
                            format: 'utc',
                            hints: {
                                domain: true
                            }
                        }
                    ]
                },
                {
                    name: 'Longitude',
                    key: 'telem.longitude',
                    values: [
                        {
                            key: 'value',
                            name: 'Longitude',
                            units: '°',
                            format: 'float',
                            min: -180,
                            max: 180,
                            hints: {
                                range: true
                            }
                        },
                        {
                            key: 'timestamp',
                            name: 'Timestamp',
                            format: 'utc',
                            hints: {
                                domain: true
                            }
                        }
                    ]
                },
                {
                    name: 'Bearing',
                    key: 'telem.bearing',
                    values: [
                        {
                            key: 'value',
                            name: 'Bearing',
                            units: '°',
                            format: 'int',
                            min: 0,
                            max: 360,
                            hints: {
                                range: true
                            }
                        },
                        {
                            key: 'timestamp',
                            name: 'Timestamp',
                            format: 'utc',
                            hints: {
                                domain: true
                            }
                        }
                    ]
                },
                {
                    name: 'Speed',
                    key: 'telem.speed',
                    values: [
                        {
                            key: 'value',
                            name: 'Speed',
                            units: 'km/h',
                            format: 'int',
                            min: 0,
                            max: 200,
                            hints: {
                                range: true
                            }
                        },
                        {
                            key: 'timestamp',
                            name: 'Timestamp',
                            format: 'utc',
                            hints: {
                                domain: true
                            }
                        }

                    ]
                },
                {
                    name: 'Altitude',
                    key: 'telem.altitude',
                    values: [
                        {
                            key: 'value',
                            name: 'Altitude',
                            units: 'm',
                            format: 'int',
                            min: 0,
                            max: 31000,
                            hints: {
                                range: true
                            }
                        },
                        {
                            key: 'timestamp',
                            name: 'Timestamp',
                            format: 'utc',
                            hints: {
                                domain: true
                            }
                        }

                    ]
                },
                {
                    name: 'Temperature',
                    key: 'telem.temperature',
                    values: [
                        {
                            key: 'value',
                            name: 'Temperature',
                            units: '°C',
                            format: 'float',
                            min: -40,
                            max: 40,
                            hints: {
                                range: true
                            }
                        },
                        {
                            key: 'timestamp',
                            name: 'Timestamp',
                            format: 'utc',
                            hints: {
                                domain: true
                            }
                        }

                    ]
                },
                {
                    name: 'Pressure',
                    key: 'telem.pressure',
                    values: [
                        {
                            key: 'value',
                            name: 'Pressure',
                            units: 'Pa',
                            format: 'int',
                            min: 0,
                            max: 110000,
                            hints: {
                                range: true
                            }
                        },
                        {
                            key: 'timestamp',
                            name: 'Timestamp',
                            format: 'utc',
                            hints: {
                                domain: true
                            }
                        }
                    ]
                }
            ]
        };
    }
});
