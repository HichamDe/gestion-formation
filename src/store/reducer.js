const initialState = {
  //* Employee
  employees: "",
  employeeFormType: "add", // add or update
  selectedEmployee: "",
  employeeFormVisibility: false,

  //* Shared
  isVisibale: false,

  //* Formation
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //* Employee

    case "setEmployees":
      return { ...state, employees: action.payload };

    case "setEmployeeFormType":
      return { ...state, employeeFormType: action.payload };

    case "setSelectedEmployee":
      return { ...state, selectedEmployee: action.payload };

    case "setEmployeeFormVisibility":
      return { ...state, employeeFormVisibility: action.payload };

    //* Shared
    case "setIsVisibale":
      return { ...state, isVisibale: !state.isVisibale };

    //* Formation

    default:
      return state;
  }
}
