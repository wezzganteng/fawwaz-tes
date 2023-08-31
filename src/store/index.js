import { createStore } from 'vuex';
import data from './modules/data'


const store = createStore({
    state: {
    
    },
    modules: {
        data,
        
    }
});

export default store;