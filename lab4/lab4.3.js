const characters = {
    Robin: { born: 1990, died: 2071 },
    Ahaha: { born: 1967, died: 2069 },
    Clervie: { born: 2010, died: 2026 }
};

const yearsOfLife = (characters) => {
    const result = {};

    for (const character in characters) {
        result[character] = characters[character].died - characters[character].born;
    }

    return result;
}

console.log(yearsOfLife(characters));