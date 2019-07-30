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
		alipayCheck(e){
			let gonghao = uni.getStorageSync('userInfo').gonghao;
			let alipay=e.detail.value.alipay.replace(/^\s+|\s+$/g, '');
			let nreg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(19[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
					
			if(alipay.length===0){
				return uni.showToast({
					icon:'none',
					title: '输入支付宝手机号',
					duration: 2500,
				});
			}else if(!nreg.test(alipay)){
				return uni.showToast({
					icon:'none',
					title: '支付宝绑定的手机号',
					duration: 2500,
				});
			}else{
				uni.request({
					url:this.$FXUrl+'/feixiaAlipay?'+"alipay="+alipay+"&gonghao="+gonghao,
					method:'GET',
					success(res){
						if(res.data.code===200){
							return uni.showToast({
								icon:'none',
								title: '已经绑过了',
								duration: 1500,
							});
						}else if(res.data.code===600){
							return uni.showToast({
								icon:'none',
								title: '系统错误',
								duration: 1500,
							});							
						}else if(res.data.code===205){
							return uni.showToast({
								icon:'none',
								title: '支付宝绑定成功',
								duration: 1500,
							});							
						}
					}
				})
			}

		}
	}
}