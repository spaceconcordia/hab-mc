# HAB-MC
Mission control software for Space Concordia's High Altitude Balloon project,
based on NASA's Open MCT. This README is intended for project developers.

## Installation
1. Install the required Python modules with `pip3 install -r requirements.txt`.
1. Install the required JavaScript libraries with `yarn install
--modules-folder hab_mc/static/node_modules`.

To run the server, execute the command `python3 app.py runserver`. This will
launch the server in 'dev' mode. Pass a `-c,--config` option to change to 'test'
or 'prod' mode. `python3 app.py` simply displays a help page.