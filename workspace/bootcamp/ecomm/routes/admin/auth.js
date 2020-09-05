const express = require('express');
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/signup');
const signinTemplate = require('../../views/admin/signin');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.send(signupTemplate(req));
});

router.post('/signup', async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;
    const existingUser = await usersRepo.getOneBy({ email });

    if (existingUser) {
        return res.send('Email in use');
    }

    if (password !== passwordConfirmation) {
        return res.send('Passwords must match');
    }

    // Create a user in our user repo to represent this person
    const user = await usersRepo.create(({ email, password }));

    // Store the id of that user inside the users cookie
    req.session.userId = user.id;

    res.send(req.body);
});

router.get('/signout', (req, res) => {
    req.session = null;
    res.send('You are logged out');
});

router.get('/signin', (req, res) => {
    console.log('Sign in START');
    res.send(signinTemplate());
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await usersRepo.getOneBy({ email });

    if (!user) {
        return res.send('Email not found');
    }

    const validPassword = await usersRepo.comparePasswords(
        user.password, password
    );

    if (!validPassword) {
        return res.send('Invalid password');
    }

    req.session.userId = user.id;

    res.send('Your are signed in');
});

module.exports = router;