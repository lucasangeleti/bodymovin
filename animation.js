   
 var params = {
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path "https://raw.githubusercontent.com/lucasangeleti/bodymovin/main/data.json"
       
    };

    var anim;

    anim = lottie.loadAnimation(params);

