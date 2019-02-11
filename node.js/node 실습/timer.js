const timeout = setTimeout (() => {
    console.log('implement after 1.5s');
},1500);
const interval = setInterval(() => {
    console.log('implement after 1s');
},1000);

const timeout2= setTimeout(()=> {
    console.log('not implemented');
},3000);

setTimeout(()=>{
    clearTimeout(timeout2);
    clearInterval(setInterval);
},2500);

const im= setImmediate(()=> console.log('implements immediately'));
clearImmediate(im);