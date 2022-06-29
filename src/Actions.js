export const ADD_TODO = (data) => {
    return{
        type:"ADD_TODO",
        payload:data
    }
}
export const EDIT_TODO = (data) => {
    return{
        type:"EDIT_TODO",
        payload:data,
    }
}
export const DELETE_TODO = (data) => {
    return{
        type:"DELETE_TODO",
        payload:data
    }
}
export const DELETE_COMPLETED_TODO = (data) => {
    return{
        type:"DELETE_COMPLETED_TODO",
        payload:data
    }
}
export const COMPLETE_TODO = (data) => {
    return{
        type:"COMPLETE_TODO",
        payload:data
    }
}
export const UNCOMPLETE_TODO = (data) => {
    return{
        type:"UNCOMPLETE_TODO",
        payload:data
    }
}
export const REMOVE_ALL_TODO = () => {
    return{
        type:"REMOVE_ALL_TODO",

    }
}