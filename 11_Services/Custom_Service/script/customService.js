/*app.factory('stringService',  function(){
	return{
			uppercaseString:function(input){
				if(!input){
					return input;
				}
				return input.toUpperCase();
			}
	};
});*/
app.service('stringService',  function(){
	return{
			uppercaseString:function(input){
				if(!input){
					return input;
				}
				return input.toUpperCase();
			}
	};
});


/*https://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html*/
/*https://stackoverflow.com/questions/23074875/angularjs-factory-and-service*/