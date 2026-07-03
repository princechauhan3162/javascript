// // Even or Odd

let num = 9;
if (num % 2 == 0)
    console.log("Even");
else
    console.log("Odd");


// // Positive or Negative

let num = -5;

if (num >= 0)
    console.log("Positive");
else
    console.log("Negative");

// // Print 1 to 10

for(let i=1;i<=10;i++)
{
    console.log(i);
}

// // Print Even Numbers

for(let i=1;i<=20;i++)
{
    if(i%2==0)
        console.log(i);
}

// // Print Odd Numbers

for(let i=1;i<=20;i++)
{
    if(i%2!=0)
        console.log(i);
}


// // Multiplication Table

let num=5;
for(let i=1;i<=10;i++)
{
    console.log(num*i);
}

// // Sum of 1 to 10

let sum=0;
for(let i=1;i<=10;i++)
{
    sum=sum+i;
}
console.log(sum);

// // Factorial

let fact=1;
for(let i=1;i<=5;i++)
{
    fact=fact*i;
}
console.log(fact);


// // Countdown

for(let i=10;i>=1;i--)
{
    console.log(i);
}


// // Divisible by 5

for(let i=1;i<=50;i++)
{
    if(i%5==0)
        console.log(i);
}