let heroiNome = 'Sonic'
let heroiXp = 11999
let nivel = ''

if (heroiXp <= 1000) {
    nivel = 'Ferro'
} else if (heroiXp > 1000 && heroiXp <= 2000) {
    nivel = 'Bronze'
} else if (heroiXp > 2000 && heroiXp <= 5000) {
    nivel = 'Prata'
} else if (heroiXp > 5000 && heroiXp <= 7000) {
    nivel = 'Ouro'
} else if (heroiXp > 7000 && heroiXp <= 8000) {
    nivel = 'Platina'
} else if (heroiXp > 8000 && heroiXp <= 9000) {
    nivel = 'Ascendente'
} else if (heroiXp > 9000 && heroiXp <= 10000) {
    nivel = 'Imortal'
} else {
    nivel = 'Radiante'
}


console.log(`O Herói de nome ${heroiNome} está no nível ${heroiXp}`)