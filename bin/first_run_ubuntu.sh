#!/bin/bash

cd $(dirname $0)

# check if nodeJS installed, install if not (version 12.x)
type node >/dev/null 2>&1 || { 
  curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
  sudo apt-get install -y nodejs
}
# install dependencies
npm install
