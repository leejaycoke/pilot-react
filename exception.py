# -*- coding: utf-8 -*-

from abc import ABCMeta, abstractproperty


class PilotException(Exception, metaclass=ABCMeta):

    errors = None

    def __init__(self, errors=None):
        self.errors = errors
        super().__init__(self.message)

    @abstractproperty
    def code(self):
        pass

    @abstractproperty
    def message(self):
        pass


class Unauthorized(PilotException):

    @property
    def code(self):
        return 401

    @property
    def message(self):
        return "로그인이 필요합니다."

    def __str__(self):
        return self.__class__.__name__


class AccessDenied(PilotException):

    @property
    def code(self):
        return 403

    @property
    def message(self):
        return "접근할 수 없습니다."


class InvalidLogin(PilotException):

    @property
    def code(self):
        return 400

    @property
    def message(self):
        return "아이디 혹은 비밀번호가 옳바르지 않습니다."


class InvalidRequest(PilotException):

    @property
    def code(self):
        return 400

    @property
    def message(self):
        return "입력값을 확인해주세요."
