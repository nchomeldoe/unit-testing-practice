export const translate = (englishWord, language = "french") => {
  const dictionary = [
    { english: "hello", french: "bonjour", german: "hallo" },
    { english: "goodbye", french: "au revoir", german: "auf Wiedersehen" },
    { english: "yes", french: "oui" },
    { english: "no", french: "non" },
  ];
  if (
    language &&
    !dictionary.find((word) => Object.keys(word).includes(language))
  ) {
    return "unavailable";
  } else if (typeof englishWord !== "string" || !englishWord) {
    return "unavailable";
  } else {
    const translatedWord = dictionary.find(
      (word) => word.english === englishWord.toLowerCase(),
    );
    if (!translatedWord) {
      return "unavailable";
    } else {
      if (language) {
        return translatedWord[language];
      } else {
        return translatedWord.french;
      }
    }
  }
};
