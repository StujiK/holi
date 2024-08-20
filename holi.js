var isSquare = function(n){

    if (n < 0) return false; // A negative number cannot be a perfect square
    const sqrt = Math.sqrt(n); // Calculate the square root of the number
    return sqrt === Math.floor(sqrt);
  
    
  }


  function invert(array) {
    for(let i = 0;i<array.length;i++){
      let arrayElement = array[i];
      if(array[i]<0 || array[i]>0)
        array[i]*= -1;
    }
     return array ;
  }


  function sumMix(x){
    let sum = 0;
    for(let i = 0;i<x.length;i++){
      const arrayElement = Number(x[i]);
      sum = sum + arrayElement;
    }
    return sum;
    
  }


  function descendingOrder(n){
    let ArrString = n.toString();
    let numStr = [];
    for(let i = 0; i<ArrString.length;i++){
      numStr.push(ArrString[i]);
    }
    
    for(let i = 0;i<numStr.length;i++){
      for(let j = i + 1; j<numStr.length; j++){
        if(numStr[i]<numStr[j]){
          let temp = numStr[i];
          numStr[i] = numStr[j];
          numStr[j] = temp;
        }
      }
    }
    
    
    let str = "";
    for(let i = 0;i<numStr.length;i++){
      str += numStr[i];
      
    }
    
    
    let sortedNum = parseInt(str, 10);
    
    return sortedNum;
    
    
  }

  function toCsvText(array) {
    let con = '';
   let com = ',';
   for(let i = 0;i<array.length;i++){
     for(let j = 0;j<array[i].length;j++){
       const arrayElement = array[i][j];
       con += arrayElement;
       if(j<array[i].length-1){
         con+=com;
       }
     }
     if(i<array.length-1){
       con += '\n';
     }
   }


  JAVA 

  public class MechanischeArbeit implements java.io.Serializable
{
	private short kraft = 0;
	private short weg = 0;
	private int arbeit = 0;
	public MechanischeArbeit(short kraft, short weg, int arbeit)
	{
		this.kraft = kraft;
this
.weg = weg;
		this.arbeit = arbeit;
	}
	public short getKraft()
	{
		return this.kraft;
	}
	public void setKraft(short kraft)
	{
		this.kraft = kraft;
	}
	public short getWeg()
	{
		return this.weg;
	}
	public void setWeg(short weg)
	{
		this.weg = weg;
	}
	public int getArbeit()
	{
		return this.arbeit;
	}
	public void setArbeit(int arbeit)
	{
		this.arbeit = arbeit;
	}
<<<<<<< HEAD
}


function isPalindrome(x) {
  
    // Convert the string to lowercase to make the check case-insensitive
    const lowerCaseStr = x.toLowerCase();
    
    // Reverse the string
    const reversedStr = lowerCaseStr.split('').reverse().join('');
    
    // Check if the original string is the same as the reversed string
    return lowerCaseStr === reversedStr;
  }

  function setAlarm(employed, vacation){
    if (employed == true && vacation == true){
      return  false;
    }
    else if (employed == false && vacation == true ){
      return false;
    }
    else if (employed == true && vacation == false){
     return true; 
    }
    else if (employed == false && vacation == false){
      return false;
    }
  
  }


  function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    let sum = 0;
   sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    
    return sum;
  }
=======


    function isPalindrome(x) {
  
        // Convert the string to lowercase to make the check case-insensitive
        const lowerCaseStr = x.toLowerCase();
        
        // Reverse the string
        const reversedStr = lowerCaseStr.split('').reverse().join('');
        
        // Check if the original string is the same as the reversed string
        return lowerCaseStr === reversedStr;
      }


      function setAlarm(employed, vacation){
        if (employed == true && vacation == true){
          return  false;
        }
        else if (employed == false && vacation == true ){
          return false;
        }
        else if (employed == true && vacation == false){
         return true; 
        }
        else if (employed == false && vacation == false){
          return false;
        }
      
      }


      
      function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
        // code goes here
        let sum = 0;
       sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
        
        return sum;
      } 


      function strCount(str, letter){
        let count = 0;
        //code here
        for(let i = 0;i<str.length;i++){
          if(letter == str[i]){
            count++;
          }
        }
        return count;
      }

      function stringToArray(string){
        return string.split(' ');
       
       }

       
