var query = decodeURIComponent(window.location.search.substring(1));
var val = dict[query];
console.log(query);
console.log(val);
document.body.innerHTML = val;
