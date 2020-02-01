
npm i

npm start (from root)

 > webpack output is served from /
 > Content not from webpack is served from /vagrant/seebank-webpack/public


Project is running at http://localhost:3000/ ---> changed from default port8080

this is currently changed through a key in the webpack.config file. changing it in the json alone, via PORT:3030 etc does not work because of the compiling at work. 



Note: webpack-dev-server will serve the bundle.js directly and will not create a local file inside the public folder to speed up the page loading.

You can manually create the bundle.js if required by executing the following command
npm run build