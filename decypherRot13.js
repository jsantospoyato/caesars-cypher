// Alphabet array and encoding
const ab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const ec = 13;

/**
 * Main function that manipulates the given string and returns the decode
 */
function rot13(str) {
    return str
        .split("") // Get an array with every character
        .map(c => { return ab.includes(c) ? decode(c) : c }) // If its an alphabetic char, it gets decoded
        .join(""); // Finally we join the array into a sentence
}

/**
 * Returns the decoded char
 */
function decode(c) {
    // We get length and the index of the current character
    var len = ab.length;
    var index = ab.indexOf(c);

    // If the index minus the encoding is still bigger than 0
    var npos = index - ec;
    if (npos >= 0) {
        // We simply return the new character
        return ab[npos];
    }

    // Otherwise we calculate the new character from the end
    return ab[len + npos];
}
