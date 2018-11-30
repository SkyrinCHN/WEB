//3,process.nextTick 立即执行定时器,只能用于nodejs
process.nextTick(() => {
    console.log('nextTick');
})
//4,setImmediate 立即执行定时器,只能用于nodejs
var timer = setImmediate(() => {
    console.log('setImmediate');
})
clearImmediate(timer);