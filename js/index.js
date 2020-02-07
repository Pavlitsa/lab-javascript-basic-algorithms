// Iteration 1: Names and Input

let hacker1 = "Pavlina";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Nilsi";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

let final = "";
for (let i = 0; i < hacker1.length; i++) {
  final += hacker1[i].toUpperCase() + " ";
}

console.log(final);

let reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}

console.log(reversed);

if (hacker1 > hacker2) {
    console.log("The driver's name goes first");
  } else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first, definitely");
  } else {
    console.log("What?! you both have the same name?");
  }

  // Bonus 1

  const str1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim quam, pretium eget lorem quis, molestie finibus lorem. Pellentesque at tempor turpis. Nullam maximus commodo nisl, ut tempus lectus imperdiet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque sit amet elementum neque. Quisque et interdum urna. Maecenas aliquet erat quam, non porttitor nulla dictum at. Vivamus et odio quis turpis porttitor consequat. Nam mi nulla, sodales convallis velit nec, feugiat mattis metus. Sed vehicula facilisis malesuada. Donec mattis dolor ut dui lobortis imperdiet. Nulla sit amet enim eu felis porta tincidunt sed id nunc. Etiam iaculis sem at arcu rhoncus condimentum. Sed eu elit libero. Aliquam non turpis ligula. In vulputate vel magna nec tincidunt. Suspendisse potenti. Vestibulum eu tincidunt erat. Nullam a venenatis justo, at tempus mi. Donec at dapibus augue. Curabitur interdum lorem luctus urna pretium, et placerat tellus cursus. Pellentesque accumsan convallis sapien, et efficitur erat laoreet non. Nulla elementum, ante eget posuere auctor, felis mauris malesuada sapien, sed fringilla quam ipsum vel elit. In hac habitasse platea dictumst. Integer aliquet neque non enim pellentesque, vehicula pretium risus ullamcorper. Cras sed pulvinar elit. Aenean velit arcu, tempus ac quam eget, aliquam vehicula augue. Morbi tincidunt rutrum leo vitae placerat. Duis vitae dignissim purus, vitae bibendum tortor. Proin porta metus at varius faucibus. In tempor congue elit ac blandit."

wordsStr = str1.split(" ");
console.log(wordsStr.length);

console.log(str1.split("et").length - 1);

// Bonus 2

const phraseToCheck = "stack cats"

function checkPalindrom(phraseToCheck) {
  str = phraseToCheck.split(' ').join('');
  return str == str.split(' ').reverse().join('');

}
checkPalindrom(phraseToCheck);