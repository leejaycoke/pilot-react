# -*- coding: utf-8 -*-

from marshmallow import Schema, fields, validate, EXCLUDE


class Login(Schema):
    class Meta:
        unknown = EXCLUDE

    account = fields.Str(required=True,
                         error_messages={"required": "아이디를 입력해주세요."},
                         validate=[validate.Length(min=1, max=10, error="1~3글자로 입력해주세요")])
    password = fields.Str(required=True,
                          error_messages={"required": "비밀번호를 입력해주세요."})
