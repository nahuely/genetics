import { getRandomChar } from './../utils/utils'

class DNA {
    constructor(len) {
        this.genes = []
        this.genesLen = len
        this.fitness = 0

        for(let x = 0; x < this.genesLen; x++) {
            this.genes.push(getRandomChar())
        }
    }

    calcFitness = target => {
        let score = 0
        this.genes.forEach((val, index) => {
            if(val === target.charAt(index)) {
                score++
            }
        })
        this.fitness = (score / target.length) * 100
    }

    crossover = partner => {
        let child = new DNA(this.genesLen)
        const midpoint = Math.floor(Math.random() * this.genesLen)

        for(let x = 0; x < child.genes.length; x++) {
            if(x > midpoint) {
                child.genes[x] = this.genes[x]
            } else {
                child.genes[x] = partner.genes[x]
            }     
        }
        return child
    }    

    mutateDNA = mutationRate => {
        for(let x = 0; x < this.genes.length; x++) {
            if(Math.random() <= mutationRate) {
                this.genes[x] = getRandomChar()
            }
        }
    }

    DNAtoString = () => {
        return this.genes.join('')
    }
}

export default DNA