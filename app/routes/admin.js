module.exports = function(application){
    
    application.get('/form_add_noticia', function(req, res){
        application.app.controllers.adminController.form_add_noticia(application, req, res);
    });

    application.post('/noticias/salvar', function(req, res){
        application.app.controllers.adminController.noticias_salvar(application, req, res);
    });
}