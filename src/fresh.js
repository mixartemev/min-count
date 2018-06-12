const fresh = () => {
    let visits = [];
    return () => {
        let i = 0;
        //find first index, whos timestamp older 1min
        while (visits[i] < Date.now() - 10*1000) { i++ }
        visits.splice(0, i);
        visits.push(Date.now());
        return visits.length;
    }
};
module.exports = fresh();