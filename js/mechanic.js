const incident = {
	data:{
		widthDistance:0,
      	heightDistance:0,
      	item:null,
      	lock:false,
      	itemAgoX:0,
      	itemAgoY:0,
	},
	init:function(){
		$('#giftWishBttom').on('click',this.add);
		$('.label-container').on('mousedown','.label-image',this.imageMousedown);
		$('.label-container').on('mousedown','.label-item',this.itemMousedown);
		$('.label-container').on('mousemove',this.containerMousemove);
		$('.label-container').on('mouseup','.label-item',this.itemMouseup);
		$('.label-container').on('mouseleave',this.containerMouseleave);
	},
	imageMousedown:function(e){
		console.log(1);
		e.preventDefault();
	},
	add:function(){
		let value = $('#textarea').val();
		if (!value) {
			return
		}
		console.log(value);
		let consoleWidth = $('.label-container').width();
		let consoleHight = $('.label-container').height();
		let itemWidth = $('.label-item').width();
		let itemHeight = $('.label-item').height();
		let color = ['#E3E3E3', '#AEEEEE', '#F8F8FF', '#D1EEEE', '#CFCFCF', '#CDB7B5', '#EECBAD', '#ADD8E6', '#7AC5CD', '#7AC5CD', '#6CA6CD'];
		let left = incident.random(itemWidth,itemHeight);
		let top = incident.random(itemHeight,itemWidth);
		let randomFigure = Math.floor(Math.random() * 10 );
		console.log(randomFigure);
		let background = $(color).eq(randomFigure)[0];
		console.log(background)
		let html = `<div class="label-item" style="left:${left}px;top:${top}px;background-color:${background}">
						<div class="label-image">
							<img class="img-image" src="mechanic/34.png" alt="javascript:;">
						</div>
						<p class="item-title">小兔兔说：</p>
						<p class="item-desc">${value}</p>
					</div>`;

		console.log(html);
		$('.label-item').css('z-index', 0)
		$('.label-container').append(html);
		$('#textarea').val('');
	},
	itemMousedown:function(e){
		incident.data.lock = true;
		incident.data.item = this;
		// 现在鼠标点击的位置X
		incident.data.widthDistance = e.clientX;
		// 现在鼠标点击的位置Y
		incident.data.heightDistance = e.clientY;
		// 鼠标点击的文件对象对于文档左侧的距离
		incident.data.itemAgoX = this.offsetLeft; 
		// 鼠标点击的文件对象对于文档头部的距离
		incident.data.itemAgoY = this.offsetTop; 
		$('.label-item').css('z-index', 1);
		$(this).css('z-index', 3);
	},
	containerMousemove:function(e){
		let lock = incident.data.lock;
		if (!lock) {
			return
		}
		// 鼠标现在移动
		let nowMoveX = e.clientX;
		let nowMoveY = e.clientY;
		// 鼠标开始点击的位置
		let initialX = incident.data.widthDistance;
		let initialY = incident.data.heightDistance;
		//文件和文件开始的位置
		let item = incident.data.item;
		let itemInitialX = incident.data.itemAgoX;
		let itemInitialY = incident.data.itemAgoY;
		// 得出距离
		let ldftX = itemInitialX - (initialX - nowMoveX);
		let topY = itemInitialY - (initialY - nowMoveY);
		$(item).css({
			top:topY,
			left:ldftX
		})
	},
	containerMouseleave:function(){
		incident.data.lock = false;
		incident.data.item = null;
		// 现在鼠标点击的位置X
		incident.data.widthDistance = 0;
		// 现在鼠标点击的位置Y
		incident.data.heightDistance = 0;
		// 鼠标点击的文件对象对于文档左侧的距离
		incident.data.itemAgoX = 0; 
		// 鼠标点击的文件对象对于文档头部的距离
		incident.data.itemAgoY = 0; 
		console.log(1);
	},
	itemMouseup:function(){
		incident.data.lock = false;
		incident.data.item = null;
		// 现在鼠标点击的位置X
		incident.data.widthDistance = 0;
		// 现在鼠标点击的位置Y
		incident.data.heightDistance = 0;
		// 鼠标点击的文件对象对于文档左侧的距离
		incident.data.itemAgoX = 0; 
		// 鼠标点击的文件对象对于文档头部的距离
		incident.data.itemAgoY = 0; 
		$(this).css('z-index', + 2)
	},
	// randoMove:function(){
	// 	let all = $('.label-item');
	// 	let consoleWidth = $('.label-container').width();
	// 	let consoleHight = $('.label-container').height();
	// 	let itemWidth = $('.label-item').width();
	// 	let itemHeight = $('.label-item').height();
	// 	let randomFigure = Math.floor(Math.random() * 10 );
	// 	console.log(all);
	// 	all = $('.label-item').map((item) =>{
	// 		let leftCount = incident.random(itemWidth,itemHeight);
	// 		let topCount = incident.random(itemHeight,itemWidth);
	// 		$(item).css('left', leftCount + 'px');
	// 		$(item).css('top', topCount + 'px');
	// 	})
	// 	console.log(all);

	// },
	random:function(main,minor){
		return Math.floor(Math.random() * (minor - main) + main);
	},

}
incident.init();