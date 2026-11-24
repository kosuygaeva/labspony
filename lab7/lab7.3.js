const unique = (array2) => {
  const result = [];
  for (const name of array2) {
    if (!result.includes(name)) {
      result.push(name);
    }
  }
  return result;
}
const uniqueResult = unique(['Lily','Phrolova','Rebecca', 'Denia','Denia', 'Cartethyia','Cartethyia']);
console.log(uniqueResult);