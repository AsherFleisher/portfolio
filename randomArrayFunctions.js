# portfolio





//1)נסיון שני כי הצלחתי להחליף בתוכן בתוך הפונקציה ולהחזיר תוצעה נכונה אבל המקור נשאר כשהיה
var names = [1,2,3,4,5]
var age = ["bob","john","jay","joe","henry"]
function switcharrys2(arry1, arry2)
{
    var arry1switch = [0]
    var arry2switch = [0]
    for(i = 0; i < arry1.length; i++ )
    {
        arry1switch[i] = arry1[i]
    }


      for(i = 0; i < arry2.length; i++ )
    {
        arry2switch[i] = arry2[i]
        arry2[i] = arry1switch[i]
        arry1[i] = arry2switch[i]
    }
     
}

switcharrys2(names,age)

alert("1)בנה פונקציה המחליפה בין תוכן של שני מערכים  "+(names+age))

//2)פונקציה המדפיסה את סכום השלוש תאים האחרונים במערך

var digets = [10,20,30,40,50]


function printlast3digets(arry)
{
   lastdiget = digets[digets.length-1]
   secondtolastdiget = digets[digets.length-2]
   theirdtolastdiget = digets[digets.length-3]

   alert("2) פונקציה המדפיסה את סכום השלוש תאים האחרונים במערך " + " המערך:" + digets + " סכום השלוש תאים האחרונים במערך: " + (lastdiget+secondtolastdiget+theirdtolastdiget))

}

printlast3digets(digets)


//3)בנה פונקציה שמקבלת מערך ובודקת אם כל האיברים הם ראשוניים

var numarry = [11,23,31]
var allnumsarefirst = 0
var notallnumsarefirst = 0

function checkifallarefirst(arry)
{
   for( i = 0; i < arry.length; i++)
   {
       if(arry[i] % 2 === 0 || arry[i] % 3 === 0)
       {
            notallnumsarefirst = notallnumsarefirst + 1
       }
       else
       {
            allnumsarefirst = allnumsarefirst + 1
       }
   }
            if(notallnumsarefirst > 0)
            {
                alert("3)בנה פונקציה שמקבלת מערך ובודקת אם כל האיברים הם ראשוניים "+" not all numbers are first")
            }
            else
            {
                alert("3)בנה פונקציה שמקבלת מערך ובודקת אם כל האיברים הם ראשוניים " + " המערך " + numarry + " all numbers are first")
            }
}

checkifallarefirst(numarry)


//4) קלוט מערך לפונקציה א הכפל אותה והכנס אותה לפונקציה ב שמדפיסה את ערכו המקורי

var numbers = [10,11,12]
function A(arry)
{
    for( i = 0; i < arry.length; i++)
    {
        arry[i] = arry[i]*2
    }
    
    return arry
}

var multipolofA =  A(numbers)

function B(multipolofA)
{
   for ( i = 0; i < multipolofA.length; i++ )
   {
       multipolofA[i] = multipolofA[i]/2  
   }

   alert("4) קלוט מערך לפונקציה א הכפל אותה והכנס אותה לפונקציה ב שמדפיסה את ערכו המקורי " + multipolofA)
}

B(multipolofA)

//5)סרוק מערך למצוא האם מילה מסויימת נמצאת בו

var classrom = ["john","jay","bob"]
var name = "bob"
var a = ""

function wordfinder(string1,word)
{
    for( i = 0; i < string1.length; i++ )
    {
        if (string1[i] === word)
      {
          alert(" 5)סרוק מערך למצוא האם מילה מסויימת נמצאת בו " +  " המערך: " + classrom + " המילה לחיפוש: " + name + " אלרט "+ " Your word was found in the arry!")
      }
           
    }   
      
}

wordfinder(classrom,name)

//6)בנה פונקציה שמקבלת משפט ומילה ומחזירה את מיקום האות הראשונה והאחרונה שלה 


var sentance = "my name is asher"
var word = "asher"
var stringintoarray = []
var wordtoarray= []
var answer = 0
var answer2 = 0
function indexplacment(word,sentance)
{
   stringintoarray = sentance.split("")
   wordtoarray = word.split("")
   for(i = 0; i < stringintoarray.length; i++)
   {
       if( stringintoarray[i] === wordtoarray[0])
       {     
               answer = i

           for(j = 0; j < wordtoarray.length; j++)
           {
               while(wordtoarray[j] === stringintoarray[i])
               {
                        answer2 = i
                        
                        i++
                        
                      
               }        
           }
            
       }
   }
   alert("6)בנה פונקציה שמקבלת משפט ומילה ומחזירה את מיקום האות הראשונה והאחרונה שלה " + " המשפט: " + sentance + " המילה לחיפוש: "  + word + " אלרט " + (answer+answer2))
}

indexplacment(word,sentance)

//push
var arry = [1,2,3,4,5]
var sum = 0

function Funcx(arry)
{
    
    for(i = 0; i < arry.length; i++)
    {
         sum += arry[i]
    }
    
      arry.push(sum)
        alert(" 7) push sum " + arry)
}

Funcx(arry)

