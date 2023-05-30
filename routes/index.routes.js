    const express = require('express');
    const router = express.Router();

    module.exports = router;

    router.use('/api/vi/posts',require('./post.routes.js'));
