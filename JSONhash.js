/* Copyright (c) 2014 Jonathan Herman - MIT License */
/* https://github.com/jdh11235/JSchunks */

var obj = {'one':1, 'two':[2, 'two']};

//store data in URL
location.hash = encodeURIComponent(JSON.stringify(obj));

//read data from URL
obj = JSON.parse(decodeURIComponent(location.hash).substring(1));
