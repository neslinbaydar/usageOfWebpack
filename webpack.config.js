var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ["@babel/polyfill","./src/index.js"], //src'nin içindeki index.js'e bak diyoruz.Ve webpack'te asyn/await yapısını kullanmak için entry şeklinde babel/polyfill ekliyoruz.
    output: {  //buraya baktığımız zaman bütün js dosyalarımız tek bir js dosyası haline gelecek.
        path: path.resolve(__dirname, 'bundles'),  //__dirname bilgisayardaki yolunu veriyor ve onun altında bundles oluşturacak.
        filename: 'bundle.js'  //ve bütün dosyalarımızın bundle hali bundle.js şeklinde oluşacak
    },
    mode: "development",
    
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: { //babel kontrollerini buradaki use kısmından yapıyoruz
                loader: 'babel-loader',  ///'babel-loader' modülü,webpack'in babel ile iletişime geçmesini sağlar.
                options: {
                  presets: ["@babel/preset-env"] //webpack'e,babel/preset-env'e göre yazdığımız kodları değiştirmesini söylüyoruz
                }
              }
            }
          ]
    }
};