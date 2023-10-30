import Vuelidate from "./Vuelidate.js";
export default {
    install(app, options) {
        app.config.globalProperties.$rules = Vuelidate;
    },
};
