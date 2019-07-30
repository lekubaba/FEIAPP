<script>
	export default {
		onLaunch: function () {
			console.log('App Launch');
			// #ifdef APP-PLUS
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary'); //锁定
			// 检测升级
			uni.request({
				url: 'http://wx.feidaijun.com/appUpdate', //检查更新的服务器地址
				data: {
					// appid: plus.runtime.appid,
					appid: '__UNI__DE0106F',
					version: '1.0.2'
					// version: plus.runtime.version
				},
				success: (res) => {
					
					if (res.statusCode == 200 && res.data.isUpdate) {
						let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
						if(uni.getStorageSync('userInfo')){
							uni.removeStorage({
								key:'userInfo',
								success() {
									uni.setStorageSync('AppUpdata',res.data);
									return 
								}
							})
							
						}else{
							uni.setStorageSync('AppUpdata',res.data);
							return;
						}
					}
				}
			})
			// #endif
		},
		onShow: function () {
			
			// console.log('App Show')
		},
		onHide: function () {
			// console.log('App Hide')
		}
	}
</script>

<style>
	view{
		box-sizing: border-box;
	}
	@font-face {font-family: "iconfont";
	  src:url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff');
	}

	.iconfont {
	  font-family:"iconfont" !important;
	  font-size:16px;
	  font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}

	.icon-yiwen:before { content: "\e600"; }

	.icon-mima:before { content: "\e627"; }

	.icon-shouji:before { content: "\e605"; }
	
</style>
