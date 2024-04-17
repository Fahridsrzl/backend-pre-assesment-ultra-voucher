function groupAnagrams(words) {
    let groups = {};
    
    function countChars(word) {
      let charCount = {};
      for (let char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
      return charCount;
    }
  
    for (let word of words) {
      let charCount = countChars(word);
      let key = Object.keys(charCount).sort().join('');
  
      if (!groups[key]) {
        groups[key] = [word];
      } else {
        groups[key].push(word);
      }
    }

    return Object.values(groups);
  }
  
  let words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
  let groupedAnagrams = groupAnagrams(words);
  console.log(groupedAnagrams);
  