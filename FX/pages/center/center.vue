<template>
	<view class='center-top'>
		<view class="center">
			<view class="center-uname">{{userInfo.username}}，您好！</view>
			<view class="center-card" v-on:click="toProfile">
				<view class="center-total">
					<text class="center-t-a">本月业绩 {{total.yeji}}</text>
					<view class="center-t-b">查看详情 》</view>
				</view>
				<view class="center-title">
					<text>预计佣金</text>
				</view>
				<view class="center-number">
					<text>{{total.reward}}</text>
				</view>
			</view>
			<view class="center-b center-extends" v-on:click="showQrcode">
				<text>专属推广二维码</text>
			</view>
			<view class="center-b center-teams" v-on:click="toAgent">
				<text>专属招商二维码</text>
			</view>
		</view>
		<view class="qrcode" v-if="isQRCODE">
			<image class='qrcode-a' :src="zsAndTgImg" mode="aspectFit"></image>
			<view class='isqrcodea'>
				<image class='isqrcode' v-bind:src='qrcodeBase64' mode="aspectFit"></image>
			</view>
			<image class='qrcode-b' src="../../static/images/close.png" mode="aspectFit" v-on:click="hideQrcode"></image>
		</view>
		<view class="activity" v-if="isActivity">
			<image class="act_img" :src=total.activityImg></image>
			<image class='qrcode-b' src="../../static/images/close.png" mode="aspectFit" v-on:click="hideAct"></image>
		</view>
	</view>
</template>

<script src="../../static/js/center.js"></script>
<style src="../../static/css/center.css"></style>
