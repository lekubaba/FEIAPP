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
	},
	methods:{
		showQrcode(e){
			var number = uni.getStorageSync('userInfo').ownerNumber;
			let qrcodeBase64 = QR.createQrCodeImg('http://wx.feidaijun.com/newEnter/'+number, {
					 size: parseInt(200)//二维码大小
				})
			this.qrcodeBase64 = qrcodeBase64;
			this.zsAndTgImg = 'http://feidaijun.xiaohongxian.com/feidaijun_tg.png?v=20190506';
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
			this.zsAndTgImg = 'http://feidaijun.xiaohongxian.com/zs_code_2.png';
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
		}
	},
}