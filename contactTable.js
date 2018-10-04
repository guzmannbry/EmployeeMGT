
(function() {
	'use strict';

	var userData = [{

		name: 'Bryan',
		lname: 'Guzman',
		age: '20',	
		bdate: '2018-10-10',
		phone: '98455',
		hworks: '5',
		ratepay: '100',
		overtimepay:'10'
	}];

	//Update
	var updateTable = function() {
		var dataTable = document.getElementById('table1'),
			tableHead = document.getElementById('table-head'),
			tbody = document.createElement('tbody');

		while (dataTable.firstChild) {
			dataTable.removeChild(dataTable.firstChild);
		}

		dataTable.appendChild(tableHead);

		for (var i = 0; i < userData.length; i++) {
			var tr = document.createElement('tr'),
				td0 = document.createElement('td'),
				td1 = document.createElement('td'),
				td2 = document.createElement('td'),
				td3 = document.createElement('td'),
				td4 = document.createElement('td'),
				td5 = document.createElement('td'),
				td6 = document.createElement('td'),
				td7 = document.createElement('td'),
				td8 = document.createElement('td'),
				td9 = document.createElement('td'),
				td10 = document.createElement('td'),
				td11 = document.createElement('td'),
				btnDelete = document.createElement('input'),
				btnEdit = document.createElement('input');

			btnDelete.setAttribute('type', 'button');
			btnDelete.setAttribute('value', 'Delete');
			btnDelete.setAttribute('class', 'btnDelete');
			btnDelete.setAttribute('id', i);

			btnEdit.setAttribute('type', 'button');
			btnEdit.setAttribute('value', 'Edit');
			btnEdit.setAttribute('id', i);

			tr.appendChild(td0);
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);
			tr.appendChild(td6);
			tr.appendChild(td7);
			tr.appendChild(td8);
			tr.appendChild(td9);
			tr.appendChild(td10);
			tr.appendChild(td11);

 
 			var hourswork = userData[i].hworks;
 			var ratepay = userData[i].ratepay;
 			var ov_p = userData[i].overtimepay;

 			var rp = hourswork * ratepay;
 			var overall_pay = parseFloat(rp) + parseFloat(ov_p);

			td0.innerHTML = i + 1;
			td1.innerHTML = userData[i].name +' '+userData[i].lname;
			td2.innerHTML = userData[i].age;
			td3.innerHTML = userData[i].phone;
			td4.innerHTML = userData[i].bdate;
			td5.innerHTML = '₱' +  hourswork;
			td6.innerHTML = '₱' +  ratepay;
			td7.innerHTML = '₱' +  rp;
			td8.innerHTML = '₱' +  ov_p;
			td9.innerHTML = '₱' +  overall_pay;
			td10.appendChild(btnEdit);
			td11.appendChild(btnDelete);


			btnDelete.onclick = (function() {
				return function() {
					if (confirm("Are you sure you want to delete?")) {
						var deleteId = this.getAttribute('id');
						userData.splice(deleteId, 1);
						updateTable();
						refreshForm();
					}
				};
			})();

			btnEdit.addEventListener('click', function() {
				var editId = this.getAttribute('id');
				window.scrollTo({
					  top: 0, 
					  left: 0, 
					  behavior: 'smooth' 
					});
				updateForm(editId);
			}, false);

			tbody.appendChild(tr);
		}
		dataTable.appendChild(tbody);
	}

	// Set form for data edit
	var updateForm = function(id) {
		console.log(userData[id].name);
		var nameField = document.getElementById('name'),
			lnameField = document.getElementById('lname'),
			ageField   = document.getElementById('age'),	
			bdateField = document.getElementById('bdate'),
			phoneField = document.getElementById('phone'),
			hoursworksField = document.getElementById('hours_worked'),
			ratepayField = document.getElementById('rate_pay'),
			overtimepayField = document.getElementById('overtime_rate'),
			saveButton = document.getElementById('btnSave');

		nameField.value = userData[id].name;
		lnameField.value = userData[id].lname;
		ageField.value = userData[id].age;
		bdateField.value = userData[id].bdate;
		phoneField.value = userData[id].phone;
		hoursworksField.value = userData[id].hworks;
		ratepayField.value = userData[id].ratepay;
		overtimepayField.value = userData[id].overtimepay;
		saveButton.value = 'Update';
		saveButton.setAttribute('data-update', id);
	}

	// Save new datas
	var saveData = function() {
		var newName = document.getElementById('name').value,
			newLname = document.getElementById('lname').value,
			newAge = document.getElementById('age').value,
			newBdate = document.getElementById('bdate').value,
			newPhone = document.getElementById('phone').value,
			newHoursWork = document.getElementById('hours_worked').value,
			newRatePay = document.getElementById('rate_pay').value,
			newOvertimePay = document.getElementById('overtime_rate').value,
			datatoAdd = {
				name: newName,
				lname: newLname,
				age:newAge,
				bdate:newBdate,
				phone: newPhone,
				hworks: newHoursWork,
				ratepay: newRatePay,
				overtimepay: newOvertimePay
			};

		userData.push(datatoAdd);
		updateTable();
	}

	// Update data
	var updateData = function(id) {
		var upName = document.getElementById('name').value,
		    upLname = document.getElementById('lname').value,
		    upAge = document.getElementById('age').value,
			upBdate = document.getElementById('bdate').value,
			upPhone = document.getElementById('phone').value,
			upHoursWork = document.getElementById('hours_worked').value,
			upRatePay = document.getElementById('rate_pay').value,
			upovertimePay = document.getElementById('overtime_rate').value;

		userData[id].name = upName;
		userData[id].lname = upLname;
		userData[id].age = upAge;
		userData[id].bdate = upBdate;
		userData[id].phone = upPhone;
		userData[id].hworks = upHoursWork;
		userData[id].ratepay = upRatePay;
		userData[id].overtimepay = upovertimePay;
		updateTable();
	}

	// Reset the form
	var refreshForm = function() {
		var nameField = document.getElementById('name'),
			lnameField = document.getElementById('lname'),
			ageField = document.getElementById('age'),
			bdateField = document.getElementById('bdate'),
			phoneField = document.getElementById('phone'),
		 	hoursWorkField = document.getElementById('hours_worked'),
		 	ratePayField = document.getElementById('rate_pay'),
		 	overtimePayField = document.getElementById('overtime_rate'),
			saveButton = document.getElementById('btnSave');

		nameField.value = '';
    	lnameField.value = '';
    	ageField.value = '';
		bdateField.value = '';
		phoneField.value = '';
		hoursWorkField.value = '';
		ratePayField.value = '';
		overtimePayField.value = '';
		saveButton.value = 'Save';
		saveButton.removeAttribute('data-update');
	}
		
	// Main function
	var init = function() {
		updateTable();

		var btnSave = document.getElementById('btnSave'),
			btnRefresh = document.getElementById('btnRefresh');

		btnSave.onclick = function() {
			if (btnSave.getAttribute('data-update')) {
				updateData(btnSave.getAttribute('data-update'));
			} else {
				saveData();
			}
			refreshForm();
		};

		btnRefresh.onclick = function() {
			refreshForm();
		};
	};

	init();
})();