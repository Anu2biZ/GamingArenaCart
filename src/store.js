import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            isOpenModalBuyProduct: false,
            isOpenModalPrivacyPolicy: false,
            isOpenModalCookiePolicy: false,
            isOpenModalTerms: false,
            twitchToken: null
        }
    },
    mutations: {
        openModal(state, modalName) {
            state[modalName] = true
        },
        closeModal(state, modalName) {
            state[modalName] = false
        },
        changeToken(state, value) {
            state.twitchToken = value
        }
    },
    actions: {
        openModal({ commit }, modalName) {
            commit('openModal', modalName)
        },
        closeModal({ commit }, modalName) {
            commit('closeModal', modalName)
        },
        changeToken({ commit }, value) {
            commit('changeToken', value)
        }
    },
    getters: {
        isOpenModalBuyProduct: state => state.isOpenModalBuyProduct,
        isOpenModalPrivacyPolicy: state => state.isOpenModalPrivacyPolicy,
        isOpenModalCookiePolicy: state => state.isOpenModalCookiePolicy,
        isOpenModalTerms: state => state.isOpenModalTerms,
        isAnyModalOpen: (state) => {
            return [
                state.isOpenModalBuyProduct,
                state.isOpenModalPrivacyPolicy,
                state.isOpenModalCookiePolicy,
                state.isOpenModalTerms
            ].some(modal => modal);
        },
        titleMeta: state => state.title,
        isTwitchToken: state => state.twitchToken

    }
})