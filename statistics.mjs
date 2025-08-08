
export function computeStatistics(numbers){
    
    if(!numbers){
        return {"avg": NaN, "min": NaN, "max": NaN}
    }

    const avg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const minVal = Math.min(...numbers);
    const maxVal = Math.max(...numbers);

    return { avg: avg, min: minVal, max: maxVal };

}
