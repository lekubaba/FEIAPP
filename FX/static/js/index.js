	export default {
		data() {
			return {
				title: '三级返佣规则',
				isUpdate:false,
			}
		},
		onLoad() {
			if(uni.getStorageSync('userInfo')){
				uni.switchTab({
					url:'/pages/center/center',
				})
			}else{
				return;
			}
		},
		onShow(){
			if(uni.getStorageSync('AppUpdata')){
				this.isUpdate = uni.getStorageSync('AppUpdata').isUpdate;	
			}else{
				this.isUpdate = false;
			}

		},
		methods: {
			toGuize:function(e){
				uni.navigateTo({
					url:'/pages/guize/guize'
				})
			},
			toLogin:function(e){
				if(uni.getStorageSync('AppUpdata')){
					this.isUpdate = uni.getStorageSync('AppUpdata').isUpdate;
					return;
				}else{
					uni.navigateTo({
						url:'/pages/login/login'
					})					
				}
			},
			notUpdate(e){
				this.isUpdate = false;
			},
			goUpdate(e){
				let AppUpdata = uni.getStorageSync('AppUpdata');
				let openUrl = plus.os.name === 'iOS' ? AppUpdata.iOS : AppUpdata.Android;
				plus.runtime.openURL(openUrl);
				
				/* 暂时清理，实际不需要清理，APP升级以后自动清理了 */
				// uni.removeStorageSync('AppUpdata');
			}

		}
	}