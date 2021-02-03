const config = {
    db: {
        COSMOSDB_HOST: process.env.COSMOSDB_HOST,
        COSMOSDB_PORT: process.env.COSMOSDB_PORT,
        COSMOSDB_DBNAME: process.env.COSMOSDB_DBNAME,
        COSMOSDB_USER: process.env.COSMOSDB_USER,
        COSMOSDB_PASSWORD: process.env.COSMOSDB_PASSWORD
    }
}

export default config;