import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}

/*AuthenticationService.register({
   email: 'c@c.c',
   password: '123456'
})*/