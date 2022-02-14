const gifLoad = document.querySelector('#loading');
const contentContainer = document.querySelector('#preencher')


setTimeout(() => {
    gifLoad.remove(); //Remove o gif
        //Exibe as divs
    contentContainer.style.display =  'preencher'; 

}, 1000);  

function Calculadora(){
        let faturamento = document.getElementById("faturamento").value;
        let shared = document.getElementById("SHARED").value;
        let sharedc = document.getElementById("SHAREC").value;
        let aluguel = document.getElementById("aluguel").value;
        let txdebito = document.getElementById("txdebito").value;
        let txcredito = document.getElementById("txcredito").value;
        
        //calculos
        let debitos = faturamento*shared/100;
        let creditos = faturamento*sharedc/100;
        let mdrdeb = debitos*txdebito/100;
        let mdrcred = creditos*txcredito/100;;
        let mdrtotal = mdrdeb+mdrcred;
        let mdrano = ((mdrtotal+aluguel)*12)/100*100;



        var debitos_ =  debitos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        var creditos_ = creditos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        var mdrdeb_ = mdrdeb.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        var mdrcred_ = mdrcred.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        var mdrtotal_ = mdrtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        var mdrano_ = mdrano.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

        var taxa_debito1 = 1.82;
        var taxa_credito1 = 4.15;
        var taxa_debito2 = 1.79;
        var taxa_credito2 = 3.49;
        var taxa_debito3 = 1.75;
        var taxa_credito3 = 3.19;
        var taxa_debito4 = 1.70;
        var taxa_credito4 = 2.99;


        var mdrdebito1 = debitos*taxa_debito1/100;
        var mdrdebito2 = debitos*taxa_debito2/100;
        var mdrdebito3 = debitos*taxa_debito3/100;
        var mdrdebito4 = debitos*taxa_debito4/100;
        var mdrcredito1 = creditos*taxa_credito1/100;
        var mdrcredito2 = creditos*taxa_credito2/100;
        var mdrcredito3 = creditos*taxa_credito3/100;
        var mdrcredito4 = creditos*taxa_credito4/100;

        var mdrtotal1 = mdrdebito1+mdrcredito1;
        var mdrtotal2 = mdrdebito2+mdrcredito2;
        var mdrtotal3 = mdrdebito3+mdrcredito3;
        var mdrtotal4 = mdrdebito4+mdrcredito4; 


        var mdranual1 = ((mdrtotal1+aluguel)*12)/100*100;
        var mdranual2 = ((mdrtotal2+aluguel)*12)/100*100;
        var mdranual3 = ((mdrtotal3+aluguel)*12)/100*100;
        var mdranual4 = ((mdrtotal4+aluguel)*12)/100*100;

        

        var mdrdeb1 = mdrdebito1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var mdrdeb2 = mdrdebito2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var mdrdeb3 = mdrdebito3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var mdrdeb4 = mdrdebito4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
        var mdrcred1 = mdrcredito1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var mdrcred2 = mdrcredito2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var mdrcred3 = mdrcredito3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var mdrcred4 = mdrcredito4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        var mdrtotal1_ = mdrtotal1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var mdrtotal2_ = mdrtotal2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var mdrtotal3_ = mdrtotal3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var mdrtotal4_ = mdrtotal4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        var mdranual1_ = mdranual1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var mdranual2_ = mdranual2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var mdranual3_ = mdranual3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var mdranual4_ = mdranual4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        var dif1 = mdranual1-mdrano;
        var dif2 = mdranual2-mdrano;
        var dif3 = mdranual3-mdrano;
        var dif4 = mdranual4-mdrano;

        var dif1_ = dif1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var dif2_ = dif2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var dif3_ = dif3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var dif4_ = dif4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


        
            
        
        
        
            if (document.getElementById("faturamento").value == "" ||
            document.getElementById("SHARED").value == "" ||
            document.getElementById("SHAREC").value == "" ||
            document.getElementById("aluguel").value == "" ||
            document.getElementById("txdebito").value == "" ||
            document.getElementById("txcredito").value == "") {
                    document.getElementById("comentario").value = "Impossivel concluir o calculo, verifique novamente os campos acima." 
            } else {

                share_debito.value = debitos_
                share_credito.value = creditos_
                mdr_debito.value = mdrdeb_
                mdr_credito.value = mdrcred_
                mdr_ano.value = mdrano_
                mdr_total.value = mdrtotal_

        

            /*taxa*/
                if (document.getElementById("faturamento").value >= 0 &&
                document.getElementById("faturamento").value <= 15000 ) {

                    document.getElementById("taxa-debito-mp").value = taxa_debito1;
                    document.getElementById("taxa-credito-mp").value = taxa_credito1;

                    document.getElementById("mdr_debito_mp").value = mdrdeb1
                    document.getElementById("mdr_credito_mp").value = mdrcred1

                    document.getElementById("mdr_total_mp").value = mdrtotal1_

                    document.getElementById("mdr_ano_mp").value = mdranual1_
                    
                    document.getElementById("DIF").value = dif1_
                



                } else { if (document.getElementById("faturamento").value >= 15001 &&
                document.getElementById("faturamento").value <= 20000) {

                    document.getElementById("taxa-debito-mp").value = taxa_debito2;
                    document.getElementById("taxa-credito-mp").value = taxa_credito2;

                    document.getElementById("mdr_debito_mp").value = mdrdeb2
                    document.getElementById("mdr_credito_mp").value = mdrcred2

                    document.getElementById("mdr_total_mp").value = mdrtotal2_

                    document.getElementById("mdr_ano_mp").value = mdranual2_

                    document.getElementById("DIF").value = dif2_


                } else { if (document.getElementById("faturamento").value >= 20001 &&
                document.getElementById("faturamento").value <= 30000) {

                    document.getElementById("taxa-debito-mp").value = taxa_debito3;
                    document.getElementById("taxa-credito-mp").value = taxa_credito3;

                    document.getElementById("mdr_debito_mp").value = mdrdeb3
                    document.getElementById("mdr_credito_mp").value = mdrcred3

                    document.getElementById("mdr_total_mp").value = mdrtotal3_

                    document.getElementById("mdr_ano_mp").value = mdranual3_

                    document.getElementById("DIF").value = dif3_


                } else { if (document.getElementById("faturamento").value >= 30001) {


                    document.getElementById("taxa-debito-mp").value = taxa_debito4;
                    document.getElementById("taxa-credito-mp").value = taxa_credito4;

                    document.getElementById("mdr_debito_mp").value = mdrdeb4
                    document.getElementById("mdr_credito_mp").value = mdrcred4      

                    document.getElementById("mdr_total_mp").value = mdrtotal4_ 

                    document.getElementById("mdr_ano_mp").value = mdranual4_

                    document.getElementById("DIF").value = dif4_

                        
                } 
                    
            
                
            
            
            console.log(mdranual4.length

            )
            



            }
        } 

    }
    }
    } 
    




