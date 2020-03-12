var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("snap").addEventListener('click',function(){snapAndCrop("snapped","canvas","cropped")})
        startCamera((window.innerWidth - (window.screen.height/3))/2, 10, window.screen.height/3, window.screen.height/3)
        console.log("main")
    }
};


app.initialize();