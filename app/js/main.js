
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


function setList(list)
{
	var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td>'
				+ '</tr>'
			+ '</thead>'
			+ '<tbody>';

	for (var i in list) {
		table += '<tr><td>'+ list[i].desc +'</td><td>'+ list[i].amount +'</td><td>'+ list[i].value +'</td>'+'<td>Edit | Delete</td></tr>'
	}

	table += '</tbody>';

	document.getElementById('listTable').innerHTML = table;
}

setList(list);