<template>
	<view class='guize-top'>
		<view class="guize-content">
			
			<view class="guize-one">
				<text class='one-title'>规则A : 自身+直属代理总业绩,决定自身佣金比例</text>
				<view class="one-conts">
					<text>自身+直属代理总业绩(月)</text>
					<text>佣金比例</text>
				</view>
				<view class="one-cont">
					<text>{{rets.one}}</text>
					<text>{{rets.ones}}</text>
				</view>
				<view class="one-cont">
					<text>{{rets.two}}</text>
					<text>{{rets.twos}}</text>
				</view>
				<view class="one-cont">
					<text>{{rets.three}}</text>
					<text>{{rets.threes}}</text>
				</view>
				<view class="one-cont">
					<text>{{rets.four}}</text>
					<text>{{rets.fours}}</text>
				</view>
				<view class="one-cont">
					<text>{{rets.five}}</text>
					<text>{{rets.fives}}</text>
				</view>
				<view class="one-lip">
					<text>{{rets.profile1}}</text>
				</view>
			</view>
			<view class="guize-two guize-one">
				<text class='two-title'>规则B : 拿一级、二级全部客户点位</text>
				<view class="one-conts">
					<text>拿一级（全部客户Z）</text>
					<text>拿二级（全部客户Z）</text>
				</view>
				<view class="one-cont">
					<text>{{rets.t1}}</text>
					<text>{{rets.t2}}</text>
				</view>
				<view class="one-lip">
					<text>{{rets.profile2}}</text>
					<text>{{rets.profile3}}</text>
					<text>{{rets.profile4}}</text>
				</view>
			</view>
			<view class='xiaozhushou'>{{rets.profile5}}</view>
		</view>
	</view>
</template>

<script src='../../static/js/guize.js'></script>
<style src="../../static/css/guize.css"></style>
