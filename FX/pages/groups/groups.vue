<template>
	<view class='groups'>
		<view class='groups-list'>
			<view id='list-a' :style="{backgroundColor:activeA}" @click="activeAa">自身</view>
			<view id='list-b' :style="{backgroundColor:activeB}" @click="activeBb">一级</view>
			<view id='list-c' :style="{backgroundColor:activeC}" @click="activeCc">二级</view>
			<view id='list-d' :style="{backgroundColor:activeD}" @click="activeDd">···</view>
		</view>
		<view class='groups-num'>
			<view class='num-b'>
				<text>人数:{{counter}}</text>
				<text>总业绩:{{all_yeji}}</text>
			</view>
		</view>
		<view class='groups-all'>
			<view class='menu-s'>
				<text class='groups-menu'>姓名</text>
				<text class='groups-menu'>手机号</text>
				<text class='groups-menu'>总业绩</text>
				<text class='groups-menu'>其他</text>
			</view>
			<view class='menu-s' v-for="item in levelData" v-bind:key='item.id'>
				<text class='groups-c'>{{item.ownername}}</text>
				<text class='groups-c'>{{item.ownerNumber}}</text>
				<text class='groups-c'>{{item.all_yeji}}</text>
				<text class='groups-c'>--</text>
			</view>
		</view>
	</view>
</template>

<script src='../../static/js/groups.js'></script>
<style src='../../static/css/groups.css'></style>
