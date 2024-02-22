const initialState = {
  //* Employee
  employees: "",
  employeeFormType: "add", // add or update
  selectedEmployee: "",
  employeeFormVisibility: false,

  //* Shared
  isVisibale: false,

  //* Formation

  formations: "",
  formationFormType: "add", // add or update
  selectedFormation: "",
  formationFormVisibility: false,

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

    case "setFormations":
      return { ...state, formations: action.payload };

    case "setFormationFormType":
      return { ...state, formationFormType: action.payload };

    case "setSelectedFormation":
      return { ...state, selectedFormation: action.payload };

    case "setFormationFormVisibility":
      return { ...state, formationFormVisibility: action.payload };

    default:
      return state;
  }
}
