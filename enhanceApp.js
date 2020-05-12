import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

export default ({
  Vue,
}) => {
  dayjs.locale('zh-cn')
  dayjs.extend(relativeTime)
  Vue.prototype.$dayjs = dayjs
}
