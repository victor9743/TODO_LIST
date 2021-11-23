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
    async newIssue(req, res){

        if((req.body.todo == "true" && req.body.doing == "false" && req.body.done == "false") || (req.body.todo == "false" && req.body.doing == "true" && req.body.done == "false") || (req.body.todo == "false" && req.body.doing == "false" && req.body.done == "true") || (req.body.todo == "false" && req.body.doing == "false" && req.body.done == "false")){
            var issues = req.body;
            try{
                var result = await todoDAO.saveIssues(issues);
    
                res.json(result)
    
            }catch(error){
                res.status(400);
               
               res.json({msg: "error"});
    
            }
        }else{
            res.status(400);
            res.json({msg: "Não é permitido armazenar mais de um campo com o valor 'true'"});
      }
      
    }

    async buscarIssue(req, res){
       var id = req.params.id;
        
        if(id != undefined || id[0] != " " || id != ""){

            var result = await todoDAO.buscarIssue(id);
    
            if(result.msg == true){
                res.json({msg: result});

            
            
            }else{
                res.json({msg: false});
            }

        }else{
            res.json({msg : "erro"})
        }
    
    }
    async editarIssue(req, res){

       

        var {desc_issues, create_at, todo, doing, done} = req.body;
        var id = req.params.id;
        
 
        // verifiacar se o id está vazio ou undefined
        if(id == "" || id == undefined || id[0]==" "){
             res.json({msg : "erro"});
         }else{
            // verificar id 
            try{
                var result = await todoDAO.buscarIssue(id);
                     
                if(result.msg == true){                      
                    try {
                        console.log(desc_issues);
                        var result = await todoDAO.upgradeIssue(id,desc_issues, create_at, todo, doing, done);

                        res.json({msg: "Atualizado"});
                    } catch (error) {
                        res.json({msg: result.msg});
                    }          
                
                }else{
                    res.json({msg: "false"});
                }

            }catch(error){
                res.send(error);
        
            }      

          }
          
        
    }

}
module.exports = new todoList();