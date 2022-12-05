// assign clone using Object 

    const obj = {
        
        key1 : 'value1',
        key2 : 'value2'

    }

    // const obj2 = {...obj};   // new syntax to create clone

    const obj2 = Object.assign({},obj); // old syntax to create clone

    obj.key3 = 'value3';
    
    console.log(obj);
    console.log(obj2);