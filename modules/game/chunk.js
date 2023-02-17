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
  export { leaf };
