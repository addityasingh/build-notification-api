    import { expect } from 'chai';
import routes from './index';

describe("Routes ", () => {
    it('should return list of route configurations', () => {
        expect(routes).to.have.length(3);
        expect(routes).to.be.a('array');
    });
});