var http=require('http');  
//get 请求外网  
http.get('http://datainfo.duapp.com/shopdata/userinfo.php',function(req,res){  
    var html='';  
    req.on('data',function(data){  
        html+=data;  
    });  
    req.on('end',function(){  
        console.info(html);  
    });  
});  

var server = http.createServer(function(request,response){
	
})