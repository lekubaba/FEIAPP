export default {
	data() {
		return {
			activeB:"#E43D3D",
			activeC:"#474747",
			levelData:'',
			reward:'',
			isSeenB:true,
			isSeenC:false,
			gonghao:''
			
		};
	},
	onLoad(){
	},
	onShow(){
		this.gonghao = Number(uni.getStorageSync('userInfo').gonghao);
	},
	onReady(){
		let that = this;
		let gonghao = uni.getStorageSync('userInfo').gonghao;
		uni.request({
			url:that.$FXUrl+'/lastMonthOk?gonghao='+gonghao,
			method:'GET',
			success(res){
				that.levelData = res.data.hadCustom;
			}
		})
	},
	
	methods:{
		toGuize(e){
			uni.navigateTo({
				url:'/pages/guize/guize'
			})
		},
		activeBb(e){
			let that = this;
			this.activeB = '#E43d3d';
			this.activeC = '#474747';
			this.isSeenB = true;
			this.isSeenC = false;
			let gonghao = uni.getStorageSync('userInfo').gonghao;
			uni.request({
				url:that.$FXUrl+'/lastMonthOk?gonghao='+gonghao,
				method:'GET',
				success(res) {
					that.levelData = res.data.hadCustom;
				}
			})
		},
		activeCc(e){
			let that = this;
			this.activeC = '#E43d3d';
			this.activeB = '#474747';
			this.isSeenC = true;
			this.isSeenB = false;
			let gonghao = uni.getStorageSync('userInfo').gonghao;
			uni.request({
				url:that.$FXUrl+'/lastMonthNotOk?gonghao='+gonghao,
				method:'GET',
				success(res) {
					that.levelData = res.data.hadCustom;
				}
			})
		},
	}
}