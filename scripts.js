// find elements
let stuff = $("#stuff")
let stacks = $("#stacks")
let button = $("button")

// Fuel Source Array
fuelSource = [
    {name: "Lava", fuel: 100.0},
    {name: "Block Of Coal", fuel: 80.0},
    {name: "Dried Kelp Block", fuel: 20.0},
    {name: "Blaze Rod", fuel: 12.0},
    {name: "Coal/Charcoal", fuel: 8.0},
    {name: "Boats", fuel: 6.0},
    {name: "Scaffolding", fuel: 2.0},
    {name: "Wood Stuff (logs/planks/etc)", fuel: 1.5},
    {name: "Wooden Slabs", fuel: 0.75},
    {name: "Buttons", fuel: 0.5},
    {name: "Wooden Tools/Signs/Doors", fuel: 1.0},
    {name: "Bowl/Saplings/Sticks", fuel: 0.5},
    {name: "Wool", fuel: 0.5},
    {name: "Carpet", fuel: 0.335},
    {name: "Bamboo", fuel: 0.25}
]

// handle click and add class
button.on("click", function(){
    let stuffAmount = stuff.val()
    let isStack = stacks.is(":checked")
    stuffAmount *= (isStack)? 64 : 1

    $("#results table tr:gt(0)").remove()
    for (let fuelItem of fuelSource) {
        let amount = stuffAmount/fuelItem.fuel
        if(Math.round(amount) !== amount) {
            amount = amount.toFixed(2);
        }

        let output = "<tr><td>"
        output += fuelItem.name
        output += "</td><td>"
        output += amount
        output += "</td></tr>"

        $('#results table tr:last').after(output)
    }
})
