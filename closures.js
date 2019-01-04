var arr = [10, 20, 30, 40];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function(i_local) {
    return function() {
      console.log(i_local +"-"+ arr[i_local]);
    }
  }(i), 3000);
}
