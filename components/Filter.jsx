import React from 'react'

const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div>
            <h2>Filtrar</h2>
            <div className='filter'>
                <div className='status'>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="NotCompleted">Incompletas</option>
                    </select>
                </div>

                <div className='alpha'>
                    <p>Ordem Alfabética:</p>
                    <button onClick={() => setSort('Asc')}>Ascendente</button>
                    <button onClick={() => setSort('Desc')}>Descendente</button>
                </div>
            </div>
        </div>
    )
}

export default Filter