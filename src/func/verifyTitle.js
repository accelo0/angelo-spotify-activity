function verifyTitleLenght(testString) {
  const maxLength = 8;
  // verify string lenght
  if (testString.length <= maxLength) {
    return [testString];
  }

  if (!testString.includes(" ")) {
    const halfLength = Math.ceil(testString.length / 1.3);
    const part1 = testString.slice(0, halfLength);
    const part2 = testString.slice(halfLength);

    return `${part1 + "- " + part2}`;
  } else {
    return [testString];
  }
}

export default verifyTitleLenght;
