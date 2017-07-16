"""Gunicorn configuration file."""
import os

PORT = os.environ.get("PORT", 5000)

bind = ['0.0.0.0:{port}'.format(port=PORT)]
workers = 2
worker_class = 'geventwebsocket.gunicorn.workers.GeventWebSocketWorker'
proc_name = 'HAB-MC'
