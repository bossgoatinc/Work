document.getElementById('smallhouse').style.visibility='hidden';

					var bankAccount = 0;
					var tax = 0.66;
					var work = 0;
					var skill = 0;
					var job = 40;
						function doWork() {
							work++;
							skill++;
							document.getElementById('demo1').innerHTML = "$" + bankAccount;
							document.getElementById('demo2').innerHTML = work + "0% complete";
							document.getElementById("demo3").innerHTML = "Skill Level: " + skill;
							if (work == 10) {
								bankAccount += (job * tax);
                                
								work = 0;
                                
							}
						}

						 
                        function lowTax() {
                        	if (bankAccount >= 100) {    
                            	bankAccount -= 100;
                                tax += 0.20; 
                                document.getElementById('demo1').innerHTML = "$" + bankAccount;
                        	}
                            else {
                            	alert("not enough money");
                            }
                        }

                        function buyHouse() {
                        	if (bankAccount >= 1000) {    
                            	bankAccount -= 1000;
                                document.getElementById('smallhouse').style.visibility='visible';
                                document.getElementById('demo1').innerHTML = "$" + bankAccount;
                        	}
                            else {
                            	alert("not enough money");
                            }
                        }
                        
                        function betterJob() {
                        	if (skill >= 100) {    
                              job = 100;
                                
                        	}
                            else {
                            	alert("not enough skill");
                            }
                        }
