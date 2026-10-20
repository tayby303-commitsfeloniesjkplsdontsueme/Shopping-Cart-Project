const PokeBalls = [
    {name: "poke ball",//1
        category: "Standard",
        price: 1,
        desc: "a ball you throw at Pokemon to catch them"
    },
    {name: "great ball",//2
        category: "Standard",
        price: 10,
        desc: "a more succesful pokeball"
    },
    {name: "ultra ball",//3\
        category: "Standard",
        price: 100,
        desc: "a very successful pokeball"
    },
    {name: "master ball",//4
        category: "Guaranteed",
        price: 1000,
        desc: "a 100% successful pokeball"
    },
    {name: "quick ball",//5
        category: "Time",
        price: 5,
        desc: "a pokeball that works best as your first move"
    },
    {name: "timer ball",//6
        category: "Time",
        price: 5,
        desc: "a pokeball that works better the longer the battle"
    },
    {name: "fast ball",//7
        category: "Time",
        price: 5,
        desc: "a pokeball for pokemon whom will flee fast"
    },
    {name: "heal ball",//8
        category: "Comfort",
        price: 15,
        desc: "a pokeball that fully heals the captured pokemon"
    },
    {name: "friend ball",//9
        category: "Comfort",
        price: 15,
        desc: "a pokeball that increases base friendship"
    },
    {name: "luxury ball",//10
        category: "Comfort",
        price: 15,
        desc: "a pokeball that increases rate of friendship gained over time"
    },
    {name: "dusk ball",//11
        category: "Environment",
        price: 5,
        desc: "a pokeball that works better in the dark"
    },
    {name: "dive ball",//12
        category: "Environment",
        price: 5,
        desc: "a pokeball that works better on water or underwater pokemon"
    },
    {name: "net ball",//13
        category: "Environment",
        price: 5,
        desc: "a pokeball that works better on bug and water types"
    },
    {name: "lure ball",//14
        category: "Environment",
        price: 5,
        desc: "a pokeball for pokemon caught while fishing"
    },
    {name: "dream ball",//15
        category: "Statistic",
        price: 5,
        desc: "a pokeball that works better on the drowsy"
    },
    {name: "nest ball",//16
        category: "Statistic",
        price: 5,
        desc: "a pokeball that works better on low-level pokemon"
    },
    {name: "level ball",//17
        category: "Statistic",
        price: 5,
        desc: "a pokeball that works better the higher the level"
    },
    {name: "heavy ball",//18
        category: "Species",
        price: 10,
        desc: "a pokeball that works better the heavier the pokemon"
    },
    {name: "repeat ball",//19
        category: "Species",
        price: 10,
        desc: "a pokeball that works better on species you've caught before"
    },
    {name: "beast ball",//20
        category: "Species",
        price: 500,
        desc: "a pokeball  that works better on ultra-beasts"
    },
]

const standard = PokeBalls.filter(ball=>ball.category === "Standard")

const guaranteed = PokeBalls.filter(ball=>ball.category === "Guaranteed")

const time = PokeBalls.filter(ball=>ball.category === "Time")

const comfort = PokeBalls.filter(ball=>ball.category === "Comfort")

const enviro = PokeBalls.filter(ball=>ball.category === "Environment")

const stat = PokeBalls.filter(ball=>ball.category === "Statistic")

const species = PokeBalls.filter(ball=>ball.category === "Species")

function sort(balls){
    console.log(`${}:`)
    balls.forEach(ball => {
        if (ball.name) console.log(ball.name);
        else console.log("[Error: No Name]");
    });
}
sort(standard)
sort(time)
sort(comfort)
sort(enviro)
sort(stat)
sort(species)