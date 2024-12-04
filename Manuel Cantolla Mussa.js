const entrenadores = [
    {
        nombre: "Entrenador 1",
        equipo: [
            { nombre: "Charizard", nivel: 25, tipo: "Fuego" },
            { nombre: "Blastoise", nivel: 22, tipo: "Agua" },
            { nombre: "Venusaur", nivel: 28, tipo: "Planta" },
            { nombre: "Pikachu", nivel: 30, tipo: "Eléctrico" },
            { nombre: "Machamp", nivel: 27, tipo: "Pelea" },
            { nombre: "Gengar", nivel: 26, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 2",
        equipo: [
            { nombre: "Typhlosion", nivel: 29, tipo: "Fuego" },
            { nombre: "Feraligatr", nivel: 32, tipo: "Agua" },
            { nombre: "Meganium", nivel: 33, tipo: "Planta" },
            { nombre: "Raichu", nivel: 34, tipo: "Eléctrico" },
            { nombre: "Lucario", nivel: 31, tipo: "Pelea" },
            { nombre: "Mimikyu", nivel: 35, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 3",
        equipo: [
            { nombre: "Arcanine", nivel: 36, tipo: "Fuego" },
            { nombre: "Swampert", nivel: 37, tipo: "Agua" },
            { nombre: "Sceptile", nivel: 38, tipo: "Planta" },
            { nombre: "Electivire", nivel: 39, tipo: "Eléctrico" },
            { nombre: "Gallade", nivel: 40, tipo: "Pelea" },
            { nombre: "Banette", nivel: 41, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 4",
        equipo: [
            { nombre: "Infernape", nivel: 42, tipo: "Fuego" },
            { nombre: "Empoleon", nivel: 43, tipo: "Agua" },
            { nombre: "Torterra", nivel: 44, tipo: "Planta" },
            { nombre: "Luxray", nivel: 45, tipo: "Eléctrico" },
            { nombre: "Conkeldurr", nivel: 46, tipo: "Pelea" },
            { nombre: "Cofagrigus", nivel: 47, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 5",
        equipo: [
            { nombre: "Blaziken", nivel: 48, tipo: "Fuego" },
            { nombre: "Samurott", nivel: 49, tipo: "Agua" },
            { nombre: "Serperior", nivel: 50, tipo: "Planta" },
            { nombre: "Zebstrika", nivel: 51, tipo: "Eléctrico" },
            { nombre: "Mienshao", nivel: 52, tipo: "Pelea" },
            { nombre: "Chandelure", nivel: 53, tipo: "Fantasma" }
        ]
    }
];

// Desafío 1: Pokémon con Mayor y Menor Nivel
function obtenerMayorYMenorNivel(entrenadores) {
    const pokemones = entrenadores.flatMap(e => e.equipo);
    const pokemonMayorNivel = pokemones.reduce((max, p) => (p.nivel > max.nivel ? p : max));
    const pokemonMenorNivel = pokemones.reduce((min, p) => (p.nivel < min.nivel ? p : min));
    return { pokemonMayorNivel, pokemonMenorNivel };
}

// Desafío 2: Buscador
function buscarPokemonPorNombre(entrenadores, nombreBuscado) {
    const pokemones = entrenadores.flatMap(e => e.equipo);
    const resultados = pokemones.filter(p => p.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()));
    return resultados.length ? resultados : [];
}

// Desafío 3: Tipo con Promedio de Nivel Más Alto
function obtenerTipoConMayorPromedioNivel(entrenadores) {
    const pokemones = entrenadores.flatMap(e => e.equipo);
    const nivelesPorTipo = pokemones.reduce((tipo, p) => {
        if (!tipo[p.tipo]) tipo[p.tipo] = [];
        tipo[p.tipo].push(p.nivel);
        return tipo;
    }, {});
    const promediosPorTipo = Object.entries(nivelesPorTipo).map(([tipo, niveles]) => ({
        tipo,
        promedio: niveles.reduce((a, b) => a + b, 0) / niveles.length
    }));
    return promediosPorTipo.reduce((max, t) => (t.promedio > max.promedio ? t : max)).tipo;
}



console.log(obtenerMayorYMenorNivel(entrenadores));
console.log(buscarPokemonPorNombre(entrenadores, "cha"));
console.log(obtenerTipoConMayorPromedioNivel(entrenadores));