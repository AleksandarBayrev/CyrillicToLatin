const LetterMapping = new Map()
const MappingKeys = (function() {
    const mapping = {
        CyrillicToLatinMappingCapital: "CyrillicToLatinMappingCapital",
        CyrillicToLatinMappingLowercase: "CyrillicToLatinMappingLowercase"
    }
    Object.freeze(mapping)
    return mapping
})()
window.LetterMapping = {
    letters: LetterMapping,
    keys: MappingKeys
}