function sort(str) {
  function merge(strX, strY) {
    let temp = "";
    let i = 0;
    let j = 0;

    while (i < strX.length && j < strY.length) {
      if (strX[i] < strY[j]) {
        temp += strX[i];
        i++;
      } else {
        temp += strY[j];
        j++;
      }
    }

    while (i < strX.length) {
      temp += strX[i];
      i++;
    }
    while (j < strY.length) {
      temp += strY[j];
      j++;
    }

    return temp;
  }

  if (str.length <= 1) return str;

  let mid = Math.floor(str.length / 2);
  let left = sort(str.slice(0, mid));
  let right = sort(str.slice(mid, str.length));

  return merge(left, right);
}

function anagram(items) {
  let anagramsGroup = [];
  let checked = {};

  for (let i = 0; i < items.length; i++) {
    let anagrams = [];
    let anagram = sort(items[i]);

    if (checked[anagram]) {
      checked[anagram][items[i]] = true;
      continue;
    } else {
      checked[anagram] = { [items[i]]: true };
      anagrams.push(items[i]);
    }

    for (let j = 0; j < items.length; j++) {
      if (
        items[i] === items[j] ||
        items[i].length !== items[j].length ||
        checked[anagram][items[j]]
      )
        continue;

      if (anagram === sort(items[j])) {
        anagrams.push(items[j]);
        checked[sort(items[j])][items[j]] = true;
      }
    }

    anagramsGroup.push(anagrams);
  }

  return console.log(anagramsGroup);
}

anagram(["kita", "atik", "tika", "aku", "kia", "makan", "kua"]);
