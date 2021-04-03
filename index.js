const input = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

const groupAnagrams = (arr) => {
  let collections = {};

  arr.forEach((str) => {
    let words = str.split("").sort();

    collections[words]
      ? collections[words].push(str)
      : (collections[words] = [str]);
  });

  const keys = Object.keys(collections);
  const values = keys.map((val) => collections[val]);

  return values;
};
