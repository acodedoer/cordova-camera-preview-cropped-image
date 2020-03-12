var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("snap").addEventListener('click',snap)  
        let options = {
            x: 10,
            y: 10,
            width: window.screen.width-20,
            height: window.screen.height/3,
            camera: CameraPreview.CAMERA_DIRECTION.BACK,
            toBack: false,
            tapPhoto: true,
            tapFocus: true,
            previewDrag: false,
            storeToFile: false,
            disableExifHeaderStripping: false
        };
            
        CameraPreview.startCamera(options);
        CameraPreview.show()
    },
};

function snap(){
    let image = document.getElementById('snapped');
    CameraPreview.takeSnapshot({quality: 30}, function(base64PictureData){
        imageSrcData = 'data:image/jpeg;base64,' +base64PictureData;
        image.src = imageSrcData;
        let canvas=document.getElementById("canvas");
        let ctx=canvas.getContext("2d");
        let img=new Image();
        img.onload=function(){
            crop();
        }
        img.src=document.getElementById("snapped").src;

        function crop(){
            ctx.drawImage(img,0, img.naturalHeight/3, img.naturalWidth, img.naturalHeight/3, 10, 10, 50, 60);
            document.getElementById("cropped").src=canvas.toDataURL();
        }
    })
}

app.initialize();