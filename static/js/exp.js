function rst() {
    document.getElementById("sh").style.display = "none"; //to remove the result section on reset or body onload
}

function showdiv() { // called when submit button is clicked
    var x = document.getElementById("frm"); // get data from form with id "frm"
    var v1 = x.elements[0].value; // v1 stores decimal number as string
    var v2 = x.elements[1].value; // v2 stores number of exponents as string
    var flag = 1;
    if (v1 == "" || v2 == "") //checks if the fields are non-empty
    {
        window.alert("SOME FIELDS ARE EMPTY, ENTER NUMBER"); //displays alert if any field is left empty
    } else if (isNaN(v1) == true || isNaN(v2) == true) {
        window.alert("ENTER NUMBER, NOT A STRING");
    } else if (v2.indexOf('.') > -1) {
        window.alert("ENTER POSITIVE INTEGER FOR NUMBER OF BITS FOR EXPONENTS");
    } else { //goes here if all fields are non-empty
        var k = parseInt(v2); //k stores number of bits for exponent as integer
        var v3 = document.getElementById("sl"); // to get value from dropdown
        var v4 = v3.options[v3.selectedIndex].value; // v4 stores the value from dropdown
        if (v4 == "8" && (k > 6 || k <= 0)) //displays alert if number of bits for exponent is 0 or >6 or >62 or >30
        {
            window.alert("Enter number of bits for exponent between 1 to 6");
        } else if (v4 == "32" && (k > 30 || k <= 0)) {
            window.alert("Enter number of bits for exponent between 1 to 30");
        } else if (v4 == "64" && (k > 62 || k <= 0)) {
            window.alert("Enter number of bits for exponent between 1 to 62");
        } else {
            if (v4 == "8") {
                document.getElementById("repr").innerHTML = "8-BIT BINARY REPRESENTATION :";
            }
            if (v4 == "32") {
                document.getElementById("repr").innerHTML = "32-BIT BINARY REPRESENTATION :";
            }
            if (v4 == "64") {
                document.getElementById("repr").innerHTML = "64-BIT BINARY REPRESENTATION :";
            }
            v1 = v1 + ".00"
            v1 = v1.split(".");
            var ii = v1[0]; // i1 contains integer part of v1 as string  
            var ff = v1[1]; //ff contains fraction part of v1 as sttring
            var sn = ""; // stores sign bit
            var i = parseInt(ii); //i contains integer part of v1 as integer
            if (i >= 0) {
                sn = "0";
            } else {
                sn = "1";
                i = -1 * i;
            }
            var f = parseInt(ff); //convert the fraction to integer from string
            var s = (i >>> 0).toString(2); //binary representation of integer part
            var len = ff.length; //length of fractional part
            var r = Math.pow(10, len); // calculate actual power of 10 to divide the fractional part to get the real fraction as floating point number
            var va = f / r;
            var p1 = s.substring(1, s.length); //p1 contains the binary representation of integer part except the msb to be used in normalized representation
            var pwr = s.length - 1; // calculate the power of 2 in normalized representation
            var ss = ""; // stores the binary representation of fraction part
            var bass = Math.pow(2, k - 1) - 1; // calculate the bias
            while (1) // calculating the binary representation for fractional part
            {
                va = va * 2;
                var bt = va.toString();
                var fbt = parseInt(bt);
                if (fbt == 1) {
                    va = va - fbt;
                    ss = ss + '1';
                } else {
                    ss = ss + '0';
                }
                if (va == 0) {
                    break;
                }
            }
            var normm = s[0] + "." + p1 + ss; // normalized representation without power
            var manti = normm.substring(2, normm.length); // gettng mantissa in binary form
            var mantl = manti.length; // length of mantissa
            var pr = normm + " * 2 power " + pwr.toString(); // normalized representation with power
            var exp = bass + pwr; //exponent
            var bexp = (exp >>> 0).toString(2); // binary representation for exponent
            var lexp = bexp.length; //length of exponent
            var maxexp = Math.pow(2, k) - 1; //calculating the max possible exponent
            var ee = "NONE"; // stores error in exponent representation
            var em = "NONE"; // stores error in mantissa representation
            var er = "NONE"; //stores error in number representation
            if (v4 == "8") //when 8-bit representation similar for 32 and 64 bit representation
            {
                var r8 = "" //stores 8-bit representaion
                r8 = r8 + sn.fontcolor("green"); //adding sign bit
                var bman = 8 - k - 1; //calculating the number of bits left for mantissa
                var maxxex = Math.pow(2, k) - 2 - bass; //max possible exponent
                var maxxm = 2 - (1 / Math.pow(2, bman));
                var maxxx = maxxm.toString() + " * 2 power " + maxxex.toString(); //max number that can be represented
                var minnn = "-" + maxxx;
                document.getElementById("maxx").innerHTML = maxxx; //min number that can be represented
                document.getElementById("minn").innerHTML = minnn;
                var minnr = -1 * bass;
                var maxxr = bass;
                var rngg = minnr.toString() + " to " + maxxr.toString(); //range of exponents
                document.getElementById("rexpp").innerHTML = rngg;
                if (lexp > k) // adding the exponent bit to the representation
                {
                    er = "THIS NUMBER CANNOT BE REPRESENTED BY GIVEN SPECIFICATIONS"
                    ee = "EXPONENT OVERFLOW"; //when exponent> max possoble exponent
                    r8 = r8 + bexp.substring(lexp - k, lexp).fontcolor("blue");
                } else if (lexp <= k) {
                    for (var z = 0; z < k - lexp; z++) {
                        r8 = r8 + "0".fontcolor("blue");
                    }
                    r8 = r8 + bexp.fontcolor("blue");
                }

                if (bman < mantl) //adding the mantissa to the representation
                {
                    em = "BITS ALOTTED FOR MANTISSA TOO LESS TO REPRESENT WHOLE MANTISSA";
                    er = "THIS NUMBER CANNOT BE REPRESENTED BY GIVEN SPECIFICATIONS" //when bits left for mantissa is less than the total bits for mantissa
                    r8 = r8 + manti.substring(0, bman).fontcolor("red");;
                } else if (bman >= mantl) {
                    r8 = r8 + manti.fontcolor("red");
                    for (var y = 0; y < bman - mantl; y++) {
                        r8 = r8 + "0".fontcolor("red");
                    }
                }
                document.getElementById("8btr").innerHTML = r8;
                document.getElementById("nrr").innerHTML = er;
                document.getElementById("err").innerHTML = ee;
                document.getElementById("mrr").innerHTML = em;
            }
            if (v4 == "32") //similar to 8-bit
            {
                var r32 = ""
                r32 = r32 + sn.fontcolor("green");
                var bman = 32 - k - 1;
                var maxxex = Math.pow(2, k) - 2 - bass;
                var maxxm = 2 - (1 / Math.pow(2, bman));
                var maxxx = maxxm.toString() + " * 2 power " + maxxex.toString();
                var minnn = "-" + maxxx;
                document.getElementById("maxx").innerHTML = maxxx;
                document.getElementById("minn").innerHTML = minnn;
                var minnr = -1 * bass;
                var maxxr = bass;
                var rngg = minnr.toString() + " to " + maxxr.toString();
                document.getElementById("rexpp").innerHTML = rngg;
                if (lexp > k) {
                    er = "THIS NUMBER CANNOT BE REPRESENTED BY GIVEN SPECIFICATIONS"
                    ee = "EXPONENT OVERFLOW";
                    r32 = r32 + bexp.substring(lexp - k, lexp).fontcolor("blue");
                } else if (lexp <= k) {
                    for (var z = 0; z < k - lexp; z++) {
                        r32 = r32 + "0".fontcolor("blue");
                    }
                    r32 = r32 + bexp.fontcolor("blue");
                }
                if (bman < mantl) {
                    em = "BITS ALOTTED FOR MANTISSA TOO LESS TO REPRESENT WHOLE MANTISSA";
                    er = "THIS NUMBER CANNOT BE REPRESENTED BY GIVEN SPECIFICATIONS"
                    r32 = r32 + manti.substring(0, bman).fontcolor("red");
                } else if (bman >= mantl) {
                    r32 = r32 + manti.fontcolor("red");
                    for (var y = 0; y < bman - mantl; y++) {
                        r32 = r32 + "0".fontcolor("red");
                    }
                }
                document.getElementById("8btr").innerHTML = r32;
                document.getElementById("nrr").innerHTML = er;
                document.getElementById("err").innerHTML = ee;
                document.getElementById("mrr").innerHTML = em;
            }
            if (v4 == "64") {
                var strr = ""
                var expp = exp;
                while (expp > 0) {
                    if (expp % 2 == 0) {
                        strr = strr + "0";
                    } else {
                        strr = strr + "1";
                    }
                    expp = expp / 2;
                    var stt = expp.toString();
                    var ttt = stt.split(".");
                    var tww = ttt[0];
                    expp = parseInt(tww);

                }
                var splitst = strr.split("");
                var revr = splitst.reverse();
                strr = revr.join("");
                var llexp = strr.length;
                var r64 = ""
                r64 = r64 + sn.fontcolor("green");
                var bman = 64 - k - 1;
                var maxxex = Math.pow(2, k) - 2 - bass;
                var maxxm = 2 - (1 / Math.pow(2, bman));
                var maxxx = maxxm.toString() + " * 2 power " + maxxex.toString();
                var minnn = "-" + maxxx;
                document.getElementById("maxx").innerHTML = maxxx;
                document.getElementById("minn").innerHTML = minnn;
                var minnr = -1 * bass;
                var maxxr = bass;
                var rngg = minnr.toString() + " to " + maxxr.toString();
                document.getElementById("rexpp").innerHTML = rngg;
                if (llexp > k) {
                    er = "THIS NUMBER CANNOT BE REPRESENTED BY GIVEN SPECIFICATIONS"
                    ee = "EXPONENT OVERFLOW";
                    r64 = r64 + strr.substring(llexp - k, llexp).fontcolor("blue");
                } else if (llexp <= k) {
                    for (var z = 0; z < k - llexp; z++) {
                        r64 = r64 + "0".fontcolor("blue");
                    }
                    r64 = r64 + strr.fontcolor("blue");
                }
                if (bman < mantl) {
                    em = "BITS ALOTTED FOR MANTISSA TOO LESS TO REPRESENT WHOLE MANTISSA";
                    er = "THIS NUMBER CANNOT BE REPRESENTED BY GIVEN SPECIFICATIONS"
                    r64 = r64 + manti.substring(0, bman).fontcolor("red");
                } else if (bman >= mantl) {
                    r64 = r64 + manti.fontcolor("red");
                    for (var y = 0; y < bman - mantl; y++) {
                        r64 = r64 + "0".fontcolor("red");
                    }
                }
                document.getElementById("8btr").innerHTML = r64;
                document.getElementById("nrr").innerHTML = er;
                document.getElementById("err").innerHTML = ee;
                document.getElementById("mrr").innerHTML = em;
            }
            document.getElementById("bias").innerHTML = bass;
            document.getElementById("sgn").innerHTML = sn;
            document.getElementById("expo").innerHTML = exp;
            document.getElementById("bi").innerHTML = s;
            document.getElementById("bf").innerHTML = ss;
            var tt = "";
            tt = tt + s + "." + ss;
            document.getElementById("bn").innerHTML = tt;
            document.getElementById("mant").innerHTML = manti;
            document.getElementById("bnor").innerHTML = pr;
            document.getElementById("sh").style.display = "block";
        }
    }
}