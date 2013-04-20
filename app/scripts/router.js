define(['jquery', 'underscore', 'backbone', 'helpers/guid'], function($, _, Backbone, GUID){
    var AppRouter = Backbone.Router.extend({
        routes: {
            "message/:id" : "getMessage",
            "*actions" : "defaultRoute"
        }
    });

    var initialize = function (){
        var appRouter = new AppRouter;    
        
        appRouter.on("route:defaultRoute", function (actions){
            var uuid = GUID.generateGUID();
            console.log(uuid);
//            localStorage.setItem('messageGUID', uuid);
        });
        
        appRouter.on("route:getMessage", function (id){
            console.log(id);
//            messageUUID = "";
//            localStorage.removeItem('messageGUID');
//            localStorage.setItem('messageGUID', id);
//            fetchMessageForMessageUUID(id);		
        });
        
        Backbone.history.start();
    }
    
    return {
        initalize: initialize
  };
});