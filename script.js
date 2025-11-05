// Level 1 - Pure Beginner Practice

// 1. Print number from 1 to 10
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// 2. Print only even numbers from 1 to 20 
for(let i = 1; i <= 20; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

// 3. Print number from 10 to 1
for(let i = 10; i >= 1; i--){
    console.log(i);
}

// 4. Print the word "yes" 5 times
for(let i = 1; i <= 5; i++){
    console.log("yes");
}

// 5. Print numbers from 1 to 10 whether they are odd or even
for(let i = 1; i <= 20; i++){
    if(i%2 === 0){
        console.log(`${i} is even`)
    }
    else{
        console.log(`${i} is odd`)
    }
}

// 6. Ask the user for a number and say if it's positive or negative
let num = +prompt("enter number")

if(num >= 0){
    console.log(`${num} is positive`)
}
else{
    console.log(`${num} is negative`)
}

// 7. Ask user’s age and check if eligible to vote If age >= 18 → “Eligible”, else → “Not eligible”
let age = prompt("enter your age")

if(age.trim() === "" || age === null){
    console.error("enter something")
}
else if(isNaN(Number(age))){
    console.error("enter a number")
}
else if(Number(age) >= 18){
    console.log("eligible")
}
else{
    console.log("not eligible")
}

// 8. Print multiplication table of 5
for(let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${5*i}`)
}

// 9. Count how many numbers between 1 and 15 are greater than 8
let count  = 0;
for(let i = 1;i <= 15;i++){
    if(i>8){
        count++;
        console.log(`${count}. ${i} is greater than 8`)
    } 
}
console.log(`Total numbers greater than 8: ${count}`);

// 10. Ask user for password and print access status
let password = "hello123"
let pass = prompt("enter your password")

if(pass === null || pass.trim() === ""){
    console.error("enter password")
}
else if(pass === password){
    console.log("given access")    
}
else{
    console.log("access denied") 
}