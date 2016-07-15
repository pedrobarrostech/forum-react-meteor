// actions/index.js

// Socket triggered actions
// These map to socket-events.js on the server
export const newBill = (bill) => {
	return {
		type: 'bill:new',
		bill: bill
	}
}

export const updatebill = (bill) => {
	return {
		type: 'bill:update',
		bill: bill
	}
}

export const deletebill = (bill) => {
	return {
		type: 'bill:delete',
		bill: bill
	}
}
