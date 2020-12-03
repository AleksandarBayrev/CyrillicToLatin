window.LetterMapping = {
    letters: new Map(),
    keys: (function() {
        const mapping = {
            CyrillicToLatinMappingCapital: "CyrillicToLatinMappingCapital",
            CyrillicToLatinMappingLowercase: "CyrillicToLatinMappingLowercase",
            MergedLetterMapping: "MergedLetterMapping"
        }
        Object.freeze(mapping)
        return mapping
    })()
}