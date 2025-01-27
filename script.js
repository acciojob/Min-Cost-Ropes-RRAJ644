function mincost(arr)
{ 
//write your code here
// return the min cost

	const n = arr.length 
	let totalCost = 0
	while (n>1) {
		arr.sort((a,b)=>a-b)
		const first = arr.shift()
		const second = arr.shift()
		const cost = first+second
		totalCost+=const
		arr.push(cost)
		
	}

	return totalCost
  
}

module.exports=mincost;
