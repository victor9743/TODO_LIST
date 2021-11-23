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
            
                try {       
                    await knex.insert(issues).table('issues');
                    return { msg: "Questão cadastrada com sucesso !!!"}
                } catch (error) {
               
                    return error;
                 
                }  
    }

    async buscarIssue(id){
        try {
            
            var result = await knex.select().where({id}).table('issues');
          
            if( result.length >0 ){
                return {msg: true , id: result[0].id, issue: result[0].desc_issues, create_at: result[0].create_at, todo: result[0].todo, doing: result[0].doing, done: result[0].done};
            }else{

                return {msg: false}
            }

        } catch (error) {
            return error;
        }
    }
    async upgradeIssue(id,desc_issues, create_at, todo, doing, done){

        console.log("dao", desc_issues);
        try {
            
            var issue_id = await this.buscarIssue(id);
              
                var issueUpgrade ={};


                issueUpgrade.desc_issues = desc_issues;
                issueUpgrade.create_at = create_at;
                issueUpgrade.todo = todo;
                issueUpgrade.doing = doing;
                issueUpgrade.done = done;
                console.log(issueUpgrade);
                try {
                    await knex.update(issueUpgrade).where({id : id}).table("issues");

                    return {status: true}
                    
                } catch (error) {

                    return {status: false, err: error}
                    
                }
                

        } catch (error) {
            
            console.log(error);
    
        }

    }
}

module.exports = new issuesDAO;