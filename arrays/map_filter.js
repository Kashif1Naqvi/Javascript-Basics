// Map is like a forEach but forEach cannot return a new vaue but map will be return

let numMap = [1,2,3,4,5,6,7]

let numRes = numMap.map(value=>value+1)
console.log(numRes)

//reduce is unque methpd because init accumulator,accumulator is use for storeing result in single variable

let arr = [1,2,3,4,5,6,7]
const R = (accumulator,currentValue) =>accumulator + currentValue
console.log(arr.reduce(R))

//filter is use for specify  require data

const isPositive = (value) => {
  return value  > 0
}
const filterList = [112,3,0,-1,-33].filter(isPositive)
console.log("filter list",filterList)
//Symbol is so much importasnt but i cannot now more about

let iterable = {
  [Symbol.iterator](){
    return {
      i:0,
      next(){
        if(this.i < 3){
          return {value: this.i++,done:false}
        }
        return {value:1,done:true}
      }
    }
  }
}
for (let value of iterable){
  console.log(value)
}
