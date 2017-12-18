import { PluginFunction } from 'vue';
import { confirm, alert } from '../components/Messagebox/Messagebox';

export default class MsgboxPlugin {
  static install: PluginFunction<never> = (Vue) => {
    Vue.prototype.$confirm = confirm;
    Vue.prototype.$alert = alert;
  }
}
