export default {
	data() {
		return {
			webviewStyles: {
                    progress: {
                        color: '#41A863'
                    }
			},
			webUrl:''
		};
	},
	onload(){
		
	},
	onShow(){
		let that = this;
		let gonghao = uni.getStorageSync('userInfo').gonghao;
		uni.request({
			url:this.$FXUrl+'/webcontent?gonghao='+gonghao,
			method:'GET',
			success(rets) {
				that.webUrl=rets.data.webUrl;
			}
		})
	},
	methods:{
	}
}