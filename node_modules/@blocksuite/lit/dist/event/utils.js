export function isFarEnough(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.pow(dx, 2) + Math.pow(dy, 2) > 4;
}
export const toLowerCase = (str) => str.toLowerCase();
//# sourceMappingURL=utils.js.map