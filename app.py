# -*- coding: utf-8 -*-

import marshmallow
from marshmallow.exceptions import ValidationError
import sys
import os

from flask import Flask, make_response, json
from flask import request
from flask import jsonify

from model import Login
from uuid import uuid4

from exception import *

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

TOKEN = None
ACCOUNT = "devbadak"
PASSWORD = "1234"


@app.errorhandler(PilotException)
def handle_pilot_exception(e):
    response = {"code": e.code, "message": e.message}
    if e.errors:
        response["validate"] = e.errors

    return jsonify(response), 400


@app.route("/health", methods=["GET"])
def health():
    return "", 204


@app.route("/auth/login", methods=["POST"])
def login():
    try:
        model = Login().load(request.json)
    except ValidationError as e:
        raise InvalidRequest(e.messages)

    if model["account"] != ACCOUNT or model["password"] != PASSWORD:
        raise InvalidLogin()

    refresh_token()

    global TOKEN
    return jsonify({'accessToken': TOKEN})


@app.route("/v1/users/me", methods=["GET"])
def get_me():
    validate_token()
    return jsonify({"id": 1, "account": "foo", "name": "반려생활", "level": 1})


@app.route("/auth/logout", methods=["GET"])
def logout():
    refresh_token()
    return "", 204


def validate_token():
    authorization = request.headers.get("Authorization")
    if not authorization:
        raise Unauthorized()

    args = authorization.split("Bearer ")
    if len(args) != 2:
        raise Unauthorized()

    global TOKEN
    if args[1] != TOKEN:
        raise AccessDenied()


def refresh_token():
    global TOKEN
    TOKEN = uuid4().hex

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=int(os.environ.get("PORT", 5000)))