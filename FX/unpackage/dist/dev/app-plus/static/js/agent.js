export default {
	data() {
		return {
		};
	},
	onload(){
		
	},
	methods:{
		agentCheck(e){
			let ownername=e.detail.value.ownername.replace(/^\s+|\s+$/g, '');
			let ownerNumber=e.detail.value.ownerNumber.replace(/^\s+|\s+$/g, '');
			let z_number = uni.getStorageSync('userInfo').ownerNumber;
			let creg = /^[\u2E80-\u9FFF]+$/;
			let nreg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(19[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
			if(ownername.length===0){
				return uni.showToast({
					icon:'none',
					title: '请输入姓名',
					duration: 1500,
				});
			}else if(!creg.test(ownername)){
				return uni.showToast({
					icon:'none',
					title: '姓名格式错误',
					duration: 1500,
				});
			}else if(ownerNumber.length===0){
				return uni.showToast({
					icon:'none',
					title: '输入手机号',
					duration: 1500,
				});
			}else if(!nreg.test(ownerNumber)){
				return uni.showToast({
					icon:'none',
					title: '手机号格式错误',
					duration: 1500,
				});
			}else{
				uni.request({
					url:this.$FXUrl+'/activity_gonghao_add',
					method:'POST',
					data:{z_number:z_number,ownername:ownername,ownerNumber:ownerNumber},
					success(res){
						if(res.data.code===320){
							return uni.showToast({
								icon:'none',
								title: '请重新登陆',
								duration: 2000,
							});
						}else if(res.data.code===330){
							return uni.showToast({
								icon:'none',
								title: '手机号被占用',
								duration: 2000,
							});
						}else if(res.data.code===310){
							return uni.showToast({
								icon:'none',
								title: '手机号被占用',
								duration: 2000,
							});
						}else if(res.data.code===200){
							return uni.showToast({
								icon:'none',
								title: '添加成功',
								duration: 2000,
							});
						}
					}
				})				
			}
		},
	}
}