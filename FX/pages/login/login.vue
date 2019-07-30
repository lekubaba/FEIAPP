<template>
	<view class="login">
		<view class='login-header'>
			<text class='login-b'>欢迎回到飞侠</text>
			<text class='login-s'>让我们更好的为您服务</text>
		</view>
		<form @submit="loginCheck">
			<view class='login-input'>
				<input class="iconfont icon-shouji login-username" type="text" name="username" placeholder="输入代理姓名" maxlength='5'/>
				<view class='login-line'></view>
				<input class="iconfont icon-mima login-code" type="number" name="gonghao" placeholder="输入工号或手机号后8位" maxlength='8'/>
			</view>
			<button class="login-button" formType='submit'>确认登陆</button>
		</form>
	</view>
</template>

<script src='../../static/js/login.js'></script>
<style src='../../static/css/login.css'></style>
