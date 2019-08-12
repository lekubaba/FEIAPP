export default {
	data() {
		return {
			title: '三级返佣规则',
			rets:'',
		}
	},
	onLoad() {
		let that = this;
		uni.request({
			url:that.$FXUrl+'/getMoneyDetail',
			method:'GET',
			success(res) {
				that.rets = res.data;
			}
		})
	},
	onReady(){
		let that = this;
		uni.request({
			url:that.$FXUrl+'/getMoneyDetail',
			method:'GET',
			success(res) {
				that.rets = res.data;
			}
		})
	},
	methods: {


	}
}