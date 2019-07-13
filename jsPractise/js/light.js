function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "res/pic_bulboff.gif"
    } else {
      pic = "res/pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
  }

function show(){
  document.getElementById("demo").style.display='block'
}