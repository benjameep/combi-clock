function scramble(array,number){
	var fac = [24,6,2,1]
	if(array.length < fac.length+1){
		fac.shift()
	}

	function toOrder(int){
		var order = fac.map(fac => {
			var x = Math.floor(int/fac)
			int %= fac
			return x
		})
		order.push(0)
		return order
	}

	function reorder(order,array){
		return order.reduce( (re,i) => {
			re.push(array.splice(i,1)[0])
			return re
		},[])
	}
	return reorder(toOrder(number),array.slice())
}
