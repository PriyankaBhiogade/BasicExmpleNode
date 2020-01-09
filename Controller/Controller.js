
class Controller{
    helloWorld(req,res){
         res.send("Hello World");
    }
}
module.exports = new Controller();