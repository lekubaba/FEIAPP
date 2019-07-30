export default {
	data() {
		return {
			activeA:'#E43d3d',
			activeB:'#999',
			activeC:'#999',
			activeD:'#999',
			levelData:'',
			counter:'',
			all_yeji:'',
			grade:'zero',
		};
	},
	onload(){
		
	},
	onShow(){
		
	},
	onReady(){
		let gonghao = uni.getStorageSync('userInfo').gonghao;
		var that = this;
		uni.request({
			url:this.$FXUrl+'/daili_mySelf?gonghao='+gonghao,
			method:'GET',
			success(ret) {
				that.levelData = ret.data.datas;
				that.counter = ret.data.counts;
				that.all_yeji = ret.data.z_yeji;
			}
		})
	},
	methods:{
		activeAa(e){
			this.activeA = '#E43d3d';
			this.activeB = '#999';
			this.activeC = '#999';
			this.activeD = '#999';
			let gonghao = uni.getStorageSync('userInfo').gonghao;
			var that = this;
			uni.request({
				url:this.$FXUrl+'/daili_mySelf?gonghao='+gonghao,
				method:'GET',
				success(ret) {
					that.levelData = ret.data.datas;
					that.counter = ret.data.counts;
					that.all_yeji = ret.data.z_yeji;
					that.levelX = 'zero';
				}
			})			
		},
		activeBb(e){
			this.activeB = '#E43d3d';
			this.activeA = '#999';
			this.activeC = '#999';
			this.activeD = '#999';
			let gonghao = uni.getStorageSync('userInfo').gonghao;
			var that = this;
			uni.request({
				url:this.$FXUrl+'/daili_one?gonghao='+gonghao,
				method:'GET',
				success(ret) {
					that.levelData = ret.data.datas;
					that.counter = ret.data.counts;
					that.all_yeji = ret.data.z_yeji;
					that.grade = 'one';
				}
			})
		},
		activeCc(e){
			this.activeC = '#E43d3d';
			this.activeB = '#999';
			this.activeA = '#999';
			this.activeD = '#999';
			let gonghao = uni.getStorageSync('userInfo').gonghao;
			var that = this;
			uni.request({
				url:this.$FXUrl+'/daili_two?gonghao='+gonghao,
				method:'GET',
				success(ret) {
					that.levelData = ret.data.datas;
					that.counter = ret.data.counts;
					that.all_yeji = ret.data.z_yeji;
					that.grade = 'two';
				}
			})
		},
		activeDd(e){
			this.activeC = '#999';
			this.activeB = '#999';
			this.activeA = '#999';
			this.activeD = '#E43d3d';
			let gonghao = uni.getStorageSync('userInfo').gonghao;
			var that = this;
			uni.request({
				url:this.$FXUrl+'/daili_top?gonghao='+gonghao,
				method:'GET',
				success(ret) {
					that.levelData = ret.data.datas;
					that.counter = ret.data.counts;
					that.all_yeji = ret.data.z_yeji;
					that.grade = 'top';
				}
			})
		},
	},
	onReachBottom(){
		let that = this;
		let len=this.levelData.length;
		let gonghao = uni.getStorageSync('userInfo').gonghao;
		
		if(that.grade === 'one'){
			uni.request({
				url:that.$FXUrl+'/daili_oneplus?len='+len+'&gonghao='+gonghao,
				method:'GET',
				success(ret) {
					that.levelData = that.levelData.concat(ret.data.datas);
				}
			})	
		}else if(that.grade==='two'){
			uni.request({
				url:that.$FXUrl+'/daili_twoplus?len='+len+'&gonghao='+gonghao,
				method:'GET',
				success(ret) {
					that.levelData = that.levelData.concat(ret.data.datas);
				}
			})	
		}else if(that.grade==='top'){
			uni.request({
				url:that.$FXUrl+'/daili_topplus?len='+len+'&gonghao='+gonghao,
				method:'GET',
				success(ret) {
					that.levelData = that.levelData.concat(ret.data.datas);
				}
			})	
		}
	}
}