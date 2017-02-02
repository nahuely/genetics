import { getRandomChar } from './../utils/utils'

class DNA {
    constructor(len) {
        this.genes = []
        this.fitness = 0

        for(let x = 0; x < len; x++) {
            this.genes.push(getRandomChar())
        }
    }

    calcFitness(target) {
        let score = 0
        this.genes.forEach((val, index) => {
            if(val === target.charAt(index)) {
                score++
            }
        })
        this.fitness = score / target.length
    }

    crossover(partner) {
        let child = new DNA(this.genes.length)
        const midpoint = Math.floor(Math.random() * this.genes.length)

        this.child.forEach((val, index) => {
            if(index > midpoint)
                child.genes[index] = this.genes[index]
            else
                child.genes[index] = parent.genes[index]
        })
        return child
    }    

    mutateDNA(mutationRate) {
        this.genes.forEach((index) => {
            if(Math.random() < mutationRate) {
                this.genes[index] = getRandomChar()
            }
        })
    }

    DNAtoString() {
        return this.genes.join('')
    }
}

export default DNA