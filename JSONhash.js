var obj = {'one':1, 'two':[2, 'two']};

//store data in URL
location.hash = JSON.stringify(obj);

//read data from URL
obj = JSON.parse(location.hash.substring(1));
