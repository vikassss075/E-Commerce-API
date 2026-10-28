const allUsers = (req, res)=>{
    res.send('Fetching all users');
};

const newUser = (req, res)=>{
    res.send('new user created');
};

const userById = (req,res)=>{

    const id = req.params.id;
    res.send(`Fetching user with ID: ${id}`)
};

module.exports ={

    allUsers,
    newUser,
    userById
}
