import React from 'react'
import Population from './../classes/Population'

const App = () => {
    let population = new Population(500, "nahuel", 0.01)

    while(!population.isFinished) {
        population.naturalSelection()
        population.reproduction()
        population.calcFitness()

        console.log(population.generation, population.getFittest())
    }
        
    return (
        <div>
            <p>Genetic algorithm</p>
        </div>
    )
}

export default App