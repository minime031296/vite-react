Que 1 :  Your task is to explain why the console.log shows the older value of count

ANSWER : Console.log show the older value because we have in useState have already kept the initial value of count as 0 and since React is a virtual dom so the real browser of the dom is starting with the default 0 index , not only
this the useState being a hook so when we setCount(count + 1) here the count is scheduleded by the react to get
updated the state is not changed immediately where as the console.log(count) is synchoronous is nature and useState is asynchronous is nature so the value is logged in synch by the console and get hold of the older value while
useState being asynch in nature it values are scheduled on time to get executed

Ques 2 : 
// Your task is to explain why count value is not updated to 3 as expected

ANSWER : As talked earlier we have seen that, the useState is an asynchronous in nature so when ever the setCount(count1+ 1) is set every time the updation is scheduled first time or the second or the other the updation is not
immediate , on the other hand the console.log being synchronous in nature keep on getting value updated immediately 


so it can be concluded that useState is a hook used by react to make the process of update or any to make the process asynchronous in nature
