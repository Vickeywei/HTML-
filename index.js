window.onload = function() {
    var textarea = document.getElementById("code");
    var reset = document.getElementById("reset");
    var code = textarea.value;
    var output = document.querySelector(".output");
    var solutiomn = document.getElementById("solution");
    
    function drawOutput() {
        console.log(textarea.value);
        output.innerHTML = textarea.value;
    };
    
    reset.addEventListener("click", function() {
        console.log(textarea.value);
        textarea.value = code;
        drawOutput();
    });
    
    solutiomn.addEventListener("click", function(){
        console.log(textarea.value);
        textarea.value = '<p>A link to my <a href="http://blog.vicky.org.cn" title="vicky的技术博客">vicky的技术博客</a>.</p>';
        drawOutput();
     
    });
    
    
    textarea.addEventListener("input", drawOutput);
    window.addEventListener("load",drawOutput);
  };



  