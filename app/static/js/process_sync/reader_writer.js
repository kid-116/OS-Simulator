var flag = 0, count = 99; k = 0;

$(document).ready(function () {
    $('#writer').click(function writer() {
        flag = 0;
        count = 0;
        document.getElementById("read1").style.visibility = 'hidden';
        document.getElementById("read2").style.visibility = 'hidden';
        document.getElementById("read3").style.visibility = 'hidden';
        document.getElementById("read4").style.visibility = 'hidden';

        document.getElementById("textarea1").style.visibility = 'hidden';
        document.getElementById("textarea2").style.visibility = 'hidden';
        document.getElementById("textarea3").style.visibility = 'hidden';
        document.getElementById("textarea4").style.visibility = 'hidden';

        document.getElementById("read11").style.visibility = 'hidden';
        document.getElementById("read12").style.visibility = 'hidden';
        document.getElementById("read13").style.visibility = 'hidden';
        document.getElementById("read14").style.visibility = 'hidden';

        document.getElementById("writer1").style.visibility = 'visible';
        document.getElementById("stop").style.visibility = 'visible';

        document.getElementById("textarea").disabled = false;
    });

    const reader = function reader() {
        document.getElementById("textarea").disabled = true;

        var n1 = document.getElementById('textarea');
        var n3 = "";
        flag++;
        var n = flag % 5;
        console.log("reader", flag);
      
        if (count == 1) {
            document.getElementById('textarea').style.background = "#E0E0E0 ";
            if (n > 0) {
                document.getElementById('textarea1').value = '';
                var n2 = document.getElementById('textarea1');
                n2.value = n1.value;
                document.getElementById("textarea1").style.visibility = 'visible';
                document.getElementById("read11").style.visibility = 'visible';
            }
            if (n > 1) {
                document.getElementById('textarea2').value = '';
                var n2 = document.getElementById('textarea2');
                n2.value = n1.value;
                document.getElementById("textarea2").style.visibility = 'visible';
                document.getElementById("read12").style.visibility = 'visible';
            }
            if (n > 2) {
                document.getElementById('textarea3').value = '';
                var n2 = document.getElementById('textarea3');
                n2.value = n1.value;
                document.getElementById("textarea3").style.visibility = 'visible';
                document.getElementById("read13").style.visibility = 'visible';
            }
            if (n > 3) {
                document.getElementById('textarea4').value = '';
                var n2 = document.getElementById('textarea4');
                n2.value = n1.value;
                document.getElementById("textarea4").style.visibility = 'visible';
                document.getElementById("read14").style.visibility = 'visible';
            }
        }
        else if (count == 99)
            alert("Nothing to read!" + " Click on writer, to start writing");
        else {
            alert("Writer is still writing!" + " Click on stop to stop writing");
            alert("Reader waiting for writer to finish!!");
        }
    }

    $('#reader').click(function() {
      reader();
    });

    $('#stop').click(function stop() {
        count = 1;
        document.getElementById("writer1").style.visibility = 'hidden';
        document.getElementById("stop").style.visibility = 'hidden';
    });
});
