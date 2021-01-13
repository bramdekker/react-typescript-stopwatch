export const calcMins = (ms: number): string => {
    let minString = (Math.floor(ms / 60000)).toString();
    return minString.padStart(2, '0');
}

export const calcSecs = (ms: number): string => {
    let secString = (Math.floor((ms % 60000) / 1000)).toString();
    return secString.padStart(2, '0');
}

export const calcMs = (ms: number): string => {
    let msString = ((ms % 1000) / 10).toString();
    return msString.padStart(2, '0');
}