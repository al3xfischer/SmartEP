import Store from '../src/store';
const store = new Store();

describe('Validate', () => {
    it('valid', () => {
        let result = store.verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU5NmMzMzU1LWNjYjgtNGM0Ni1iNjQ0LTIzOTk3MGIzOWYyZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU0NTU3MDk5NSwiZXhwIjoxNTQ1NjU3Mzk1fQ.wo_i4CBgaFwaRY9eNMBTcIPvj6Vnpczy8fzuoaMxDrI");
        expect(result).toBe(true);
    });

    it('invalid', () => {
        let result = store.verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU5NmMzMzU1LWNjYjgtNGM0Ni1iNjQ0LTIzOTk3MGIzOWYyZSIsInJvbGUiOiJyb290IiwiaWF0IjoxNTQ1NTcwOTk1LCJleHAiOjE1NDU2NTczOTV9.fTlZnC5RCU6gaXA9-Tb5vZCAye3n-IxPkcD2lBKhzuY");
        expect(result).toBe(false);
    })
});