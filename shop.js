const PokeBalls = [
    {name: "poke ball",//1
        category: "Standard",
        price: 1,
        desc: "a ball you throw at Pokemon to catch them",
        img: "pokeball.webp"
    },
    {name: "great ball",//2
        category: "Standard",
        price: 10,
        desc: "a more succesful pokeball",
        img: "greatball.webp"
    },
    {name: "ultra ball",//3\
        category: "Standard",
        price: 100,
        desc: "a very successful pokeball",
        img: "ultraball.webp"
    },
    {name: "master ball",//4
        category: "Guaranteed",
        price: 1000,
        desc: "a 100% successful pokeball",
        img: "masterball.webp"
    },
    {name: "quick ball",//5
        category: "Time",
        price: 5,
        desc: "a pokeball that works best as your first move",
        img: "quickball.webp"
    },
    {name: "timer ball",//6
        category: "Time",
        price: 5,
        desc: "a pokeball that works better the longer the battle",
        img: "timerball.webp"
    },
    {name: "fast ball",//7
        category: "Time",
        price: 5,
        desc: "a pokeball for pokemon whom will flee fast",
        img: "fastball.webp"
    },
    {name: "heal ball",//8
        category: "Comfort",
        price: 15,
        desc: "a pokeball that fully heals the captured pokemon",
        img: "healball.webp"
    },
    {name: "friend ball",//9
        category: "Comfort",
        price: 15,
        desc: "a pokeball that increases base friendship",
        img: "friendball.webp"
    },
    {name: "luxury ball",//10
        category: "Comfort",
        price: 15,
        desc: "a pokeball that increases rate of friendship gained over time",
        img: "luxuryball.webp"
    },
    {name: "dusk ball",//11
        category: "Environment",
        price: 5,
        desc: "a pokeball that works better in the dark",
        img: "duskball.webp"
    },
    {name: "dive ball",//12
        category: "Environment",
        price: 5,
        desc: "a pokeball that works better on water or underwater pokemon",
        img: "diveball.webp"
    },
    {name: "net ball",//13
        category: "Environment",
        price: 5,
        desc: "a pokeball that works better on bug and water types",
        img: "netball.webp"
    },
    {name: "lure ball",//14
        category: "Environment",
        price: 5,
        desc: "a pokeball for pokemon caught while fishing",
        img: "lureball.webp"
    },
    {name: "dream ball",//15
        category: "Statistic",
        price: 5,
        desc: "a pokeball that works better on the drowsy",
        img: "dreamball.webp"
    },
    {name: "nest ball",//16
        category: "Statistic",
        price: 5,
        desc: "a pokeball that works better on low-level pokemon",
        img: "nestball.webp"
    },
    {name: "level ball",//17
        category: "Statistic",
        price: 5,
        desc: "a pokeball that works better the higher the level",
        img: "levelball.webp"
    },
    {name: "heavy ball",//18
        category: "Species",
        price: 10,
        desc: "a pokeball that works better the heavier the pokemon",
        img: "heavyball.webp"
    },
    {name: "repeat ball",//19
        category: "Species",
        price: 10,
        desc: "a pokeball that works better on species you've caught before",
        img: "repeatball.webp"
    },
    {name: "beast ball",//20
        category: "Species",
        price: 500,
        desc: "a pokeball  that works better on ultra-beasts",
        img: "beastball.webp"
    },
]
const categories ={
standa:{name: "Standard", balls: PokeBalls.filter(ball=>ball.category === "Standard")},

guaran:{name: "Guaranteed", balls: PokeBalls.filter(ball=>ball.category === "Guaranteed")},

time:{name: "Time", balls: PokeBalls.filter(ball=>ball.category === "Time")},

comfort:{name: "Comfort", balls: PokeBalls.filter(ball=>ball.category === "Comfort")},

enviro:{name: "Environment", balls: PokeBalls.filter(ball=>ball.category === "Environment")},

stat:{name: "Statistic", balls: PokeBalls.filter(ball=>ball.category === "Statistic")},

species:{name: "Species", balls: PokeBalls.filter(ball=>ball.category === "Species")},
}
function sort(kategori){
    console.log(`${kategori.name}:`)
    kategori.balls.forEach(ball => {
        if (ball.name) console.log(ball.name);
        else console.log("[Error: No Name]");
    });
}
/* sort(categories.standa)
sort(categories.guaran)
sort(categories.time)
sort(categories.comfort)
sort(categories.enviro)
sort(categories.stat)
sort(categories.species) */

class Cart{
    constructor(){
        this.content={};
    }
    add(item){
    if (this.content[item.name]){
        this.content[item.name]["qty"]++;
        this.content[item.name]["total"]+=this.content[item.name]["price"];
    }
    else{
        this.content[item["name"]]=item;
        this.content[item["name"]]["qty"]=1;
        this.content[item["name"]]["total"]=this.content[item.name]["price"];
    }
    }
    sbt(item){
        if (this.content[item.name]){
            this.content[item.name]["qty"]--;
            this.content[item.name]["total"]-=this.content[item.name]["price"];
        }
        else{
            console.log("ERROR: Item not found!")
        }
    }
    show(){
        console.log("Cart:")
        console.log(this.content)
    }
}

const cart = new Cart();
const cart2 = new Cart();

cart.add(PokeBalls[1])
cart.add(PokeBalls[1])
cart.show()

/* function prices(ball){
const price = document.querySelector(".price")
price.addEventListener("click", cart.add);
}
function inject(item){
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
    "beforeend",
    `<div class="box">
        <h1 class="name">${item.name}</h1>
        <h2 class="category">${item.category}</h2>
        <p class="desc">${item.desc}</p>
        <button class="price">$${item.price}</button>
        <img src="images/${item.img}" alt=${item.img} />
    </div>`);
    prices(ball)
}
PokeBalls.forEach(ball=>inject(ball))

function rmv(ball){
const remove = document.querySelector(".remove")
remove.addEventListener("click",cart.sbt(ball))
}
function cject(ball){
    const carts=document.querySelector(".cart")
    carts.insertAdjacentElement(
        "beforeend",
        `<h1 class="name quantity">${ball.name}: ${ball.qty}<button class="remove">Remove</button></h1>`
    );
    rmv(ball)
}

cart.forEach(ball=>cject(ball))
 */