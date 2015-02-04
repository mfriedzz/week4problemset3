$(document).on('ready', function() {
 
 // Palindrome Function

 // var string = "race car";
 // //	var string = "my oh mommy";
	// var palindrome = function(string) {

	// 	var string = string.split(" ").join("");
	// 	console.log(string);
	// 	for (i=0; i<string.length/2; i++){
	// 	if (string[i] != string[string.length - i -1]) {
	// 			return false;
		

	//   	}
	//   return true;
	// }
	// };

	// console.log("Is this a Palindrome? ", palindrome(string)); 

 // dashInsert

   var string = 454793;

   var dashInsert = function(num) {
   		var string = [];
   		var num = num.toString();
   		 for (i=0; i < num.length; i++){
   		 	console.log(num[i], num[i] % 2);
   		 	 if ((num[i] % 2 === 1) && (num[i+1] % 2 === 1)){
   		 	 	console.log("num sub i ", num[i]);
   		 	 	string.push(num[i] + "-"); 
   		 	 
   		 	} else {
   		 			string.push(num[i]);
   				//console.log(num);
   			} //else
   		} //for
   		return string.join(" ");

   };

   console.log("dashes " + dashInsert(string));






}); // end jquery document on function