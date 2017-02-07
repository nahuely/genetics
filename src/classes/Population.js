import DNA from './DNA'

class Population {
    constructor(popSize, target, mutationRate) {
        this.population = []
        this.mutationRate = mutationRate
        this.popSize = popSize
        this.target = target
        this.maxFitness = 0
        this.generation = 0
        this.isFinished = false

        for(let x = 0; x < this.popSize; x++) {
            this.population.push(new DNA(this.target.length))
        }

        this.calcFitness()
    }

    acceptOrReject = (maxFitness) => {
        while(true) {
            let index = Math.floor(Math.random() * this.population.length)
            let rand = Math.floor(Math.random() * maxFitness)
            if(rand < this.population[index].fitness) {
                return this.population[index]
            }
        }
    }

    reproduction = () => {
        let maxFitness = this.population.reduce((output, current) => {
            if(current.fitness === 100) this.isFinished = true
            if(current.fitness > this.maxFitness) {
                this.maxFitness = current.fitness
            }
            return current.fitness > output ? output = current.fitness : output
        }, 0)

        let newPopulation = []
        this.population.forEach((creature, index) => {
            let parentA = this.acceptOrReject(maxFitness)
            let parentB = this.acceptOrReject(maxFitness)
            let child = parentA.crossover(parentB)
            child.mutateDNA(this.mutationRate)
            newPopulation.push(child)
        })
        this.population = newPopulation
        this.generation++
    }

    calcFitness = () => {
        this.population.forEach(creature => creature.calcFitness(this.target))
    }

    getFittest = () => {
        return this.maxFitness
    }
}

export default Population