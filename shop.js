const PokeBalls = [
    {name: "poke ball",//1
        category: "Standard",
        price: 1,
        desc: "a ball you throw at Pokemon to catch them",
        stock: 20,
        img: "pokeball.webp"
    },
    {name: "great ball",//2
        category: "Standard",
        price: 10,
        desc: "a more succesful pokeball",
        stock: 20,
        img: "greatball.webp"
    },
    {name: "ultra ball",//3\
        category: "Standard",
        price: 100,
        desc: "a very successful pokeball",
        stock: 20,
        img: "ultraball.webp"
    },
    {name: "master ball",//4
        category: "Guaranteed",
        price: 1000,
        desc: "a 100% successful pokeball",
        stock: 20,
        img: "masterball.webp"
    },
    {name: "quick ball",//5
        category: "Time",
        price: 5,
        desc: "a pokeball that works best as your first move",
        stock: 20,
        img: "quickball.webp"
    },
    {name: "timer ball",//6
        category: "Time",
        price: 5,
        desc: "a pokeball that works better the longer the battle",
        stock: 20,
        img: "timerball.webp"
    },
    {name: "fast ball",//7
        category: "Time",
        price: 5,
        desc: "a pokeball for pokemon whom will flee fast",
        stock: 20,
        img: "fastball.webp"
    },
    {name: "heal ball",//8
        category: "Comfort",
        price: 15,
        desc: "a pokeball that fully heals the captured pokemon",
        stock: 20,
        img: "healball.webp"
    },
    {name: "friend ball",//9
        category: "Comfort",
        price: 15,
        desc: "a pokeball that increases base friendship",
        stock: 20,
        img: "friendball.webp"
    },
    {name: "luxury ball",//10
        category: "Comfort",
        price: 15,
        desc: "a pokeball that increases rate of friendship gained over time",
        stock: 20,
        img: "luxuryball.webp"
    },
    {name: "dusk ball",//11
        category: "Environment",
        price: 5,
        desc: "a pokeball that works better in the dark",
        stock: 20,
        img: "duskball.webp"
    },
    {name: "dive ball",//12
        category: "Environment",
        price: 5,
        desc: "a pokeball that works better on water or underwater pokemon",
        stock: 20,
        img: "diveball.webp"
    },
    {name: "net ball",//13
        category: "Environment",
        price: 5,
        desc: "a pokeball that works better on bug and water types",
        stock: 20,
        img: "netball.webp"
    },
    {name: "lure ball",//14
        category: "Environment",
        price: 5,
        desc: "a pokeball for pokemon caught while fishing",
        stock: 20,
        img: "lureball.webp"
    },
    {name: "dream ball",//15
        category: "Statistic",
        price: 5,
        desc: "a pokeball that works better on the drowsy",
        stock: 20,
        img: "dreamball.webp"
    },
    {name: "nest ball",//16
        category: "Statistic",
        price: 5,
        desc: "a pokeball that works better on low-level pokemon",
        stock: 20,
        img: "nestball.webp"
    },
    {name: "level ball",//17
        category: "Statistic",
        price: 5,
        desc: "a pokeball that works better the higher the level",
        stock: 20,
        img: "levelball.webp"
    },
    {name: "heavy ball",//18
        category: "Species",
        price: 10,
        desc: "a pokeball that works better the heavier the pokemon",
        stock: 20,
        img: "heavyball.webp"
    },
    {name: "repeat ball",//19
        category: "Species",
        price: 10,
        desc: "a pokeball that works better on species you've caught before",
        stock: 20,
        img: "repeatball.webp"
    },
    {name: "beast ball",//20
        category: "Species",
        price: 500,
        desc: "a pokeball  that works better on ultra-beasts",
        stock: 20,
        img: "beastball.webp"
    },
]
const categories =
{
    standa:{name: "Standard", balls: PokeBalls.filter(ball=>ball.category === "Standard")},
    guaran:{name: "Guaranteed", balls: PokeBalls.filter(ball=>ball.category === "Guaranteed")},
    time:{name: "Time", balls: PokeBalls.filter(ball=>ball.category === "Time")},
    comfort:{name: "Comfort", balls: PokeBalls.filter(ball=>ball.category === "Comfort")},
    enviro:{name: "Environment", balls: PokeBalls.filter(ball=>ball.category === "Environment")},
    stat:{name: "Statistic", balls: PokeBalls.filter(ball=>ball.category === "Statistic")},
    species:{name: "Species", balls: PokeBalls.filter(ball=>ball.category === "Species")},
}

function sort(kategori)
{
    console.log(`${kategori.name}:`)
    kategori.balls.forEach(ball => 
    {
        if (ball.name)
            console.log(ball.name);
        else
            console.log("[Error: No Name]");
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
    constructor()
    {
        this.content={};
    }
    add(item)
    {
        if (this.content[item.name])
        {
            this.content[item.name]["qty"]++;
            this.content[item.name]["total"]+=this.content[item.name]["price"];
            this.content[item.name]["stock"]--;
        }
        else if(this.content[item.name]["stock"]===0)
        {
            console.log("Ran out");
        }
        else
        {
            this.content[item.name]=item;
            this.content[item.name]["qty"]=1;
            this.content[item.name]["total"]=this.content[item.name]["price"];
            this.content[item.name]["stock"]--;
        }
    }
    sbt(item)
    {
        if (this.content[item.name])
        {
            this.content[item.name]["qty"]--;
            this.content[item.name]["total"]-=this.content[item.name]["price"];
            this.content[item.name]["stock"]++;
        }
        else
        {
            console.log("ERROR: Item not found!")
        }
    }
    show()
    {
        console.log("Cart:")
        console.log(this.content)
    }
}

const cart = new Cart();
/* const cart2 = new Cart(); */

cart.add(PokeBalls[1]);
cart.add(PokeBalls[1]);
cart.show();

function inject(item){
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
    "beforeend",
    `<button class="box">
        <h1 class="name">${item.name}</h1>
        <h3 class="category">${item.category}</h3>
        <p class="desc">${item.desc}</p>
        <p class="price">$${item.price}</p>
        <img class="img" src="images/${item.img}" alt=${item.img}>
        <span class"stock"> Remaining: ${item.stock}</span>
    </button>`
    );
}
function cont(kate){
    const balls = kate;
    balls.forEach(ball=>inject(ball));
}
// cont(PokeBalls)
PokeBalls.forEach(ball=>inject(ball));
/* 
const pk = document.querySelector(".pk")
const st = document.querySelector(".st")
const gu = document.querySelector(".gu")
const tm = document.querySelector(".tm")
const cf = document.querySelector(".cf")
const ev = document.querySelector(".ev")
const sc = document.querySelector(".sc")
const sp = document.querySelector(".sp")

pk.addEventListener("click",() => {
        // Clear existing content first to avoid duplicates
        container.innerHTML = '';
        cont(PokeBalls)
    });
st.addEventListener("click",() => {
        // Clear existing content first to avoid duplicates
        container.innerHTML = '';
        cont(categories.standa.balls)
    });
gu.addEventListener("click",() => {
        // Clear existing content first to avoid duplicates
        container.innerHTML = '';
        cont(categories.guaran.balls)
    });
tm.addEventListener("click",() => {
        // Clear existing content first to avoid duplicates
        container.innerHTML = '';
        cont(categories.time.balls)
    });
cf.addEventListener("click",() => {
        // Clear existing content first to avoid duplicates
        container.innerHTML = '';
        cont(categories.comfort.balls)
    });
ev.addEventListener("click",() => {
        // Clear existing content first to avoid duplicates
        container.innerHTML = '';
        cont(categories.enviro.balls)
    });
sc.addEventListener("click",() => {
        // Clear existing content first to avoid duplicates
        container.innerHTML = '';
        cont(categories.stat.balls)
    });
sp.addEventListener("click",() => {
        // Clear existing content first to avoid duplicates
        container.innerHTML = '';
        cont(categories.species.balls)
    });

function cject(item){
    const kars = document.querySelector(".cart")
    Object.keys(this).forEach(item => {kars.insertAdjacentHTML(
        "beforeend",
        `<div class="item">
            <h3 class="name">${item.name}</h3>
            <p class="qty">${item.qty}</p>
            <p class="ttl">$${item.ttl}</p>
            <button class="remove">remove</button>
        </div>`)});
    amount(item);
}
function amount(item){
        const qty = document.querySelector(".qty")
        const ttl = document.querySelector(".ttl")
        qty.textContent = `Amount: ${item.qty}`
        ttl.textContent = `Total Cost: $${item.ttl}`
        cart.add(item)
}
const bx = document.querySelectorAll(".box");
bx.addEventListener("click",cject(cart["great ball"]));
Object.keys(cart).forEach(key => {
  console.log(`${key}: ${cart[key]}`); 
});
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let x = document.querySelector("#coupon");
  console.log(x.value);
  x.value = "";
}); */