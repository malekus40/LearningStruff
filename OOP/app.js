// String.prototype.yell = function () {
//     return `OMG!!!! ${this.toUpperCase()}!!!!! AGHGHGH!`;
// };

// Array.prototype.pop = function () {
//     return 'SORRY i WANT THAT ELEMENT, I WILL NEVER POP IT OFF';
// };
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${b}, ${g})`;
}
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${b}, ${g})`;
    };
    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    return color;
};

const firstColor = makeColor(35, 255, 150);
