<template>
  <uni-table border stripe emptyText="暂无更多数据">
    <!-- 表头行 -->
    <uni-tr>
      <template v-for="(item, index) in columns" :key="index">
        <uni-th align="center">{{ item.label }}</uni-th>
      </template>
    </uni-tr>
    <!-- 表格数据行 -->
    <uni-tr v-for="(item, index) in approveData" :key="index">
      <uni-td>{{ item.date }}</uni-td>
      <uni-td>{{ item.name }}</uni-td>
      <uni-td>{{ item.address }}</uni-td>
    </uni-tr>
  </uni-table>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface IApproveData {
  date: string;
  name: string;
  address: string;
}

const columns = [
  {
    label: "日期"
  },
  {
    label: "姓名"
  },
  {
    label: "地址"
  }
];
const approveData = ref<IApproveData[]>([
  {
    date: "2020-09-01",
    name: "Dcloud1",
    address: "上海市普陀区金沙江路 1518 弄"
  },
  {
    date: "2020-09-02",
    name: "Dcloud2",
    address: "上海市普陀区金沙江路 1517 弄"
  },
  {
    date: "2020-09-03",
    name: "Dcloud3",
    address: "上海市普陀区金沙江路 1519 弄"
  }
]);
</script>
