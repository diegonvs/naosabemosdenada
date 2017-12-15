import { removeVersions, getFile, compile } from '../src/index';


describe('Compile', () => {
    beforeAll( ()=>{

    });

    it('should clear versions on deps', () => {
        let deps = { "dep1": "2.1.0", "dep2": "2.2.0", "dep3": "2.3.0" };
        expect(removeVersions(deps)).toEqual(["dep1", "dep2", "dep3"]);
    });

    it('should get file based on dependency name', () => {
        expect(getFile('testFolder')).toBeDefined();
    });

    it(`should throw error because depName doesn't exists`, () => {
        expect(getFile('folderWhoDoesntExists')).toThrowError();
    });

});