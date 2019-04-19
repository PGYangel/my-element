<template>
    <div>
        <el-select
                class="input-item"
                placeholder="请选择日期"
                v-model="selected"
                >
            <el-option
                    v-for="item in list"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
            </el-option>
        </el-select>
        <el-date-picker
                class="input-item"
                type="datetime"
                @change="changeStartTime"
                v-model="startTime"
                :picker-options="pickerOptions0"
                placeholder="开始时间">
        </el-date-picker>
        <el-date-picker
                class="input-item"
                type="datetime"
                @change="changeEndTime"
                v-model="endTime"
                :picker-options="pickerOptions1"
                placeholder="结束时间">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
      name: 'ElAbleChangeTime',
      componentName: 'ElAbleChangeTime',
      props: {
        initNum: {
          type: String,
          default: '99'
        }
      },
      data() {
        return {
          selected: this.initNum,
          list: [
            { id: 99, name: '不限' },
            { id: 0, name: '指定时间' },
            { id: 1, name: '今天' },
            { id: 2, name: '昨天' },
            { id: 3, name: '前天' },
            { id: 4, name: '近三天' },
            { id: 5, name: '近一周' },
            { id: 6, name: '近一月' },
            { id: 7, name: '近三月' },
            { id: 8, name: '近半年' },
            { id: 9, name: '近一年' }
          ],
          startTime: '',
          endTime: '',
          pickerOptions0: {
            disabledDate: (time) => {
              if (this.endTime !== null) {
                return time.getTime() > this.endTime;
              }
            }
          },
          pickerOptions1: {
            disabledDate: (time) => {
              if (this.startTime !== null) {
                return time.getTime() < this.startTime;
              }
            }
          }
        };
      },
      methods: {
        shortcuts(id) {

        },
        changeSelect(value) {
          this.shortcuts(value);
        },
        changeStartTime(value) {
          this.startTime = value;
          this.selected = 0;
          this.$emit('startTime', this.startTime);
        },
        changeEndTime(value) {
          this.endTime = value;
          this.selected = 0;
          this.$emit('endTime', this.endTime);
        }
      }
    };
</script>
