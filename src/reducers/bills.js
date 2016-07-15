// reducers/bills.js

// bills reducer
const bills = (state = [], action) => {
	// return index of action's bill within state
	const billIndex = () => {
		return state.findIndex(thisTodo => {
			return thisTodo && thisTodo.id === action.bill.id;
		});
	};

	switch(action.type) {
		case 'bill:insert':
			// append bill at end if not already found in state
			return billIndex() < 0 ? [...state, action.bill] : state;

		case 'bill:update':
			// Merge props to update bill if matching id
			var index = billIndex();
			if (index > -1) {
				var updatedTodo = Object.assign({}, state[index], action.bill);
				return [...state.slice(0, index), updatedTodo, ...state.slice(index + 1)]
			}
			else {
				return state;
			}

		case 'bill:delete':
			// remove matching bill
			var index = billIndex();
			if (index > -1) {
				return [...state.slice(0, index), ...state.slice(index + 1)];
			}
			else {
				return state;
			}

		default:
			return state;
	}
};

export default bills;
