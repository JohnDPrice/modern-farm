import {createPlan} from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createWheat} from "./seeds/wheat.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createCorn} from "./seeds/corn.js"

const yearlyPlan = createPlan()
console.log(yearlyPlan)

const asaparagusSeed = createAsparagus()
console.log(asaparagusSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

const wheatSeed = createWheat()
console.log(wheatSeed)

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

const cornSeed = createCorn()
console.log(cornSeed)
