/*
 * @Author: Kamtao
 * @Date: 2022-07-04 12:15:55
 * @LastEditTime: 2022-07-07 17:57:21
 * @Description:
 */
import { createApp, App } from 'vue';
import AppVue from './App.vue';
import router from './router/index';
import 'lew-ui/styles/reset.scss';
import 'lew-ui/styles/var.scss';
import 'lew-ui/styles/main.scss';

// fancybox
import '@fancyapps/ui/dist/fancybox.css';
// plyr
import 'plyr/dist/plyr.css';

import '@/assets/style/main.scss';
import '@/assets/style/hljs.scss';

// 安装tooltip
import { LewVTooltip, LewVBacktop } from 'lew-ui';

import lew from 'lew-ui';

const app = createApp(AppVue);
// 自定义一个代码高亮指令
app.directive('highlight', {
    mounted(el) {
        const blocks = el.querySelectorAll('pre code');
        blocks.forEach((block: unknown) => {
            hljs.highlightBlock(block);
        });
    },
});

app.use(lew);
app.use(LewVTooltip);
app.use(LewVBacktop);
app.use(router).mount('#app');
