
// * Destructuring objects
// interface AudioPlayer {
//     audioVolume: number;
//     songDuration: number;
//     song: string;
//     details: Details;
// }

// interface Details {
//     author: string;
//     year: number;
// }

// const audioPlayer: AudioPlayer = {
//     audioVolume: 90,
//     songDuration: 36,
//     song: "Mess",
//     details: {
//         author: "Ed Sheeran",
//         year: 2018
//     }
// }


// const song = 'New Song'
// const { audioVolume, songDuration, song : songName, details: { author } } = audioPlayer;

// console.log({ audioVolume, songDuration, songName, author, song})

// * Destructuring arrays
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks', 'Gohan']
const trunks = dbz[2] || 'No hay nadie'
// const [goku, vegeta, trunks, gohan] = dbz
const [, , , gohan] = dbz

console.log('Personaje 3:', trunks)
console.log('Personaje 4:', gohan)

