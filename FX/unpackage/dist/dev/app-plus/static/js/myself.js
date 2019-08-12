export default {
	data() {
		return {
			userInfo:'',
		};
	},
	onLoad(){
		
	},
	onShow(){
		this.userInfo = uni.getStorageSync('userInfo');
	},
	onReady(){
	},
	methods:{
		toReward(e){
			uni.navigateTo({
				url:'/pages/reward/reward'
			})
		},
		toGuize(e){
			uni.navigateTo({
				url:'/pages/guize/guize'
			})			
		},
		toAlipay(e){
			uni.navigateTo({
				url:'/pages/alipay/alipay'
			})			
		},
		loginOut(e){
			uni.removeStorage({
				key: 'userInfo',
				success: function (ret) {
					uni.reLaunch({
						url:'/pages/index/index'
					})
				}
			});			
		}
	}
}