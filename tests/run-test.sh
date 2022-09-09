
#!/usr/bin/bash
cd `dirname $0`

clear

cd ..

sed -i "s/console.warn(\"\[SECURITY\] node-uuid: crypto not usable, falling back to insecure Math.random()\");//" "./node_modules/request/node_modules/node-uuid/uuid.js"

npm run runtest
