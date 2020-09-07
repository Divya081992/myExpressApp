var connection = new Postmonger.session();
connection.trigger('ready');

connection.on('initActivity',function(data){
document.getElementById('configuration').value = JSON.stringfy(data,null,2);
});
connection.on('clickedNext',function(){
var configuration = JSON.parse(document.getElelemtById('configuration').value);
connection.trigger('updateActivity',configuration);
});