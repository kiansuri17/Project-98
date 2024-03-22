Webcam.set({
    with: 350
    height : 300
    image_format : 'png'
    png_quality : 90
});

camera = document.getElementById("camera")

Webcam.attach ('#camera')

function take_snapshot ()
{
    Webcam.snap(function(data_uri)) {
        document.getElementById("result").innerHTML = '<img id ="capurted_image" src="'+data_uri'"
    }
}


function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img , gotResult);
}

function gotResult(error, result) {
    if (error){
        console.error(error)
    } else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML = results[0].label
        document.getElementsById("result_object_accuracy").innerHTML = result[0].confidence.tofixed(3)
    }
    }
