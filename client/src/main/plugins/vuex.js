import Vuex from 'vuex';
import store from '../store'

export default function (VueModule) {
    VueModule.use(Vuex);
    return new Vuex.Store(store());
}