var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color, count){
    if(count<=0)
    {
        return "Number cannot be zero/negative";
    }
    else{
        for(var i=0;i<count;i++)
        {
            chocolates.unshift(color);
        }
    }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number){
    var arr=[];
    if(number<=0){
        return("Number cannot be zero/negative");
    }
    else if(chocolates.length<number){
        return('Insufficient chocolates in the dispenser');
    }
    else{
        for(var i=0;i<number;i++){
            arr.push(chocolates.shift())
        }
        return arr;
    }
   
}



//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){
    var newArr=[];
    if(number<=0){
        return("Number cannot be zero/negative");
    }
    if(chocolates.length<number){
        return('Insufficient chocolates in the dispenser');
    }
        for(var i=0;i<number;i++){
            newArr.push(chocolates.pop())
        }
        return newArr;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor (chocolates, number, color)
{
    let colarray = [];
    if(chocolates.length<number)
    {
        return "Insufficient chocolates in the dispenser";
    }
    if(number<=0)
    {
        return "Number cannot be zero/negative";
    }
    var colno = 0;
    for(let i=chocolates.length-1; i>=0; i--)
    {
        if(chocolates[i]==color)
        {
            colarray.push(chocolates.pop());
            colno++;
            if(colno==number)
            {
                return colarray;
            }
        }
    }
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
let colorarr = [green, silver, blue, crimson, purple, red, pink];
function noOfChocolates(colorarr)
{
    let remchoco = [0,0,0,0,0,0,0];
    let result=[];
    for(let i=0; i<colorarr.length; i++)
    {
        if(colorarr[i]=="green")
        {
            remchoco[0]++;
        }
        else if(colorarr[i]=="silver")
        {
            remchoco[1]++;
        }
        else if(colorarr[i]=="blue")
        {
            remchoco[2]++;
        }
        else if(colorarr[i]=="crimson")
        {
            remchoco[3]++;
        }
        else if(colorarr[i]=="purple")
        {
            remchoco[4]++;
        }
        else if(colorarr[i]=="red")
        {
            remchoco[5]++;
        }
        else if(colorarr[i]=="pink")
        {
            remchoco[6]++;
        }
    }
    for(let i=0; i<remchoco.length; i++)
    {
        if(remchoco[i]>0)
        {
            result.push(remchoco[i]);
        }
    }
    return result;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    var decchoc = chocolates.reduce(function(b,a){
        if(a in b){
            b[a]++;
        }
        else{
            b[a] = 1;
        }
        return b;
    },{});
    let sorted = chocolates.sort((a,b)=>{
        if(decchoc[b] > decchoc[a]){
            return 1;
        }
        if(decchoc[b] < decchoc[a]){
            return -1;
        }
        if(a > b){
            return 1;
        }
        if(a < b){
            return -1;
        }
    });
    chocolates = sorted;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor){
    if(color == finalColor){
      return `Can't replace the same chocolates`
    }
    else if(number<=0){
      return 'Number cannot be zero/negative';
    }
    else{
      for(let i=0; i<number; i++){
        if(chocolates[i]==color){
              chocolates[i]=finalColor;
          }
      }
      return chocolates;
    }
  }


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,Color,finalColor) {
    if(Color == finalColor)
        return "Can't replace the same chocolates";
    
    else
        for(var i =chocolates.length; i>=0; i--){
            
            if(chocolates[i] == Color)
                chocolates[i] = finalColor;
            
        }
        var resultArray = [chocolates.length,chocolates];
        return resultArray;
    
   
}

//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor (color){
    for(let i=0; i<chocolates.length; i++){
      if(chocolates[i]==color){
        chocolates.splice(i,1);
        break;
      }
    }
    return chocolates;
  }

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
