# maya

npm install<br/>
npm run build
<br/>
<h3>Dev</h3>
npm start <- this will run temp nodemon local testing server
node server/index.js <- this will run a temp live server

<h3>Production</h3>
pm2 start server/index.js <- this will run a permanent server<br/>
pm2 restart all <- use this to restart after any changes
pm2 stop all

http => PORT 3000
