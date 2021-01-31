import _ from 'lodash';

export default async ({ Vue }) => {
    window._ = _;
    Vue.prototype.$lodash = _;
};
