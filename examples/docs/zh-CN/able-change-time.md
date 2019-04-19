## 双时间选择

### 基础用法

:::demo
```html
<el-able-change-time initNum="4" @startTime="getStartTime" @endTime="getEndTime"></el-able-change-time>

<script>
export default {
  data() {
    return {
      startTime:'',
      endTimeL:''
    }
  },
  methods:{
      getStartTime (value) {
        this.startTime = value
      },
      getEndTime (value) {
        this.endTime = value
      }
  }
}
</script>
```
:::

