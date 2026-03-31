function Value(ms, value) {
  return new Promise(function(resolve) {

    setTimeout(function() {
      resolve(value); 
    }, ms);

  });
}