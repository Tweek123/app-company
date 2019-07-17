export const addComment = (form, id) => ({ type: "ADD_COMMENT", formMessage: form, id: id});
export const addUser = (form) => ({ type: "ADD_USER", formAddUser: form });
export const refUsers = () => ({ type: "REF_USERS" });
export const getUsers = () => ({ type: "GET_USERS" });
