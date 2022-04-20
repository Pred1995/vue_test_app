import {createApp, h, provide} from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import {apolloClient, apolloProvider} from "@/ApolloClient";
import {DefaultApolloClient} from "@vue/apollo-composable";


createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App)
}).use(Quasar, quasarUserOptions).use(apolloProvider).mount('#app')
