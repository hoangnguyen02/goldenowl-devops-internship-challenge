const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    const responseJson = {
        message: 'Welcome warriors to Golden Owl! (feature branch test)',
    }
    res.json(responseJson)
})

module.exports = router
