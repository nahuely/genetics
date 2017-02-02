import React from 'react'
import Population from './../classes/Population'

const App = () => {
    let population = new Population(200, "To be or not to be", 0.01)
    console.log(population.naturalSelection())
    
    return (
        <div>
            <p>Genetic algorithm</p>
        </div>
    )
}

export default App