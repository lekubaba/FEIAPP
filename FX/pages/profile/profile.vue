<template>
	<view class="profile">
		<view class='profile-cons'>
			<view class="profile-title">
				<view class="title-content">
					<text class="iconfont icon-zhanji"></text>
					<text class='zhanji-title'>我的战绩</text>
				</view>
				<!-- <text class='zhanji-number'>{{number}}</text> -->
			</view>
			<view class='profile-level'>
				<text id='level-a' :style='{backgroundColor:activeA}' @click="activeAa" >自身战绩</text>
				<text id='level-b' :style='{backgroundColor:activeB}' @click="activeBb">一级战绩</text>
				<text id='level-c' :style='{backgroundColor:activeC}' @click="activeCc">二级战绩</text>
				<text id='level-d' :style='{backgroundColor:activeD}' @click="activeDd">···</text>
			</view>
			<view class='profile-t'>
				<text class='p-title'>受邀人</text>
				<text class='p-title'>进度</text>
				<text class='p-title'>生效/归属</text>
			</view>
			<template v-if="levelData.length===0">
				<view class='nots'>这一级暂无业绩！</view>
			</template>
			<template v-else>
				<view class="profile-profile" v-for="item in levelData" v-bind:key='item.id'>
					<view class='p-p-a'>
						<text>{{item.username}}</text>
						<text>{{item.number}}</text>
					</view>
					<view class='p-p-a'>
						<text>{{item.shenqingTime}}</text>
						<text>{{item.xiakuanEdu}}</text>
					</view>
					<view class='p-p-b'>
						<text>{{item.shengxiaoTime}}</text>
						<text>{{item.ownername}}</text>
						<text>{{item.ownerNumber}}</text>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script src='../../static/js/profile.js'></script>
<style src='../../static/css/profile.css'></style>
