function shKolnayaTetradZadniyVid(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let number = i * j;
            console.log(`${i} * ${j} = ${number}`);
        }
    }
}

shKolnayaTetradZadniyVid(9);

// Процедурная парадигма, потому что по другому не знаю как указать параметр n).