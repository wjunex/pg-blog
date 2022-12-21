# uniapp中查看全景图片？使用Pannellum就够了

## 前言

> Pannellum，一个相当轻量且容易上手的全景图片查看器。
>
> 官方文档：[Pannellum](https://pannellum.org/documentation/overview/)



最近在做的项目中正好有查看全景图片的需求，无意中了解到了Pannellum。

官网里没有如何在在uniapp中使用的教材，只能自己摸索。所以也踩了不少坑，故以此文记录。

## 在H5中使用

只需在官网中下载js和css文件即可，引入我们的项目中即可。

**引入js：**

```js
// main.js

import "@/common/pannellun.js"
```

**引入css：**

```vue
// App.vue

<style lang="scss" scoped>
		@import "@/utils/pannellum.css";
</style>
```

**使用：**

```vue
<template>
	<view>
		<view id="panorama"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: ‘’ // 图片路径
			}
		},
		onLoad() {
			this.$nextTick(() => {
				pannellum.viewer('panorama', {
					"type": "equirectangular",
					"panorama": this.imgUrl,
				});
			})
		},

	}
</script>

<style lang="scss" scoped>
	#panorama {
		width: 600px;
		height: 400px;
	}
</style>

```

将imgUrl修改为全景图片的路径，就能够查看全景图片了。记得这里一定要使用this.$nextTick，否则会报错



**如果你只是需要在h5中使用，那么根据以上的方式就可以了。**

**如果你有编译到APP，小程序等的需求。请接着往下看**



## 非H5端使用

当你以上面的方法使用在APP或小程序中时，你会发现pannellun.js中会有各种报错。

经过一番的折腾，终于在uniapp官网中找到原因：

> 非 H5 端不支持使用含有 dom、window 等操作的 vue 组件和 js 模块

查看pannellun.js文件，发现里面有很多对window和document的操作，修改pannellun.js的想法看来是不太美好了。



可以使用`<webview>`组件，将我们上面的h5呈现在APP或小程序中。



因为我所做的项目是需要编译到h5，APP，微信小程序三端中，所以只需要对以上的代码稍作修改即可

```vue
<template>
	<view>
		<!-- #ifndef H5 -->
		<web-view :src="h5Img"></web-view>
		<!-- #endif -->

		<!-- #ifdef H5 -->
		<view id="panorama"></view>
		<!-- #endif -->


	</view>
</template>

<script>
	export default {
		data() {
			return {
     	    h5Img:'',  // 编译后的h5的页面路径
					imgUrl: ‘’ // 图片路径
			}
		},
		onLoad() {
			// #ifdef H5
			this.$nextTick(() => {
				pannellum.viewer('panorama', {
					"type": "equirectangular",
					"panorama": this.imgUrl,
				});
			})
			// #endif
		},

	}
</script>

<style lang="scss" scoped>
	#panorama {
		width: 600px;
		height: 400px;
	}
	.input-box {
  	margin: 0 auto;
 	  display: flex;
	}
	h1 {
		color: #999;
	}
</style>

```

这样就解决了同时编译到多端的问题。



如果大家有更好的优化建议，请在评论区讨论吧

