function tRexBot(){
        var uiMsg = "Current Speed: + "+Runner.instance_.currentSpeed+"<br><hr><br>Detected Obstacle Count:" + Runner.instance_.horizon.obstacles.length + " <br><ul>";
        
        var trexHitBox = {
            x0: Runner.instance_.tRex.xPos,
            y0: Runner.instance_.tRex.yPos,
            x1: Runner.instance_.tRex.xPos + Runner.instance_.tRex.config.width,
            jumpBefore: 100 + ((Runner.instance_.currentSpeed - 6) / 0.1)
        }
        
        for(var x = 0; x < Runner.instance_.horizon.obstacles.length; x++){
            uiMsg += "<li>Obstacle "+(x+1)+" position:"+Runner.instance_.horizon.obstacles[x].xPos+" size: "+Runner.instance_.horizon.obstacles[x].size+"</li>";
            
            if(Runner.instance_.horizon.obstacles[x].xPos < trexHitBox.jumpBefore && Runner.instance_.horizon.obstacles[x].xPos > 40){
                Runner.instance_.tRex.startJump();
            }
            
            if(Runner.instance_.horizon.obstacles[x].xPos + Runner.instance_.horizon.obstacles[x].width/2 < 50){
                var _cancelDrop = false
                for(var z = 0; z < Runner.instance_.horizon.obstacles.length; z++){
                    if(z > 0 && Runner.instance_.horizon.obstacles[z].xPos < 70  && Runner.instance_.horizon.obstacles[z].xPos + Runner.instance_.horizon.obstacles[z].width > (Runner.instance_.horizon.obstacles[z].size*25)/2 + 70){
                        _cancelDrop = true;
                    }
                }
                if(!_cancelDrop)
                {
                    Runner.instance_.tRex.setSpeedDrop();
                }
            }
            
        }
        uiMsg += "</ul>";
        
        document.getElementById("main-message").innerHTML = uiMsg;
    
}
document.getElementById("buttons").innerHTML = '<button style="background-color:green;float:left;" class="blue-button text-button" onclick="if(Runner.instance_.currentSpeed<40){Runner.instance_.currentSpeed++}">Increase Speed</button><button style="background-color:red;float:right;" class="blue-button text-button" onclick="if(Runner.instance_.currentSpeed>7){Runner.instance_.currentSpeed--}">Decrease Speed</button>'
var _int = setInterval(tRexBot,0);
