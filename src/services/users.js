import Api from "./api";
const UserService = {
    register: (params) => Api.post('/users/register', params),
    login: async (params) => {
        const response = await Api.post('/users/login', params)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('token', response.data.token)
    },
    logout: async () => {
        localStorage.removeItem('user', null)
        localStorage.removeItem('token', null)
    },
    edit: async (params) => {
        const response = await Api.put(`/users/edit`, params, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        })
        let resp = response.data
        if (!resp.error) {
            localStorage.setItem('user', JSON.stringify(resp.user))
        } else {
            console.log(resp)
        }
    },
    updatePassword: async (params) => {
        await Api.put("/users/password", params, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        })
    },
    delete: async (params) => {
        await Api.delete("/users/", params, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        })
        localStorage.removeItem('user', null);
        localStorage.removeItem('token', null);
    }
}

export default UserService