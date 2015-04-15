function submitThis() {
        if (document.getElementById("txtpetition").value.length < 3) {
            document.getElementById("output").innerHTML = error_pet;
            document.getElementById("txtpetition").focus()
        } else {
            if (document.getElementById("txtquestion").value.length < 3) {
                document.getElementById("output").innerHTML = O0O0OO0;
                document.getElementById("txtquestion").focus()
            } else {
                document.getElementById("txtpetition").readOnly = true;
                document.getElementById("txtquestion").readOnly = true;
                document.getElementById("btnAsk").style.visibility = "hidden";
                document.getElementById("btnNew").style.visibility = "visible";
                document.getElementById("output").innerHTML = "Cheeku thinking...";
                setTimeout(function(){
                    if(answer!="")
                    document.getElementById("output").innerHTML = "Cheeku says : "+"<b>"+answer+"</b>";
                    else
                    {
                        document.getElementById("output").innerHTML = "Cheeku says :";
                        setTimeout(200);
                        document.getElementById("output").innerHTML = "Cheeku says : <i>Arre Bhai Bole na </i>";                        
                        document.getElementById("fader").innerHTML = " <b>Dhoooop!!<b>";
                        
                        $('body').addClass('chenga').fadeIn(-1);
                        function blinker() {
                            $('#fader').fadeIn(500);
                            $('#fader').fadeOut(500);
                            $('#fader').fadeIn(500);
                        }

                        setInterval(blinker, 1000);

                        //$('body').css('background', 'url(../images/dhoop.gif) no-repeat center center fixed').css('background-size','cover').css('background-position-y','-145px');
                    }
                },1500);
                
            }
        }
    }


function reset() {
    $('body').removeClass('chenga');
    answer = "";
    O0000OO = false;
    document.getElementById("fader").innerHTML ="";
    document.getElementById("txtpetition").value = "";
    document.getElementById("txtquestion").value = "";
    document.getElementById("txtpetition").readOnly = false;
    document.getElementById("txtquestion").readOnly = false;
    document.getElementById("btnAsk").style.visibility = "visible";
    document.getElementById("output").innerHTML = "";
    document.getElementById("btnNew").style.visibility = "hidden";
    document.getElementById("txtpetition").focus()
}   

function O000OOO(e) {
    var O0000O0;
    if (window.event) {
        if (window.event.type == "keydown") {
            O00OO00 = -1
        }
        if (window.event.type == "keypress") {
            O00OO00 = window.event.keyCode
        }
        if (parseInt(O00OO00) > 0) {
            O0000O0 = O00OO00
        } else {
            O0000O0 = window.event.keyCode
        }
    } else {
        if (e.type == "keydown") {
            O00O0OO = e.which;
            O00OO00 = -1
        }
        if (e.type == "keypress") {
            O00OO00 = e.which
            alert(O00OO00);
        }
        if (parseInt(O00OO00) > 0) {
            O0000O0 = O00OO00
        } else {
            if ((parseInt(O00O0OO) > 0) && (e.which < 1)) {
                O0000O0 = O00O0OO
            } else {
                O0000O0 = e.which
            }
        }
    }
    return (parseInt(O0000O0))
}

function O00OOO0(e) {
    var O0000O0 = O000OOO(e);
    if ((O0000O0 == 8) && (O0000OO)) {
        O0O000O(e)
    }
}

function O00OOOO(e, textval) {
    if (document.getElementById("txtpetition").readOnly == false) 
    {
        if (document.getElementById("txtpetition").value == "") {
            answer = "";
            O0000OO = false
        }
        O000OOO(e);
        if ((O00OO00 == 58) || (O00OO00 == 13)) {
            document.getElementById("txtquestion").focus();
            if (O00OO00 == 58) {
                textval.value += ":"
            }
            return false
        } else {
            if ((O0000OO) || (O00OO00 == 46)) {
                if (O00OO00 == 46) {
                    O0000OO = !O0000OO
                }
                if ((O00OO00 != 8) && (O00OO00 != 0)) {
                    O0O00O0(e, textval);
                    return false
                }
            } else {
                if ((textval.value.length == 0) && (O00OO00 != 8) && (O00OO00 != 0)) {
                    textval.value += String.fromCharCode(O00OO00).toUpperCase();
                    return false
                }
            }
        }
        return true
    } else {
        return false
    }
}

function O0O00O0(e, textval) {
    if ((O00OO00 != 58) && (O00OO00 != 13)) {
        if ((O00OO00 != 46) && (O00OO00 != 13)) {
            answer += String.fromCharCode(O00OO00)
        }
        var O0OOO0O = textval.value.length;
        if (O0OOO0O < mask.length) {
            O00O0O0 = mask.charAt(O0OOO0O)
        } else {
            O00O0O0 = " "
        }
        document.getElementById("txtpetition").value += O00O0O0;
       // alert(O00O0O0);
    }
}

function O0O000O(e) {
    if (answer.length > 0) {
        answer = answer.substring(0, answer.length - 1)
    }
    if (document.getElementById("txtpetition").length == 0) {
        O0000OO = false
    }
}

function O0O0000(e, textval) {
    O000OOO(e);
    if ((textval.value.length == 0) && (O00OO00 != 0) && (O00OO00 != 8) && (O00OO00 != 63) && (O00OO00 != 13)) {
        textval.value += String.fromCharCode(O00OO00).toUpperCase();
        return false
    }
    if (((O00OO00 == 63) || (O00OO00 == 13)) && (!document.getElementById("txtquestion").readOnly)) {
        document.getElementById("txtquestion").blur();
        submitThis();
        if (O00OO00 == 63) {
          textval.value += "?"
        }
        return false
    }
    return true
};