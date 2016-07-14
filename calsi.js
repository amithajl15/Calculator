// module.exports={ sum:function(a,b)
//   {c=parseInt(a)+parseInt(b);
//
//     return c;   },
//     sub:function(a,b)
//     {c=parseInt(a)-parseInt(b);
//
//       return c;   },
//       multi:function(a,b)
//       {c=parseInt(a)*parseInt(b);
//
//         return c;   },
//         div:function(a,b)
//         {c=parseInt(a)/parseInt(b);
//
//           return c;   },
//
//
//         }
        module.exports=function (number1,number2,operation){
                var result = 0;

         if(operation == "add")
          result = number1 + number2;

         else if(operation == "subtract")
          result = number1 - number2;

         else if(operation == "multiply")
          result = number1 * number2;

         else if(operation == "divide" && number2 != 0)
          result = number1 / number2;

         return result;

       }
