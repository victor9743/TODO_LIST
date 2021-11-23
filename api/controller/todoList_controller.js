var todoDAO = require("../models/issuesDAO");

class todoList{
    async listarIssues(req, res){
        try {
            var result = await todoDAO.issues();

            res.json(result)
            

        } catch (error) {
            res.status(400);
            res.json({msg: "error"});

        }
    }
    async newissue(req, res){
        
      
        var issues = req.body;


        try{
            var result = await todoDAO.saveIssues(issues);

            res.json(result)

        }catch(error){
            res.status(400);
           
           res.json({msg: "error"});

        }

    }

}
module.exports = new todoList();