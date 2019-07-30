<template>
	<view class="reward">
		<view class='reward-cons'>
			<view class='reward-level'>
				<text id='reward-b' :style="{color:activeB}" @click="activeBb">已生效客户</text>
				<text id='reward-c' :style="{color:activeC}" @click="activeCc">上月未生效</text>
			</view>
			<view class='shengxiao' v-if='isSeenB'>
				<view class='profile-t'>
					<text class='p-title'>受邀人</text>
					<text class='p-title'>生效时间/额度</text>
					<text class='p-title'>归属</text>
				</view>
				<view class="profile-profile" v-for="item in levelData" v-bind:key='item.id'>
					<view class='p-p-a'>
						<text>{{item.username}}</text>
						<text>{{item.number}}</text>
					</view>
					<view class='p-p-a'>
						<text>{{item.shengxiaoTime}}</text>
						<text>{{item.xiakuanEdu}}</text>
					</view>
					<template v-if="item.gonghao===gonghao">
						<view class='p-p-b' >
							<text>自身</text>
						</view>						
					</template>
					<template v-else-if="gonghao===item.z_gonghao">
						<view class='p-p-b'>
							<text></text>
							<text>{{item.ownername}}·一级</text>
							<text>{{item.ownerNumber}}</text>
							
						</view>						
					</template>
					<template v-else>
						<view class='p-p-b'>
							<text>{{item.ownername}}·二级</text>
							<text>{{item.ownerNumber}}</text>
						</view>						
					</template>

				</view>
			</view>
			<view class='shangyue' v-if='isSeenC'>
				<view class='profile-t'>
					<text class='p-title'>受邀人</text>
					<text class='p-title'>生效时间/额度</text>
					<text class='p-title'>归属</text>
				</view>
				<view class="profile-profile" v-for="item in levelData" v-bind:key='item.id'>
					<view class='p-p-a'>
						<text>{{item.username}}</text>
						<text>{{item.number}}</text>
					</view>
					<view class='p-p-a'>
						<text>{{item.shengxiaoTime}}</text>
						<text>{{item.xiakuanEdu}}</text>
					</view>
					<template v-if="item.gonghao===gonghao">
						<view class='p-p-b' >
							<text>自身</text>
						</view>						
					</template>
					<template v-else-if="gonghao===item.z_gonghao">
						<view class='p-p-b'>
							<text></text>
							<text>{{item.ownername}}·一级</text>
							<text>{{item.ownerNumber}}</text>
							
						</view>						
					</template>
					<template v-else>
						<view class='p-p-b'>
							<text>{{item.ownername}}·二级</text>
							<text>{{item.ownerNumber}}</text>
						</view>						
					</template>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script src='../../static/js/reward.js'></script>
<style src='../../static/css/reward.css'></style>

