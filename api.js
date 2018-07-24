var query = decodeURIComponent(window.location.search.substring(1));
var val = dict[query];
console.log(val);
var keys = ["2.ID", "4.구성", "7.품사", "8.표제항수", "9.음절수", "10.음절유형", "11.자모수", "동일유형자모이웃",
    "상이유형자무이웃", "어두음절이웃", "어말음절이웃", "음절이웃", "자모이웃", "중간음절이웃"];
if (val !== undefined) {
    var tds = document.querySelectorAll('td');
    tds[0].innerText = query;
    for (var i = 1; i <= 14; i ++) {
        tds[i].innerText = val[keys[i - 1]];
    }
}