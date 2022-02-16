function recursionFlat(arr = []) {
    const res = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            res.push(...recursionFlat(item))
        } else {
            res.push(item)
        }
    });
    return res;
}