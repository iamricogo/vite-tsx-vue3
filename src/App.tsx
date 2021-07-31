/*
 * @Author: Rico
 * @Date: 2021-07-31 11:32:44
 * @LastEditors: Rico
 * @LastEditTime: 2021-07-31 16:34:05
 * @Description:
 */
import { defineComponent } from "vue";
import logo from "./assets/logo.png";

export default defineComponent({
  name: "App",
  setup: () => {
    return () => (
      <div>
        <img alt="Vue logo" src={logo} />
      </div>
    );
  },
});
