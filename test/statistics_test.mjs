import {computeStatistics} from '../statistics.mjs';
import {expect} from 'chai';

describe('Statistics', () => {
    it('reports average, min, max', () => {
        const computedStats = computeStatistics([1.5, 8.9, 3.2, 4.5]);
        const epsilon = 0.001;
        expect(computedStats.avg).to.be.closeTo(4.525, epsilon);
        expect(computedStats.min).to.be.closeTo(1.5, epsilon);
        expect(computedStats.max).to.be.closeTo(8.9, epsilon);
    });
    it('reports NaN for empty input', () => {
        const computedStats = computeStatistics([]);
    expect(Number.isNaN(computedStats.avg)).to.be.true;
    expect(Number.isNaN(computedStats.max)).to.be.true;
    expect(Number.isNaN(computedStats.min)).to.be.true;
        // All fields of computedStats (average, max, min) must be
        // NAN (not-a-number)
        // Design the expect statement here.
        // Use https://www.w3schools.com/jsref/jsref_isnan.asp
    });
});
