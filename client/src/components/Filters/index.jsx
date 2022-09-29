function Filters(){
    return(
        <div>
            <select>
                <option value="all">...</option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - Z</option>
            </select>

            <select>
                <option value="all">...</option>
                <option value="api">Existentes</option>
                <option value="bd">Creados</option>
            </select>

            <select>
                <option value="genres">Generos</option>
            </select>

            <select>
                <option value="rating">...</option>
                <option value="asc">Más populares</option>
                <option value="desc">Menos populares</option>
            </select>
        </div>
    )
}

export default Filters