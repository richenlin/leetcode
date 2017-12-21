// Write a function to find the longest common prefix string amongst an array of strings.
// 写一个函数（或方法）来寻找一个字符串数组中的最长公共前缀。


//["abcdefg", "abcdefghjkl", "abcd23ldfcdsf", "abcd"]
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0 || !Array.isArray(strs)){
        return "";
    }
    let prefix = strs[0];
    for(let i = 0; i < strs.length; i ++) {
        let j = 0;
        while(j < strs[i].length && j < prefix.length && strs[i].charAt(j) === prefix.charAt(j)){
            j ++;
        }
        if (j === 0){
            return "";
        }
        prefix = prefix.slice(0, j);
    }
    return prefix;
};

console.log(longestCommonPrefix(["abcdef", "ab1cdefg", "abcdefghjkl", "abcd23ldfcdsf"]))