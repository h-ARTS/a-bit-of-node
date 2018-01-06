module.exports = (x,y,cb) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() => 
            cb(new Error("Rectangle dimensions should be greater than zero:  l = " + x + ",  and b = " + y), null), 2000);
    } else {
        setTimeout(() => cb(null, 
            {
                perimeter: () => (2*(x+y)),
                area: () => (x*y)
            }
        ), 2000);
    }
};
