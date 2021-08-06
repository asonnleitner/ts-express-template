import * as express from 'express'

const app = express.default()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello')
})

const PORT = process.env.PORT || 3000

console.log('Na jehličí')

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`)
})
