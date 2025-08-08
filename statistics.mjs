
export function computeStatistics(numbers){
    
    if(!numbers){
        return {"avg": NaN, "min": NaN, "max": NaN}
    }

    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return {
        avg,
        min,
        max
    };

}
