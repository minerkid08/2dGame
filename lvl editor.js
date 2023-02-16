try{
    var canvas = document.getElementById("board");
    var ctx = canvas.getContext("2d");
    
    var code = document.getElementById("code");
    
    var gridSize = 32;
    
    var colors = ["#00FFFF", "#FFFF00", "#800080", "#00FF00", "#FF0000", "#0000FF", "#FF7F00", "#808080"];
    
    var map = [];
    
    class Vector{
        constructor(_x,_y){
            this.x = _x;
            this.y = _y;
        }
    }
    
    function update(event){
	 
        var x = Math.floor(event.clientX/gridSize);
        var y = Math.floor(event.clientY/gridSize);
        if(map.length < x){
            map.length = x;
        }
        if(map[x] == null){
            map[x] = [];
        }
        //alert(y);
        if(map[x].length < y){
            map[x].length = y;
        }
        if(map[x][y] == null){
            map[x][y] = 0;
        }else{
            map[x][y]++;
        }
        if(map[x][y] == 8){
            this.map[x][y] = 0;
        }
        //alert(JSON.stringify(map));
        draw();
    }
    function draw(){
        ctx.fillStyle = colors[7]
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for(var x = 0; x < map.length; x++){
            if(map[x] != null){
                for(var y = 0; y < map[x].length; y++){
                    if(map[x][y] != null){
                        ctx.fillStyle = colors[map[x][y]]
                        ctx.fillRect(x*gridSize,y*gridSize,gridSize,gridSize);
                    }
                }
            }
        }
        code.innerHTML = JSON.stringify(map);
    }
    draw();
}catch(a){
    alert(a);
}