
var list = [
	{
		'desc': 'rice',
		'amount': '1',
		'value': '5.78'
	},
	{
		'desc': 'beer',
		'amount': '12',
		'value': '11.75'
	},	
	{
		'desc': 'baden',
		'amount': '1',
		'value': '13.50'
	},
];


function getTotal(list)
{
	var total = 0;

	for (var i in list) {
		total += list[i].amount * list[i].value;
	}

	return total;
}

console.log(getTotal(list))