var maxSumDivThree = function(nums) {
    let totalSum = 0;
    let mod1 = [];
    let mod2 = [];

    for (let num of nums) {
        totalSum += num;
        if (num % 3 === 1) mod1.push(num);
        else if (num % 3 === 2) mod2.push(num);
    }

    mod1.sort((a, b) => a - b);
    mod2.sort((a, b) => a - b);

    if (totalSum % 3 === 0) return totalSum;

    if (totalSum % 3 === 1) {
        let option1 = mod1.length > 0 ? totalSum - mod1[0] : 0;
        let option2 = mod2.length > 1 ? totalSum - (mod2[0] + mod2[1]) : 0;
        return Math.max(option1, option2);
    }

    if (totalSum % 3 === 2) {
        let option1 = mod2.length > 0 ? totalSum - mod2[0] : 0;
        let option2 = mod1.length > 1 ? totalSum - (mod1[0] + mod1[1]) : 0;
        return Math.max(option1, option2);
    }
};
