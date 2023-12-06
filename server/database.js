import express from 'express'
import mysql2 from 'mysql2'
import cors from 'cors'


const app = express()

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "Nike2001.",
    database: "fitness"
})

app.get("/", (req, res)=>{
    res.json('hello there')
})

app.use(express.json())
app.use(cors({origin: true, credentials: true}));

// Get the list of messages for a specific user_id
app.get("/messages/chat/:coachId", (req, res)=>{
    const coachId = req.params.coachId;
    const q = "SELECT * FROM coach_client_message WHERE sender_id = ? OR receiver_id = ?";

    db.query(q, [coachId, coachId], (err, data)=>{
        if(!err){
            return res.json(data);
        }else{
            return res.json(err);
        }
    })
})

app.get("/messages1/chat/:chatId", (req, res)=>{
    const chatId = req.params.chatId;
    // console.log(chatId);
    const q = `SELECT * FROM coach_client_message WHERE coach_client_id = ?`;

    db.query(q, [chatId], (err, data)=>{
        if(!err){
            console.log(data);
            return res.json(data);
        }else{
            return res.json(err);
        }
    })
})

// Get the distinct id of the chat
app.get("/messages/coach/:coachId", (req, res)=>{
    const idIdk = req.params.coachId;
    const q = `SELECT coach_client_id
                FROM coach_client_message
                WHERE sender_id = ? OR receiver_id = ?
                GROUP BY coach_client_id
    ;`

       db.query(q, [idIdk, idIdk], (err, data)=>{
        if(!err){
            return res.json(data);
        }else{
            return res.json(err);
        }
       })
})

app.get("/users1/:chatId/:coachId", (req, res)=>{
    const chatId = req.params.chatId;
    const coachId = req.params.coachId;
    const q = `SELECT DISTINCT users.first_name, users.last_name, users.role
    FROM users 
    JOIN coach_client_message ON users.user_id = coach_client_message.receiver_id OR users.user_id = coach_client_message.sender_id
    WHERE coach_client_message.coach_client_id = ?
    AND users.user_id != ?;
    `

    db.query(q, [chatId, coachId], (err, data)=>{
        if(!err){
            console.log(data);
            return res.json(data);
        }else{
            return res.json(err);
        }
    })
})

//Get the name of the coach given the id is provided
app.get("/users/:userId", (req, res) => {
    const userId = req.params.userId;
    const q = `SELECT first_name
    FROM users
    WHERE user_id = ?`;

    db.query(q, [userId], (err, data) => {
        if (!err) {
            if (data.length > 0) {
                return res.json({ first_name: data[0].first_name });
            } else {
                return res.json({ error: 'User not found' });
            }
        } else {
            return res.json({ error: err.message });
        }
    });
});


//Send new message
app.post("/newMessage", (req, res)=>{
    const q = "INSERT INTO coach_client_message (`message`, `coach_client_id`, `sender_id`, `receiver_id`, `last_update`) VALUES (?)"
    const values = [
        req.body.message,
        req.body.chatId,
        req.body.sender_id,
        req.body.receiver_id,
        req.body.last_update,
    ];

    db.query(q, [values], (err, data)=>{
        if (err) return res.json(err);
        return res.json("Message has been sent successfully.")
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend");
})