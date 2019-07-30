export default {
	data() {
		return {
			number:9008000,
			activeA:'#E43d3d',
			activeB:'#999',
			activeC:'#999',
			activeD:'#999',
			levelData:'',
			seen:true
		};
	},
	onLoad(){
		
	},
	onShow(){},
	onReady(){
		var that =this;
		let gonghao = uni.getStorageSync('userInfo').gonghao;
		uni.request({
			url:that.$FXUrl+'/myself_yeji?gonghao='+gonghao,
			method:'GET',
			success(ret) {
				that.levelData = ret.data.myYeji;
			}
		})
	},
	methods:{
		activeAa(e){
			this.activeA = '#E43d3d';
			this.activeB = '#999';
			this.activeC = '#999';
			this.activeD = '#999';
			var that =this;
			let gonghao = uni.getStorageSync('userInfo').gonghao;
			uni.request({
				url:that.$FXUrl+'/myself_yeji?gonghao='+gonghao,
				method:'GET',
				success(ret) {
					that.levelData = ret.data.myYeji;
				}
			});
		},
		activeBb(e){
			this.activeB = '#E43d3d';
			this.activeA = '#999';
			this.activeC = '#999';
			this.activeD = '#999';
			var that =this;
			let gonghao = uni.getStorageSync('userInfo').gonghao;
			uni.request({
				url:that.$FXUrl+'/one_yeji?gonghao='+gonghao,
				method:'GET',
				success(ret) {
					that.levelData = ret.data.oneYeji;
				}
			});
		},
		activeCc(e){
			this.activeC = '#E43d3d';
			this.activeB = '#999';
			this.activeA = '#999';
			this.activeD = '#999';
			var that =this;
			let gonghao = uni.getStorageSync('userInfo').gonghao;
			uni.request({
				url:that.$FXUrl+'/two_yeji?gonghao='+gonghao,
				method:'GET',
				success(ret) {
					that.levelData = ret.data.twoYeji;
				}
			});
		},
		activeDd(e){
			this.activeC = '#999';
			this.activeB = '#999';
			this.activeA = '#999';
			this.activeD = '#E43d3d';
			var that =this;
			let gonghao = uni.getStorageSync('userInfo').gonghao;
			uni.request({
				url:that.$FXUrl+'/top_yeji?gonghao='+gonghao,
				method:'GET',
				success(ret) {
					that.levelData = ret.data.topYeji;
				}
			});
		},
	}
}