/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号1
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 普通写法
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        let left = s[i]
        switch (left) {
            case "(":
                stack.push(")")
                break;
            case "{":
                stack.push("}")
                break
            case "[":
                stack.push("]")
            default:
                if (left !== stack.pop()) {
                    return false
                }
                break;
        }
        return stack.length === 0
    }
    // ES6写法
    // 如果是奇数个数，则不用处理了，肯定不符合
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }

    const map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stack2 = []
    for (let item of s) {
        if (map.has(item)) {
            if (!stack2.length || stack2[stack2.length - 1] !== map.get(item)) {
                return false;
            }
            stack2.pop()
        } else {
            stack2.push(item)
        }
    }
    return !stack2.length
};
// @lc code=end