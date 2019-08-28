function(t, e) {
    for (var n = t.split(""), i = e.split(""), r = {}, a = [], o = 0; o < n.length / 2; o++) r[n[o]] = n[n.length / 2 + o];
    for (var s = 0; s < e.length; s++) a.push(r[i[s]]);
    return a.join("")
}