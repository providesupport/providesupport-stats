#!/bin/bash

cd `dirname $0`

npm run build
sh run_tests.sh