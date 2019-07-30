export default {
	data() {
		return {
		};
	},
	onload(){
		
	},
	methods:{
		loginCheck(e){
			let username=e.detail.value.username.replace(/^\s+|\s+$/g, '');
			let gonghao=e.detail.value.gonghao.replace(/^\s+|\s+$/g, '');
			let creg = /^[\u2E80-\u9FFF]+$/;
			let myreg = /^\d{8}$/;
					
			if(username.length===0){
				return uni.showToast({
					icon:'none',
					title: '请输入姓名',
					duration: 1500,
				});
			}else if(!creg.test(username)){
				return uni.showToast({
					icon:'none',
					title: '姓名格式错误',
					duration: 1500,
				});
			}else if(gonghao.length===0){
				return uni.showToast({
					icon:'none',
					title: '输入工号或手机号后8位',
					duration: 1500,
				});
			}else if(!myreg.test(gonghao)){
				return uni.showToast({
					icon:'none',
					title: '工号格式错误',
					duration: 1500,
				});
			}else{
				uni.request({
					url:this.$FXUrl+'/appLogin?'+"username="+username+"&gonghao="+gonghao,
					method:'GET',
					success(res){
						let ownerNumber= res.data.ownerNumber;
						let alipay = res.data.alipay;
						if(res.data.code===300){
							return uni.showToast({
								icon:'none',
								title: '用户不存在',
								duration: 1500,
							});
						}else if(res.data.code===200){
							uni.showLoading({
								title: '加载中...',
								success() {
									let goTab = function(){
										uni.switchTab({
											url:'/pages/center/center',
											success() {
												uni.setStorage({
													key: 'userInfo',
													data: {username:username,gonghao:gonghao,ownerNumber:ownerNumber,alipay:alipay},
													success: function () {
														uni.hideLoading();
													}
												});												
											}
										});
										
									}
									
									setTimeout(goTab,1000);

								}
							});

						}
					}
				})
			}

		}
	}
}