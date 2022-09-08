#!/bin/bash

cd `dirname $0`

node -r esm ../tests/index.js
