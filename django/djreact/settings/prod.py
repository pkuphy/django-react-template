# encoding: utf-8

from base import *

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/prod/',  # end with slash
        'STATS_FILE': os.path.join(REACT_DIR, 'webpack-stats-prod.json'),
    }
}
