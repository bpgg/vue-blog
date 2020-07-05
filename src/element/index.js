import 'element-ui/lib/theme-chalk/index.css';
import { Dialog, Button, Tag, Avatar, Checkbox, Select, Option, OptionGroup, Input, Tree, Row, Col } from 'element-ui'
const element = {
    install: function (Vue) {
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(OptionGroup)
        Vue.use(Input)
        Vue.use(Tree)
        Vue.use(Dialog)
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Button)
        Vue.use(Checkbox)
        Vue.use(Avatar)
        Vue.use(Tag)
    }
}
export default element

