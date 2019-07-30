<template>
	<view class="agent">
		<view class='agent-header'>
			<text class='agent-b'>平均一位代理</text>
			<text class='agent-s'>能创造1000元收益</text>
		</view>
		<form @submit="agentCheck">
			<view class='agent-input'>
				<input class="iconfont icon-shouji agent-username" name="ownername" type="text" placeholder="输入代理姓名" maxlength='5'/>
				<view class='agent-line'></view>
				<input class="iconfont icon-mima agent-code" name="ownerNumber" type="number" placeholder="输入代理手机号" maxlength='11'/>
			</view>
			<button class="agent-button" formType='submit'>确认添加</button>
		</form>
	</view>
</template>

<script src='../../static/js/agent.js'></script>
<style src='../../static/css/agent.css'></style>
