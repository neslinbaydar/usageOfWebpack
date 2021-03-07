# usageOfWebpack

This is a simple explanation for Webpack.

**Webpack is a static module bundler.🚀**

# Webpack'in sağladığı bazı avantajlar :

🎯 Webpack,modern Javascript uygulamaları için üretilen bir modül paketleyicisidir.

🎯 Webpack sayesinde bir projede çok sayıda bulunan js dosyalarının birbirine importundan veya exportundan oluşturarak tek bir js dosyası haline getiririz.

🎯 Ve biz bu js dosyalarını index.html'e çevirdiğimiz zaman Webpack burada performansı arttırarak aslında istediğimiz zaman ```daha hızlı yükleme``` işlemini gerçekleştirecek.

🎯 Yani webpack ile ```performans kaybı önleniyor```,bu işlemler çok daha ```düzenli bir şekilde``` ve ```tek bir dosya halinde``` oluşturulabiliyor.

# Modüllerin yüklenmesi :

🎯 Öncelikle projemizde terminali açıp ```npm init``` komutunu çalıştırdığımızda ```package.json``` dosyamız oluşur.

🎯 Ve Webpack'in babel ile iletişime geçebilmesi için gerekli modülleri ```npm install @babel/core```,async ve await'in çalışması için ```npm install @babel/polyfill```, ES6'dan
sonra gelen standartları yüklemek için ```npm install @babel/preset-env``` şeklinde bir modül, Webpack ile babel arasındaki ilişi için ```npm install babel-loader``` komutunu
çalıştırırız.

🎯 Son olarak Webpack'i indirmek için command-line'dan kullanabilmemiz gerekir.Bu sebeple ```Webpack CLI``` ve Webpack'in kendisini **npm install webpack-cli webpack --save-dev** komutuyla indirmeliyiz.

# Peki npm run build ne işe yarıyor?

🎯Oluşturduğumuz package.json dosyamıza projedeki js dosyalarını bundles haline getirmesi için ```"build":"webpack --watch"``` scripti ekleriz.Ve bu sayede artık webpack'imizi kullanabiliriz.

🎯 ```npm run build``` komutu ile webpack --watch çalışacak ve biz bu projede **entry'e** index.js dediğimiz için bu dosyaya bakacak ve bütün JavaScript dosyalarını bundle'layarak bundles altındaki bundle.js dosyasını oluşturacak.

🎯 Bu sayede oluşan bu **bundles.js** dosyası projemizdeki JavaScript dosyalarımızı tek bir dosya haline çevirecek.Ve bir ```dependency graph (bağımlılık grafiği)```ortaya çıkaracak. 

[Click for more information🔎](https://webpack.js.org/)




