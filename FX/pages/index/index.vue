<template>
	<view class='index'>
		<view class="index-top" :class="{active:isUpdate}">
			<image src="../../static/images/logo.png" mode="aspectFit"></image>
			<view class="index-title">
				<text class="index-t-bold">飞贷代理 三级返佣</text>
				<text class="iconfont icon-yiwen index-t-s" v-on:click="toGuize">{{title}}</text>
			</view>
			<view class="index-login" v-on:click="toLogin">
				代理登录
			</view>
		</view>
		<view class='index-update' v-if="isUpdate">
			<view class='update-c'>
				<text class='update-remind'> — 小提示 —</text>
				<text class='update-content'>您需要升级飞侠才可以继续使用飞侠的服务，请及时升级。请您删除APP重新安装即可。</text>
				<view class='update-button'>
					<text class='update-cancel' @click="notUpdate">暂不升级</text>
					<text class='update-confirm' @click="goUpdate">马上升级</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script src='../../static/js/index.js'></script>
<style src='../../static/css/index.css'></style>
