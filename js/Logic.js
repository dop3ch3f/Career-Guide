
$(function () {
    $("#result").hide();
    $("#pay").hide();
    $("#submit").click(function() {
        event.preventDefault();
        //testing purposes
        console.log("click noted");
        //to assign value of ten to all the checked check-boxes
        $("input[type='checkbox']:checked").each(function(){
             $(this).val("10");
        });
        // function to hide questions div
        $("#question").fadeOut(1000);
       
        //initializing the career variables
        
        $("#pay").fadeIn(1000, function(){
            $("#lie").each(function(){
                $(this).hide();
                console.log("lie hidden");
            });
            $("#lie1").each(function(){
                $(this).hide();
                console.log("lie1hidden");
            });   
        });  
    });
    $("#donate").click(function(){
        

    
        console.log("defaultclicknoted");
        event.preventDefault();
        $("#lie1").each(function(){
            $(this).fadeIn(1000, function(){
               $("#lie1").each(function(){
                    $(this).fadeOut(2000, function(){
                        $("#pay").fadeOut(500);
                        let Med = 0,
                        Comp = 0,
                        Pol = 0,
                        Acct = 0,
                        Econ = 0,
                        MechEng = 0,
                        MarMass = 0,
                        Tart = 0,
                        Agr = 0,
                        Mus = 0,
                        Arch = 0,
                        CivEng = 0;
                    //putting the career variables into an array
                    let topics = [Med,Comp,Pol,Acct,Econ,MechEng,MarMass,Tart,Agr,Mus,Arch,CivEng];
                    let skills = [0,0,0,0,0,0,0,0,0,0];
                    
                    //putting the responses into arrays
                    let s = [$("#s1").val(), $("#s2").val(), $("#s3").val(), $("#s4").val(), $("#s5").val(), $("#s6").val()];
                    let a = [$("#a1").val(), $("#a2").val(), $("#a3").val(), $("#a4").val(), $("#a5").val(), $("#a6").val()];
                    let t = [$("#t1").val(), $("#t2").val(), $("#t3").val(), $("#t4").val(), $("#t5").val(), $("#t6").val(), $("#t7").val(), $("#t8").val(), $("#t9").val(), $("#t10").val(), $("#t11").val(), $("#t12").val(), $("#t13").val(), $("#t14").val(), $("#t15").val(), $("#t16").val(), $("#t17").val(), $("#t18").val(), $("#t19").val(), $("#t20").val(), $("#t21").val(), $("#t22").val(), $("#t23").val(), $("#t24").val(), $("#t25").val()];
                    let v = [$("#v1").val(), $("#v2").val(), $("#v3").val(), $("#v4").val(), $("#v5").val(), $("#v6").val(), $("#v7").val(), $("#v8").val(), $("#v9").val(), $("#v10").val(), $("#v11").val(), $("#v12").val()];
                /* var a = [ "1","2","3"];
                   var y = a.map( x => parseInt(x));
                   console.log(y);
                 */
                    //adding responses to required paths
                   /*Med*/ topics[0] = parseInt(s[0]) + parseInt(s[2]) + parseInt(s[4]) + parseInt(t[0]) + parseInt(t[1]) + parseInt(t[2]) + parseInt(v[0]) + parseInt(t[16]);
                    topics[1] = parseInt(s[0])+ parseInt(s[1])+ parseInt(s[3])+ parseInt(s[4]) +parseInt(s[5]) +parseInt(t[3]) +parseInt(t[4])+ parseInt(t[5])+ parseInt(v[1])+ parseInt(t[16]);
                    topics[2] = parseInt(a[3])+parseInt(a[4])+parseInt(a[5])+parseInt(t[6])+parseInt(t[7])+parseInt(t[8])+parseInt(v[2])+parseInt(t[16]);
                    topics[3] = parseInt(s[0])+ parseInt( a[0])+ parseInt(a[2])+ parseInt(t[9])+ parseInt(t[10])+ parseInt(t[11])+ parseInt(t[16]) +parseInt(v[3]);
                    topics[4] = parseInt(s[0]) +parseInt( a[2]) +parseInt(a[3]) +parseInt(t[9]) +parseInt(t[10]) +parseInt(t[12]) +parseInt(t[13]) +parseInt(v[4]) +parseInt(t[16]);
                    topics[5] = parseInt(s[0]) +parseInt(s[1]) +parseInt(s[3]) +parseInt(s[5]) +parseInt(t[14])+ parseInt(t[10]) +parseInt(t[15]) +parseInt(t[16] ) +parseInt(v[5]);
                    topics[6] = parseInt(a[5]) +parseInt(a[4]) +parseInt(a[3]) +parseInt(t[17]) +parseInt(v[6]) +parseInt(t[16]);
                    topics[7] = parseInt(a[5]) +parseInt(a[4]) +parseInt(a[3]) +parseInt(t[18]) +parseInt(t[19]) +parseInt(t[21]) +parseInt(v[7]);
                    topics[8] = parseInt(s[0]) +parseInt(s[4]) +parseInt(s[2]) +parseInt(t[16]) +parseInt(t[22]) +parseInt(t[23]) +parseInt(v[8]);
                    topics[9] = parseInt(a[5]) +parseInt(a[4]) +parseInt(a[3]) +parseInt(t[18]) +parseInt(t[20]) +parseInt( v[9]);
                    topics[10] = parseInt(s[0]) +parseInt(s[3]) +parseInt( s[5]) +parseInt(t[10]) +parseInt( t[15]) +parseInt(t[16]) +parseInt(t[24]) +parseInt(t[14]) +parseInt(v[10]);
                    topics[11] = parseInt(s[0]) +parseInt(s[1]) +parseInt(s[3]) +parseInt(s[4]) +parseInt(s[5]) +parseInt(t[10]) +parseInt(t[15]) +parseInt(t[16]) +parseInt(t[24]) +parseInt(v[11]);
                    
                    skills[0] = parseInt(a[0])+ parseInt(a[1]) +  parseInt(a[2]) +parseInt(a[3]) +parseInt(a[4]) +parseInt(a[5]) +parseInt(a[6]) +parseInt(a[7]) +parseInt(a[8]) +parseInt(t[17]) +parseInt(t[20]) +parseInt(t[21]) +parseInt(v[2]) +parseInt(v[3]) +parseInt(v[4]) +parseInt(v[6]) +parseInt(v[7]) +parseInt(v[9]) ;
                    skills[1] = parseInt(s[2]) +parseInt(a[0]) +parseInt(a[2]) +parseInt(a[3]) +parseInt(t[0]) +parseInt(t[1]) +parseInt(t[2]) +parseInt(t[9]) +parseInt(t[10]) +parseInt(t[11]) +parseInt(t[12]) +parseInt(t[13]) +parseInt(v[3]) +parseInt(v[4]) +parseInt(v[2]) ;
                    skills[2] = parseInt(s[2]) +parseInt(a[3]) +parseInt(t[0]) +parseInt(t[1]) +parseInt(t[2]) +parseInt(t[5]) +parseInt(t[6]) +parseInt(t[7]) +parseInt(t[17]) +parseInt(t[22]) +parseInt(t[21]) +parseInt(v[0]) +parseInt(v[2]) +parseInt(v[8]);
                    skills[3] = parseInt(a[0]) +parseInt(a[2]) +parseInt(a[3]) +parseInt(s[5]) +parseInt(s[2]) +parseInt(t[0]) +parseInt(t[1]) +parseInt(t[2]) +parseInt(t[6]) +parseInt(t[9]) +parseInt(t[11]) +parseInt(t[10]) +parseInt(t[12]) +parseInt(t[13]) +parseInt(t[17]) +parseInt(t[22]) +parseInt(t[21]) +parseInt(v[0]) +parseInt(v[2]) +parseInt(v[4]) +parseInt(v[8]) ;
                    skills[4] = 70;
                    skills[5] = parseInt(s[2]) +parseInt(a[4]) +parseInt(t[0]) +parseInt(t[1]) +parseInt(t[2]) +parseInt(t[18]) +parseInt(t[19]) +parseInt(t[21]) +parseInt(v[0]) +parseInt(v[8]) ;
                    skills[6] = 80;
                    skills[7] = parseInt(a[2])+ parseInt(a[3]) +  parseInt(a[4]) +parseInt(a[5]) +parseInt(t[6]) +parseInt(t[7]) +parseInt(t[8]) +parseInt(t[9]) +parseInt(t[10]) +parseInt(t[11]) +parseInt(t[12]) +parseInt(t[13]) +parseInt(t[17]) +parseInt(v[2]) +parseInt(v[3]) +parseInt(v[4]) +parseInt(v[6]) +parseInt(v[7]) ;
                    skills[8] = 90;
                    skills[9] = parseInt(a[0])+parseInt(a[2])+parseInt(a[3])+parseInt(t[6])+parseInt(t[7])+parseInt(t[8])+parseInt(t[9])+parseInt(t[10])+parseInt(t[11])+parseInt(t[12])+parseInt(t[13])+parseInt(v[2])+parseInt(v[3])+parseInt(v[4])+parseInt(v[6])+parseInt(v[7]);
                    var data = {
                        labels: ['Medicine','Computing Sci/Eng','Politics','Accounting','Economics','Mechanical Eng','Marketing/Mass Comm','Theatre Arts','Agricultural Sci','Music','Architecture','Civil Eng'],
                        series: [
                            {
                                data: topics
                            }
                        ]
                    };
                
                    
                    var options = {
                        axisX: {
                            labelInterpolationFnc:
                            function(value) {
                                return  value;
                            }
                        }
                    };
                    var responsiveOptions = [
                        ['screen and (min-width:641px) and (max-width:1024px)', {
                            showPoint : true,
                            axisX: {
                                labelInterpolationFnc:
                                function(value) {
                                    return   value;
                                }
                            }
                        }],
                        ['screen and (max-width:640px)', {
                            showLine: true,
                            axisX: {
                                labelInterpolationFnc:
                                function(value) {
                                    return   value;
                                }
                            }
                        }]
                    ];
                
                    new Chartist.Bar('#my-chart', data, options, responsiveOptions);
                
                    var data1 = {
                        labels: ['Public Speaking','Prioritizing','Empathy','Organization','Goal Setting','Fitness','Problem Solving','Writing','Self Discipline','Finances'],
                        series: [
                            {
                                data: skills
                            }
                        ]
                    };
                
                    
                    var options1 = {
                        axisX: {
                            labelInterpolationFnc:
                            function(value) {
                                return  value;
                            }
                        }
                    };
                    var responsiveOptions1 = [
                        ['screen and (min-width:641px) and (max-width:1024px)', {
                            showPoint : true,
                            axisX: {
                                labelInterpolationFnc:
                                function(value) {
                                    return   value;
                                }
                            }
                        }],
                        ['screen and (max-width:640px)', {
                            showLine: true,
                            axisX: {
                                labelInterpolationFnc:
                                function(value) {
                                    return   value;
                                }
                            }
                        }]
                    ];
                
                    new Chartist.Bar('#mychart', data1, options1, responsiveOptions1);
                    let name = $("#name").val();
                    $("#named").html(name);
                        $("#result").fadeIn(1000);
                        $("#lie").html("We've received your donation many thanks.");
                        $("#lie").show();
                    });
               });
            });
        });
       
    });
});
/*this code belongs to dop3ch3f */