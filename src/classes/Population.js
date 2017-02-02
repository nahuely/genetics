import DNA from './DNA'

class Population {
    constructor(popSize, target, mutationRate) {
        this.population = []
        this.mutationRate = mutationRate
        this.popSize = popSize
        this.DNALen = target.length
        this.target = target

        for(let x = 0; x < this.popSize; x++) {
            this.population.push(new DNA(this.DNALen))
        }

        this.calcFitness()
    }

    naturalSelection() {
        let matingPool = []
        let maxFitness = 0
        let totalFitness = 0;
        this.population.forEach(creature => {
            if(creature.fitness > maxFitness) maxFitness = creature.fitness
            totalFitness += creature.fitness
        })

        this.population.forEach((creature, index) => {
            let reproductionPercent = (creature.fitness / totalFitness) * 100
            for(let x = 0; x < reproductionPercent; x++) {
                matingPool.push(creature)
            }
        })
    }

    reproduction() {

    }

    calcFitness() {
        this.population.forEach(creature => creature.calcFitness(this.target))
    }
}

export default Population