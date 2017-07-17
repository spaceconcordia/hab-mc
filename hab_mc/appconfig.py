"""Defines a factory function for creating Flask objects based on configuration
details."""
from flask import Flask, request, render_template
from config import config_lookup
from .exceptions import ConfigError


def create_app(config_name):
    """Factory function for creating and configuring a Flask object based on the
    provided configuration name. Raise a ConfigError exception if invalid
    configuration name specified."""
    app = Flask('hab_mc')
    try:
        app.config.from_object(config_lookup[config_name])
    except KeyError as e:
        raise ConfigError(e)

    return app
