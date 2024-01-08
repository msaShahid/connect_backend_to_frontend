import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send('Server is runing on port at 8000');
})

app.get('/api/students', (req,res) => {
    const students = [
        {name: 'Mohammad Shahid',age: 27},
        {name: 'Zesshan Ail',age: 24},
        {name: 'Md Samir',age: 28}
    ]

    res.send(students);
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.error(`App is runing at http://localhost:${port}`);
})