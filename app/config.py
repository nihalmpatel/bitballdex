# ForkDelta Backend
# https://github.com/forkdelta/backend-replacement
# Copyright (C) 2018, Arseniy Ivanov and ForkDelta Contributors
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

from os import environ

HTTP_PROVIDER_URL = environ.get("HTTP_PROVIDER_URL")
WS_PROVIDER_URL = environ.get("WS_PROVIDER_URL")

ALLOWED_ORIGIN_SUFFIXES = environ.get("ALLOWED_ORIGIN_SUFFIXES",
                                      "localhost").split(",")

#ED_CONTRACT_ADDR = '' # EthereumDEX Mainnet Contract
ED_CONTRACT_ADDR = '0x81b045629630a10f4713036cec006b82e832ead7' # DEX Ropsten Contract

with open('ethereumdex.abi.json') as f:
    import json
    ED_CONTRACT_ABI = json.load(f)

ED_WS_SERVERS = [
    "ws://62.77.152.225:8080/socket.io/?EIO=3&transport=websocket"
]

POSTGRES_HOST = "postgres"
POSTGRES_DB = environ.get("POSTGRES_DB")
POSTGRES_USER = environ.get("POSTGRES_USER")
POSTGRES_PASSWORD = environ.get("POSTGRES_PASSWORD")

HTTP_ORDERS_ENDPOINT_SECRET = environ.get("HTTP_ORDERS_ENDPOINT_SECRET")

FRONTEND_CONFIG_FILE = "http://62.77.152.225/config/main.json" # Ropsten Config

STOPPED_TOKENS = ()