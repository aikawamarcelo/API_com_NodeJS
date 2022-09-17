const { routes } = require("../app");

const users = [
    {
        id:1,
        name:"Marcelo Aikawa",
        email:"marceloaikawa@hotmail.com"
    }
]

class UserController{
    
    store(req, res){
       const {name, email} = req.body;
       if(!name || !email){
        return res.status(400).json({message: "Nome e E-mail são obrigatórios"});
       }

       const newId = users[users.length -1].id + 1;

       const newUser = {
        id: newId,
        name: name,
        email: email
    }

    users.push(newUser)
    return res.status(200).json({message: "User created"});

    }

    

    index(req,res){
    
        return res.status(200).json(users);
    
    }

     show(req, res){
        const {id }= req.params
        //const = req.params.id
        if(!id){
            return res.status(400).json({
                message:"Id is invalid"
            })

        }
        
        const currentUser = users.find((user) => user.id === parseInt(id));

        if(!currentUser){
            return res.status(404).json({message: "User not found..."});
        }
        return res.status(200).json(currentUser);
    }

    update(req, res){

        const {id }= req.params
        const {name, email}= req.body
        //const = req.params.id
        if(!id){
            return res.status(400).json({
                message:"Id is invalid"
            })

        }

        const currentUserIndex = users.findIndex((user) => user.id === parseInt(id));
        if(!name || !email){
            return res.status(400).json({message: "Nome e E-mail são obrigatórios"});
           }

           if(!id){
            return res.status(400).json({
                message:"Id is invalid"
            })

        }   

        if(!currentUserIndex === -1){
            return res.status(404).json({message: "User not found..."});
        }
        //return res.status(200).json(currentUser);
        users[currentUserIndex].name = name
        users[currentUserIndex].email = email;

        return res.status(200).json({message: "User updated"});
    }

    delete(){
      
    }
}

    module.exports = new UserController();

