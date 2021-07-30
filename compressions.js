function printRLE(str)
    {
        let n = str.length;
        for (let i = 0; i < n; i++)
        {
            // Count occurrences of current character
            let count = 1;
            while (i < n - 1 && str[i] == str[i+1])
            {
                count++;
                i++;
            }
             
            // Print character and its count
            console.log(str[i]);
            console.log(count);
        }
    }
     
    let str = "QQQUUUUUUUlllllllqqQQQQQQQQQTTA";
    printRLE(str);