export default function two_crystal_balls(breaks: boolean[]): number {
    // get the sqrt of array length and put it as jump amount
    const JUMP = Math.floor(Math.sqrt(breaks.length));
    // set i to the jump amount
    let i = JUMP;
    // pass on the array by jump until find where the first crystal ball breaks
    for (; i < breaks.length; i += JUMP) {
        if (breaks[i]) break;
    }
    // go down by one jump and start pass on the array until find when the second crytal ball breaks
    // that is the exact place where the crystal ball start to break
    i -= JUMP;
    for (let j = 0; j < JUMP && i < breaks.length; j++, i++) {
        if (breaks[i]) return i;
    }
    return -1;
}
