function pow(x, n) {
    let a = x;
    for (let i = 1; i < n; i++) {
        a = a * x;
    }
    alert(a);
}
pow(3, 2);