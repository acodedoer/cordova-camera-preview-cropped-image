function startCamera(startX, startY, width, height){
    let options = {
        x: startX,
        y: startY,
        width: width,
        height:height,
        camera: CameraPreview.CAMERA_DIRECTION.BACK,
        toBack: false,
        tapPhoto: true,
        tapFocus: true,
        previewDrag: false,
        storeToFile: false,
        disableExifHeaderStripping: false
    };

    console.log("called")

    CameraPreview.startCamera(options);
    CameraPreview.show()
}

function snapAndCrop(snapped, mycanvas, cropped){
    let image = document.getElementById(snapped);
    CameraPreview.takeSnapshot({quality: 30}, function(base64PictureData){
        imageSrcData = 'data:image/jpeg;base64,' +base64PictureData;
        image.src = imageSrcData;
        var canvas=document.getElementById(mycanvas);
        var ctx=canvas.getContext("2d");
        var img=new Image();
        img.onload=function(){
            crop();
        }
        img.src=document.getElementById(snapped).src;
        canvas.height = window.screen.height/3
        canvas.width = window.screen.height/3

        function crop(){
            ctx.drawImage(img,0, (img.height-image.width)/2, img.width, image.width,0, 0, canvas.width, canvas.height);
            document.getElementById(cropped).src=canvas.toDataURL();
        }
    })
}