export function setIsVisibale() {
  return { type: "setIsVisibale" };
}

export function setEmployees(data) {
  return { type: "setEmployees", payload: data };
}

export function setEmployeeFormType(data) {
  return { type: "setEmployeeFormType", payload: data };
}

export function setSelectedEmployee(data) {
  return { type: "setSelectedEmployee", payload: data };
}

export function setEmployeeFormVisibility(data) {
  return { type: "setEmployeeFormVisibility", payload: data };
}
