# portfolio

var num1 = ""
var num2 = ""
var comand = 0
var comand2 = 0
var answer=0


function fillnum1(para)
{
    if(comand===0&&answer===0)
    {

        num1 += "" + parseInt (para.innerHTML)
           document.getElementById("displaynum1").value=num1
    }       
        else
       {
           if(answer===0)
           {
              num2 += "" + parseInt (para.innerHTML)
              document.getElementById("displaynum2").value=num2
           }
           else
           {
               AC()
           }
   
        }
   
}

function fillcomand(para)
{
    if(num2==="")
    
      
      {
         comand = para.innerHTML
         document.getElementById("comand").value = comand
      }
      if(answer!==0)
     
      {
          answer =
          document.getElementById("answer2").value = answer
          answer2 = answer 
           AC()
        document.getElementById("displaynum1").value = answer2
          comand = para.innerHTML
          document.getElementById("comand").value = comand
      }
    
   
    
}

function equal()
{
    num1 = parseInt(document.getElementById("displaynum1").value)
    num2 = parseInt(document.getElementById("displaynum2").value)
    comand = document.getElementById("comand").value
     if (comand === "*")
    {
        document.getElementById("answer").value= num1 * num2
                answer=num1 * num2

    }
    else if (comand === "/")
    {
        document.getElementById("answer").value= num1 / num2
                answer=num1 / num2

    }
    else if (comand === "+")
    {
        document.getElementById("answer").value= num1 + num2
                answer=num1 + num2

    }
    else if (comand === "-")
    {
        document.getElementById("answer").value= num1 - num2
        answer= num1 - num2
    }

}
            function AC()
            {
              num1=""
              num2=""
              answer=0
              comand=0
              document.getElementById("displaynum1").value=null
              document.getElementById("displaynum2").value=null
              document.getElementById("answer").value=null

              document.getElementById("comand").value=null

            }







