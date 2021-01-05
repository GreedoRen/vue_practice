import VueRouter from 'vue-router'
import AllFilmsPages from '../pages/AllFilmsPages'
// import FilmPage from '../pages/FilmPage'
import MainPage from '../pages/MainPage'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/films',
            component: AllFilmsPages
        },
    ]
  })