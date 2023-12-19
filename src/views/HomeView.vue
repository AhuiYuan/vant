

<template>
  <main>
   <div>
     <p>home页面</p>
     <van-button type="primary">主要按钮</van-button>
     <van-button type="success">成功按钮</van-button>
     <van-button type="default">默认按钮</van-button>
     <van-button type="warning">警告按钮</van-button>
     <van-button type="danger">危险按钮</van-button>
   </div>
      <div>
          <van-collapse v-model="activeNames">
              <van-collapse-item title="标题1" name="1">
                  代码是写出来给人看的，附带能在机器上运行。
              </van-collapse-item>
              <van-collapse-item title="标题2" name="2">
                  技术无非就是那些开发它的人的共同灵魂。
              </van-collapse-item>
              <van-collapse-item title="标题3" name="3">
                  在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
              </van-collapse-item>
          </van-collapse>
      </div>
  </main>
</template>
<script  lang="ts" setup>
import { ref } from 'vue';
const activeNames = ref(['1']);
</script>