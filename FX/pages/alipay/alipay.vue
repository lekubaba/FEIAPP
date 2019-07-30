<template>
	<view class="alipay">
		<view class='alipay-header'>
			<text class='alipay-b'>绑定支付宝</text>
			<text class='alipay-s'>佣金直达代理支付宝账户</text>
		</view>
		<form @submit="alipayCheck">
			<view class='alipay-input'>
				<input v-if='userInfo.alipay' class="iconfont icon-shouji alipay-username" type="number" name="alipay" v-bind:placeholder="'已绑定:'+userInfo.alipay" maxlength='11'/>
				<input v-else class="iconfont icon-shouji alipay-username" type="number" name="alipay" placeholder="输入支付宝绑定的手机号" maxlength='11'/>
			</view>
			<button class="alipay-button" formType='submit'>确认绑定</button>
		</form>
	</view>
</template>

<script src='../../static/js/alipay.js'></script>
<style src='../../static/css/alipay.css'></style>
