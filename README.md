*small note. the original install for webpack encountered a breaking change big css-loader. "In css-loader 3.0.0, there was a breaking change with the localIdentName configuration option:" The error message looked like 

ERROR in ./src/index.css (./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/index.css)
Module build failed (from ./node_modules/css-loader/dist/cjs.js):
ValidationError: Invalid options object. CSS Loader has been initialized using an options object that does not match the API schema.
 - options has an unknown property 'localIdentName'. These properties are valid:
   object { url?, import?, modules?, sourceMap?, importLoaders?, localsConvention?, onlyLocals?, esModule? }
    at validate (/vagrant/seebank-webpack/node_modules/css-loader/node_modules/schema-utils/dist/validate.js:85:11)
    at Object.loader (/vagrant/seebank-webpack/node_modules/css-loader/dist/index.js:34:28)
 @ ./src/index.css 2:26-152 22:4-35:5 25:25-151
 @ ./src/index.js

 To fix this (maybe/hopefully) i changed the webconfig.js file from (based on notes from https://github.com/rails/webpacker/issues/2197)

 options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }

to  options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },	
                        }

after i did this, it successfully compiled, while still having minor separate issues over brower and browerlist nomenclatur differences between the json and webconfig file. but the above fix wasn't the full 'hack' method that many articles cited - and so i don't know exactly if what i did will cause issues later. the hack included this: https://github.com/zeit/next-plugins/issues/392#issuecomment-475845330. 

>personal notes. as I suspected, the reason my app won't run on the default port 8080 that webpack creates, is only because of limitations on my VM (which were set by lighthouse). It is working, when i run it on my local machine. so far attempts to specify an alternative port 3000 in the json or webpack.config file have not worked. but at least i know it's a separate issue, and not something inherintly wrong with the code here in the webpack files.
