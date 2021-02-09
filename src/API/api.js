import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '0daaabae-bf89-496f-a55b-4f93edb3a6f9'
    }
})

export const authAPI = {
    getMe() {
        return instance.get(`auth/me`).then(Response => {
            return Response.data
        });
    }
}   

export const usersAPI = {
    getUsers(carrentPage = 1, pagesSize = 10) {
        return instance.get(`users?page=${carrentPage}&count=${pagesSize}`).then(Response => {
            return Response.data
        });
    }
}

export const followAPI = {
    followUser(userId) {
        return instance.post(`follow/${userId}`, {}).then(Response => {
            return Response.data
        });
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(Response => {
            return Response.data
        });
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(Response => {
            return Response.data
        });
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(Response => {
            return Response.data
        })
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(Response => {
            return Response.data
        })
    }
}