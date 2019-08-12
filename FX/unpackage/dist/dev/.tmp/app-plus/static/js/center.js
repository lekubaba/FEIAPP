/* 引入二维码 */
import QR from "../../utils/wxqrcode.js" // 二维码生成器

export default {
	data() {
		return {
			zsAndTgImg:"",
			total:'',
			isQRCODE:false,
			isActivity:true,
			qrcodeBase64:'',
			userInfo:''
		};
	},
	onLoad(){
	},
	onShow(){
		
	},
	onReady(){
		this.userInfo = uni.getStorageSync('userInfo');
		var that = this;
		let gonghao = uni.getStorageSync('userInfo').gonghao;
		uni.request({
			url:this.$FXUrl+'/thisMonth?gonghao='+gonghao,
			method:'GET',
			success(ret) {
				that.total = ret.data;
			}
		})
		this.checkUser();
	},
	methods:{
		showQrcode(e){
			var self = this;
			var number = uni.getStorageSync('userInfo').ownerNumber;
			uni.request({
				url: 'http://wx.feidai.com/view/NewActivityDetail/FeidaiJun.asmx/CheckUserIsNewAgentOrOldAgent',
				method:'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				dataType: 'json',
				data: {
					phone: number
				},
				success(ret) {
					var data = ret.data;
					console.log(data);
					if (data.result == '0') {
						uni.showModal({
							title: '提示',
							content: '无法生成二维码，请联系管理员!',
							success: function (res) {
								if (res.confirm) {
									// console.log('用户点击确定');
								} else if (res.cancel) {
									// console.log('用户点击取消');
								}
							}
						});
					} else if (data.result == '1') {
						let bg_url_fei = 'https://feidaijun.xiaohongxian.com/fdNewCode.png';
						self.qrcodeBase64 = data.data;
						self.zsAndTgImg = 'https://feidaijun.xiaohongxian.com/fdNewCode.png';
						self.isQRCODE = true;
					} else if (data.result == '2' || data.result == '3') {
						uni.showModal({
							title: '提示',
							content: '您还未在飞贷APP上实名认证，无法生成推广二维码，请先去飞贷APP完成实名认证。',
							success: function (res) {
								if (res.confirm) {
									// console.log('用户点击确定');
								} else if (res.cancel) {
									// console.log('用户点击取消');
								}
							}
						});
					} else if (data.result == '5' || data.result == '6' || data.result == '7') {
						let tg_url = 'http://wx.feidaijun.com/newEnter/'+number;
						let bg_url = 'http://feidaijun.xiaohongxian.com/feidaijun_tg123.png';
						self.getCode(tg_url, bg_url);
					}
				}
			});
		},
		getCode(tg_url, bg_url) {
			let qrcodeBase64 = QR.createQrCodeImg(tg_url, {
					 size: parseInt(200)//二维码大小
				})
			this.qrcodeBase64 = qrcodeBase64;
			this.zsAndTgImg = bg_url;
			this.isQRCODE = true;
		},
		hideQrcode(e){
			this.isQRCODE = false;
		},
		hideAct(e){
			this.isActivity = false;
		},
		toAgent(e){
			var number = uni.getStorageSync('userInfo').ownerNumber;
			let qrcodeBase64 = QR.createQrCodeImg('http://wx.feidaijun.com/chaedu_activity_zs/'+number, {
					 size: parseInt(200)//二维码大小
				})
			this.qrcodeBase64 = qrcodeBase64;
			this.zsAndTgImg = 'http://feidaijun.xiaohongxian.com/feidaijun_zs123.png';
			this.isQRCODE = true;	
		},
		toProfile(e){
			uni.navigateTo({
				url:'/pages/profile/profile'
			})
		},
		toWEBVIEW(e){
			uni.navigateTo({
				url:'/pages/agent/agent'
			})
		},
		checkUser() {
			var number = uni.getStorageSync('userInfo').ownerNumber;
			uni.request({
				url: 'http://wx.feidai.com/view/NewActivityDetail/FeidaiJun.asmx/CheckUserIsRegisterFeiDaiAPP',
				method:'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				dataType: 'json',
				data: {
					phone: number
				},
				success(ret) {
					var data = ret.data;
					if (data.result == '2' || data.result == '3') {
						uni.showModal({
							title: '提示',
							content: '您还未在飞贷APP上实名认证，请尽快下载飞贷APP并进行实名认证。',
							success: function (res) {
								if (res.confirm) {
									// console.log('用户点击确定');
								} else if (res.cancel) {
									// console.log('用户点击取消');
								}
							}
						});
					}
				}
			});
		}
	},
}