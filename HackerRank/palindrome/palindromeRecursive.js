function isPalindrome (str) {
    // remove non-alphanumeric characters and
    // change the string to lowercase
    str = str.replace(/[^a-z0-9]/i, '').toLowerCase();
  
    // and get the length of the string
    const len = str.length;
  
    if (len <= 1) return true;
    if (str[0] !== str[len - 1]) return false;
  
    // proper tail call optimized recursion
    return isPalindrome(str.slice(1, -1));
  }