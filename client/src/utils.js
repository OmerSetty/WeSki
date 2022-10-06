export function sortByNestedProp(prop, arr) {
  let arrCopy = [...arr];
  prop = prop.split('.');
  var len = prop.length;
  arrCopy.sort(function (a, b) {
    var i = 0;
    while (i < len) {
      a = a[prop[i]];
      b = b[prop[i]];
      i++;
    }
    if (+a < +b) {
      return -1;
    } else if (+a > +b) {
      return 1;
    } else {
      return 0;
    }
  });
  return arrCopy;
}