# HAB-MC
Mission control software for Space Concordia's High Altitude Balloon project,
based on NASA's Open MCT. This README is intended for project developers.

## Installation
1. Set the necessary environment variables. For development mode this can be 
done by copying `.env.example` to `.env` and running `export $(cat .env | xargs)`.
1. Install the required Python modules with `pip3 install -r requirements.txt`.
1. Install the required JavaScript libraries with `yarn`.


To run the server, execute the command `gunicorn server:app`. To run the
broadcast server, execute the command `python3 -m broadcast`. Make sure the
necessary environment variables are set prior to execution of either command.
