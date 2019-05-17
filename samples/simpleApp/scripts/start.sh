npx pm2 start seed-node-server
npx pm2 start monitor-server
npx pm2 start http-server -- ./node_modules/monitor-client -o

node index.js
