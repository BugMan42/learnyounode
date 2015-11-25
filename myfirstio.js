var sum;
for (var i = 2; i < process.argv.length; ++i)
    sum += +process.argv[i];
console.log(sum);