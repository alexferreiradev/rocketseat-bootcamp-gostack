export default {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    url: process.env.REDISS_URL || process.env.REDIS_URL || undefined,
}