const string = 'abc';
const number =1;
const boolean = true;
const obj = {
    outside: {
        inside:{
            key:'value',
        },
    },
};
console.time('total time');
console.log ('its general log. we can print serveral keys using ,');
console.log(string,number,boolean);
console.dir(obj,{colors:true, depth: 2});
console.error('error message should be in console.error');
console.timeEnd('total time');
