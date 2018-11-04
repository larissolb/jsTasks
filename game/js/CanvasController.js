class CanvasController {
    createCanvas(elemId){
        let field = document.getElementById(elemId);
        this.canvas = document.createElement('canvas');
        this.canvas.height = 966; //размеры нужно высчитывать исходя из размера лабиринта
        this.canvas.width = 966;
        this.canvas_context = this.canvas.getContext('2d');
        field.appendChild(this.canvas);
    }
    
    generateImage(image){
        // let img = document.createElement('img');
        // img.setAttribute('src', image.path);
        console.log("generateImage");
        let img = new Image();
        img.src = image.path;

        let self = this;
        img.onload = function () { // отрисовка после подгрузки изображения
            self.canvas_context.drawImage(img,
                image.coord[0],
                image.coord[1]
            );
        };
    }

    clearImage(image){
        this.canvas_context.fillStyle = "#fff";
        this.canvas_context.fillRect(
            image.coord[0],
            image.coord[1],
            21, 21
            );
    }
    
    getCollision(image){
        // getImageData ImageData
        let up = this.canvas_context.getImageData(
            image.coord[0], image.coord[1]-3, 21, 3
        ).data;
        let rigth = this.canvas_context.getImageData(
            image.coord[0]+21, image.coord[1], 3, 21
        ).data;
        let left = this.canvas_context.getImageData(
            image.coord[0]-3, image.coord[1], 3, 21
        ).data;
        let down = this.canvas_context.getImageData(
            image.coord[0], image.coord[1]+21, 21, 3
        ).data;
        return [
            this.checkCoord(up),
            this.checkCoord(rigth),
            this.checkCoord(down),
            this.checkCoord(left)
        ];
    }
  
    checkCoord(arr){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 255){
                return arr[i];
            }
        }
        return 255;
    }
    
    

}

