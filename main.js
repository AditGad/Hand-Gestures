prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#Camera");
function takesnapshot(){
    Webcam.snap(function(dataURL)
    {document.getElementById("result").innerHTML='<img id="captured_image" src="'+dataURL+'"/>';});
}
console.log("ml5version= ",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pMYj4Pqh_/model.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}
function speak(){
   var synth=window.speechSynthesis;
   speak1=" The First Prediction Is "+prediction1;
   speak2=" The Second Prediction Is "+prediction2;
   var saythis=new SpeechSynthesisUtterance(speak1+speak2);
   synth.speak(saythis);
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,getresult);
}
function getresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Result1").innerHTML=results[0].label;
        document.getElementById("Result2").innerHTML=results[1].label;
        prediction1=results[0].label;
        prediction2=results[1].label;
        speak();
        if( prediction1=="Peace"){
            document.getElementById("emoji1").innerHTML="&#9996;";
        }
        if( prediction1=="Swag"){
            document.getElementById("emoji1").innerHTML="&#129304;";
        }
        if( prediction1=="Victory"){
            document.getElementById("emoji1").innerHTML="&#128077;";;
        }
        if( prediction2=="Peace"){
            document.getElementById("emoji2").innerHTML="&#9996;";
        }
        if( prediction2=="Swag"){
            document.getElementById("emoji2").innerHTML="&#129304;";
        }
        if( prediction2=="Victory"){
            document.getElementById("emoji2").innerHTML="&#128077;";;
        }
        
    }
}
