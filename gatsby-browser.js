require("./src/styles/global.css")

exports.onRouteUpdate = () => {
    // Direct Chat Link
    // https://tawk.to/chat/tawkToPropertyId/tawkToKey
    
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/603fcfd91c1c2a130d649043/1evsk7qgq';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
        console.log("Chat loaded!")
    })();

}