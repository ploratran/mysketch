export const config = {
    "dev": {
      "url": process.env.MONGO_DEV_URL,
      "localhost": "http://localhost:5000",
    },
    "jwt": process.env.JWT_SECRET
}
