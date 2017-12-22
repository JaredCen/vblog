import { PluginFunction } from 'vue';
import { confirm, alert, close } from '../components/Messagebox/Messagebox';

export default class MsgboxPlugin {
  static install: PluginFunction<never> = (Vue) => {
    Vue.prototype.$confirm = confirm;
    Vue.prototype.$alert = alert;
    Vue.prototype.$msgClose = close;
  }
}
