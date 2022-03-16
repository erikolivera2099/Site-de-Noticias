module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controllers.homeController.home(application, req, res)
    });
}