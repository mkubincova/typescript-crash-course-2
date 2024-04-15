//--------------
// type aliases
//--------------

// more flexible than interface, which only describes an object

type Rgb = [number, number, number];

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return [r, g, b];
}
const color1 = getRandomColor();
const color2 = getRandomColor();
console.log(color1, color2);


type User = {
    name: string,
    score: number;
};
const user1: User = { name: 'mario', score: 75 };

function formatUser(user: User): void {
    console.log(`${user.name} scored ${user.score} points`);
}
formatUser(user1);
formatUser({ name: 'ema', score: 59 });