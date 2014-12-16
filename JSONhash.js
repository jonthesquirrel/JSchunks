var obj = {'one':1, 'two':[2, 'two']};

//store
location.hash = JSON.stringify(obj);

//read
obj = JSON.parse(location.hash.substring(1));
