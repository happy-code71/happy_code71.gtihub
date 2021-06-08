window.onload = function(){
	star = function(){
		var liAll = document.querySelectorAll(".lattice");
		var star_btn = document.querySelector(".star");
		var end_btn = document.querySelector(".end");
		var time;
		var numberSet;
		var time_end;
		//颜色改变
		function colorChange(){
			var number = 0;
			var flag = true;
			numberSet = new Set();
			while(flag)
			{
					//取得三个随机数
				number = parseInt((Math.random())*9);
				numberSet.add(number);
				if(numberSet.size === 3){
					flag = false;
				}
			}
			numberSet.forEach(function(number){
				liAll[number].style.backgroundColor = `rgb(${parseInt((Math.random())*255)},${parseInt((Math.random())*255)},${parseInt((Math.random())*255)})`;
			});
		}
		//颜色还原
		function colorReduction(){
			clearTimeout(time_end);
			time_end = setTimeout(function(){
				numberSet.forEach(function(number){
					liAll[number].style.backgroundColor = "rgb(255,166,0)";
				});
			},500);
		}
		//执行事件
		star_btn.addEventListener("click",function(){
			time = setInterval(function(){
				colorChange()
				colorReduction()
			},600);
		});
		end_btn.addEventListener("click",function(){
			colorReduction()
			clearInterval(time);
		});
	}
	star();
}