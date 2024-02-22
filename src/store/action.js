
// Employee
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

// Shared
export function setIsVisibale() {
  return { type: "setIsVisibale" };
}

// Formation
export function setFormations(data) {
  return { type: "setFormations", payload: data };
}

export function setFormationFormType(data) {
  return { type: "setFormationFormType", payload: data };
}

export function setSelectedFormation(data) {
  return { type: "setSelectedFormation", payload: data };
}

export function setFormationFormVisibility(data) {
  return { type: "setFormationFormVisibility", payload: data };
}
