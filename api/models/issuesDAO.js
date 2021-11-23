var knex = require('../database/db');

class issuesDAO{

    async issues() {

        try {
            var result = await knex.select().table('issues');
           
            if(result.length == 0){
                result = {msg: "nenhuma questão cadastrada"};;
                return result;
            }else{
               
                return result;
                
            }

        } catch (error) {
            return error;
        }
        
    }
    async saveIssues(issues){
        console.log(issues);
    
                try {       
                    await knex.insert(issues).table('issues');
                    return { msg: "Arquivo cadastrado com sucesso !!!"}
                } catch (error) {
               
                    return error;
                 
                }
            
       
    }
}

module.exports = new issuesDAO;