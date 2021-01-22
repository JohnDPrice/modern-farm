import {createPlan} from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createWheat} from "./seeds/wheat.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createCorn} from "./seeds/corn.js"
import {addPlant, usePlants} from "./field.js"


const yearlyPlan = createPlan()


const asaparagusSeed = createAsparagus()


const potatoSeed = createPotato()


const soybeanSeed = createSoybean()


const wheatSeed = createWheat()


const sunflowerSeed = createSunflower()


const cornSeed = createCorn()


addPlant(cornSeed)
addPlant(wheatSeed)
addPlant(sunflowerSeed)
addPlant(soybeanSeed)
addPlant(asaparagusSeed)
addPlant(potatoSeed)

usePlants()

console.log(usePlants())

