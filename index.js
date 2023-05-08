// Завдання 1
// import fs from 'fs';
// import path from 'path'
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const book = 'The Wind in the Willows (introductory fragment).txt'

// const readStream = fs.createReadStream(path.join(__dirname, '/files', book), { highWaterMark: 1024 })
// console.log(readStream.readableHighWaterMark);

// readStream.on('data', (chunk)=>{
//     setTimeout(() => {
//         console.log('Introductory fragment, copying!');
//         console.log(chunk.toString());
//     }, Math.random() * 5000);
// })

// Завдання 2
// Завдання 3
const ask = (question) => {
    return new Promise((resolve, reject) => {
        process.stdout.write(`${question} (Y/N): `);
        process.stdin.once('data', (data) => {
            const answer = data.toString().trim().toLowerCase();
            if (['y', 'yes', 'n', 'no'].includes(answer)) {
                resolve(answer.startsWith('y'));
            } else {
                reject(new Error('Invalid response format'));
            }
        });
    });
};

(async () => {
    try {
        const useSCSS = await ask('Do you want to use SCSS?');
        const useESLint = await ask('Do you want to use ESLint?');
        process.stdout.write(`You have selected to use SCSS: ${useSCSS} and ESLint: ${useESLint}!\n`);
        process.exit();
    } catch (error) {
        process.stderr.write(error.message);
        process.exit(1);
    }
})();