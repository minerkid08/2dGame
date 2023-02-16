try{
	var canvas = document.getElementById("board");
	var ctx = canvas.getContext("2d");
	
	var gridSize = 32;
	
	var colors = ["#00FFFF", "#FFFF00", "#800080", "#00FF00", "#FF0000", "#0000FF", "#FF7F00", "#808080"];
	
	var log = "";
	
	class Vector{
		constructor(_x,_y){
			this.x = _x;
			this.y = _y;
		}
	}
	class Leaf{
		constructor(_size, _pos){
			this.pos = _pos;
			this.size = new Vector(_size.x, _size.y);
			this.map = new Array(_size.x);
			for(var x = 0; x < _size.x; x++){
				this.map[x] = new Array(_size.y);
				for(var y = 0; y < _size.y; y++){
					this.map[x][y] = 7;
				}
			}
		}
		setMap(stg){
			this.map = stg;
		}
		draw(offset){
			for(var x = 0; x < this.size.x; x++){
				for(var y = 0; y < this.size.y; y++){
					ctx.fillStyle = (this.map[x][y].color == null ? colors[7] : this.map[x][y].color);
					ctx.fillRect(
						(x + offset.x + (this.pos.x * this.size.x)) * gridSize, 
						(y + offset.y + (this.pos.y * this.size.y)) * gridSize, 
						gridSize, gridSize
					);
				}
			}
		}
	}
	class Map{
		constructor(){
			this.leafs = [];
			this.leafGrid = [];
		}
		setMap(map){
			this.leafs = [];
			this.leafGrid = [];
			
			var grid = JSON.parse(map);
			
			var leafSize = 5;
			
			var leafGridSize = Math.ceil(grid.length / leafSize);
			
			this.leafGrid.length = leafGridSize;
			for(var lx = 0; lx < leafGridSize; lx++){
				this.leafGrid[lx] = [];
				this.leafGrid[lx].length = leafGridSize;
				for(var ly = 0; ly < leafGridSize; ly++){
					var currentLeaf = new Leaf(new Vector(leafSize, leafSize), new Vector(lx, ly));
					var leafMap = [];
					leafMap.length = leafSize;
					for(var mx = 0; mx < leafSize; mx++){
						leafMap[mx] = [];
						leafMap[mx].length = leafSize;
						for(var my = 0; my < leafSize; my++){
							leafMap[mx][my] = {};
							if(grid[(leafSize * lx) + mx] != null){
								if(grid[(leafSize * lx) + mx][(leafSize * ly) + my] != null){
									leafMap[mx][my].color = colors[grid[(leafSize * lx) + mx][(leafSize * ly) + my]];
								}
							}			
						}
					}
					currentLeaf.setMap(leafMap);
					this.leafGrid[lx][ly] = this.leafs.length;
					this.leafs.push(currentLeaf);
				}
			}
			log += this.leafs.length;
			//alert(JSON.stringify(this.leafs));
		}
		draw(){
			for(var i = 0; i < this.leafs.length; i++){
				this.leafs[i].draw(new Vector(0,0));
			}
		}
	}
	
	class World{
		
	}
	
	class EntityBase{
		constructor(_pos, _cpos){
			this.pos = _pos;
			this.cpos = _cpos;
		}
		start(){
			
		}
		update(){
			
		}
		keyPress(event){
			
		}
	}
	class box{
		
	}
	
	var map = new Map();
	map.setMap('[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,7]]');
	map.draw(new Vector(0,0));
	//alert("a");
	document.getElementById("err").innerHTML = log;
}catch(a){
    document.getElementById("err").innerHTML = a;
}