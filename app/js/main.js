
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

var edited = 0;

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
		table += '<tr>'+
			'<td>'+ list[i].desc +'</td>'+
			'<td>'+ list[i].amount +'</td>'+
			'<td>'+ list[i].value +'</td>'+
			'<td><button onclick="setUpdateData('+i+')" class="btn btn-default">Edit</button>'+
			'<button onclick="deleteData('+i+');" class="btn btn-default">Delete</button></td>'+
		'</tr>'
	}

	table += '</tbody>';

	document.getElementById('listTable').innerHTML = table;
}

function addData(data)
{
	var desc   = document.getElementById('desc').value;
	var amount = document.getElementById('amount').value;
	var value  = document.getElementById('value').value;
	
	list.unshift({'desc':desc, 'amount':amount, 'value':value})

	setList(list);
}

function setUpdateData(id)
{
	if (id) {
		edited = id;
	} else {
		id = edited;
	}

	var obj = list[id];
	document.getElementById('value').value  = obj.value;
	document.getElementById('desc').value   = obj.desc;
	document.getElementById('amount').value = obj.amount;
}

function updateData(data)
{
	var id = edited;

	console.log(id)
	list[id].desc   = document.getElementById('desc').value;
	list[id].amount = document.getElementById('amount').value;
	list[id].value  = document.getElementById('value').value;

	clearForm();
	setList(list);
}

function clearForm()
{
	document.getElementById('value').value  = '';
	document.getElementById('desc').value   = '';
	document.getElementById('amount').value = '';	
}

function checkUndefinedData(data)
{
	if (data == 'undefined') {
		return true;
	}

	return false;
}


setList(list);