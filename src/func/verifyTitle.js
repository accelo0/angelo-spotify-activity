function verifyTitleLenght(testString) {
  const maxLength = 8;
  // Verifica se la lunghezza della stringa è inferiore o uguale alla lunghezza massima
  if (testString.length <= maxLength) {
    return [testString];
  }

  // Verifica se la stringa contiene solo una parola
  if (!testString.includes(" ")) {
    // Dividi la stringa in due parti
    const halfLength = Math.ceil(testString.length / 1.3);
    const part1 = testString.slice(0, halfLength);
    const part2 = testString.slice(halfLength);

    return `${part1 + "- " + part2}`;
  } else {
    // La stringa contiene più di una parola, quindi non viene divisa
    return [testString];
  }
}

export default verifyTitleLenght;
