function playAnimation() {
    frameStr = document.getElementById("frameArea").value;
    if (frameStr.indexOf("\r\n") != -1) {
      frameSeq = frameStr.split("=====\r\n");
    }
    else {
      frameSeq = frameStr.split("=====\n");
    }
    currentFrame = 0;
    showNextFrame();
  }
  
  function showNextFrame() {
    document.getElementById("displayArea").value = frameSeq[currentFrame];
    currentFrame = (currentFrame+1) % frameSeq.length;
    timer = setTimeout("showNextFrame();", 250);
  }
  
  function stopAnimation() {
    clearTimeout(timer);
  }