(function(mapping) {
    function getInstance(mapping, key) {
        return Object.assign({}, mapping.letters.get(mapping.keys[key]))
    }
    const mergedLetterMapping = {}
    const capital = getInstance(mapping, "CyrillicToLatinMappingCapital")
    const lowercase = getInstance(mapping, "CyrillicToLatinMappingLowercase")
    Object.assign(mergedLetterMapping, capital, lowercase)
    //Object.freeze(mergedLetterMapping)
    mapping.letters.set("MergedLetterMapping", mergedLetterMapping)
})(window.LetterMapping)