const CyrillicToLatinMapping = {}
Object.assign(CyrillicToLatinMapping, CyrillicToLatinMappingCapital, CyrillicToLatinMappingLowercase)
Object.freeze(CyrillicToLatinMapping)
window.CyrillicToLatinMapping = CyrillicToLatinMapping