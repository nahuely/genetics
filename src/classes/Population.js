import DNA from './DNA'

class Population {
    constructor(popSize, target, mutationRate) {
        this.population = []
        this.mutationRate = mutationRate
        this.popSize = popSize
        this.target = target
        this.maxFitness = 0
        this.generation = 0
        this.matingPool = []
        this.isFinished = false

        for(let x = 0; x < this.popSize; x++) {
            this.population.push(new DNA(this.target.length))
        }

        this.calcFitness()
    }

    naturalSelection = () => {
        this.matingPool = []
        let totalFitness = 0;
        this.population.forEach(creature => {
            if(creature.fitness > this.maxFitness) this.maxFitness = creature.fitness
            if(this.maxFitness === 1) this.isFinished = true
            totalFitness += creature.fitness
        })

        this.population.forEach(creature => {
            let reproductionPercent = Math.floor((creature.fitness / totalFitness) * 100)
            for(let x = 0; x < reproductionPercent; x++) {
                this.matingPool.push(creature)
            }
        })
    }

    reproduction = () => {
        this.population.forEach((creature, index) => {
            let a = Math.floor(Math.random() * this.matingPool.length)
            let b = Math.floor(Math.random() * this.matingPool.length)
            let parentA = this.matingPool[a]
            let parentB = this.matingPool[b]
            let child = parentA.crossover(parentB)
            child.mutateDNA(this.mutationRate)
            this.population[index] = child
        })
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