//--------------------------------C-168--------------------------------//
//---------------------------Automobiles Galore--------------------------------//
//------------------------------buttons.js--------------------------------//

//Registering a component to create html buttons 
AFRAME.registerComponent("button-renderer",{

    //Schema
    schema:{},

    //Calling a init function
    init:function(){
        
        //Creatng the purchase button and giving it a partially unique id ~~(i)
        button_purchase=document.createElement("button")
        button_purchase.innerHTML="PURSCHASE"
        button_purchase.setAttribute("id","purchase_btn")

        //Creatng the info button and giving it a partially unique id ~~(ii)
        button_info=document.createElement("button")
        button_info.innerHTML="INFO"
        button_info.setAttribute("id","info_btn")

        //Creatng the rate button and giving it a partially unique id ~~(iii)
        button_rate=document.createElement("button")
        button_rate.innerHTML="RATE"
        button_rate.setAttribute("id","rate_btn")

        //Sourcing the division tag and appending buttons at (i),(ii),(iii) as children to it
        button_div=document.getElementById("div_btn")
        button_div.appendChild(button_purchase)
        button_div.appendChild(button_info)
        button_div.appendChild(button_rate)   

        //Alerting the user about the heaviness of the model
        window.alert("The models might take an unusually longer time to load for it is quite heavy")
    }
})

//------------------------------buttons.js--------------------------------//
//---------------------------Automobiles Galore--------------------------------//
//--------------------------------C-168--------------------------------//