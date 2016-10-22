# encoding: utf-8

from .base import DEV_MODE

if DEV_MODE:
    from .dev import *
else:
    from .prod import *
