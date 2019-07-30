<template>
	<view class='myself'>
		<view class="my-avatar">
			<image class="my-img" src="../../static/images/feixia.png" mode="aspectFit"></image>
			<text>{{userInfo.username}}</text>
		</view>
		<view class='my-money' v-on:click="toReward">
			<text class="iconfont-m icon-jin">我的奖金</text>
			<view class="my-profile">》</view>
		</view>
		<view class='my-money' v-on:click="toGuize">
			<text class="iconfont-m icon-guize">返佣规则</text>
			<view class="my-profile">》</view>
		</view>
		<view class='my-money' v-on:click="toAlipay">
			<text class="iconfont-m icon-alipay">绑定支付宝</text>
			<view class="my-profile">》</view>
		</view>
		<button class='clearCookies' @click="loginOut">退出</button>
	</view>
</template>

<script src='../../static/js/myself.js'></script>
<style src='../../static/css/myself.css'></style>
