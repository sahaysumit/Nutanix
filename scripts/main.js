$(document).ready(function(){

	  $.getJSON("https://nutanix.0x10.info/api/deals?type=json&query=api_hits", function(data){
	  	$('#api-hits').text(data.api_hits);
	  });
	  $.getJSON("https://nutanix.0x10.info/api/deals?type=json&query=list_deals", function(data){
	  	var i = 0;
	  	 $.each(data.deals, function(){	
	  	 	var finalPrice = data.deals[i].actual_price *  (100 - data.deals[i].discount.slice(0,-1))/100; 
	  	 	// console.log(data.deals[i].discount.slice(0,-1));
	  	    $('ul.item-list').append("<li class='lists'><div class=''><i class='fa fa-chevron-right'></i>" 
	  	    	+"<i class='fa fa-chevron-right'></i><h3 class='name-of-item-header'>"+data.deals[i].name+"</h3>"
	  	    	+"</div><div class=''><i class='fa fa-user'></i><h4 class='manufacturer'>Provider:</h4><h4 class='manufacturer'>"+data.deals[i].provider+"</h4>"
	  	    	+"</div><div class=''><figure class='left-side'><img class='image-of-item' alt='' src='"+data.deals[i].image+"'></figure><div class='right-side'>"
	  	    	+"<div><i class='fa fa-star star1'></i><i class='fa fa-star star2'></i><i class='fa fa-star star3'></i><i class='fa fa-star star4'></i>"
	  	    	+"<i class='fa fa-star star5'></i><span class='rating'>\n"+data.deals[i].rating+"</span></div><div><i class='fa fa-link'></i><span class='name-of-item'>"
	  	    	+"Link:</span><a class='link-of-item' href='"+data.deals[i].link+"'>"+data.deals[i].link+"</a></div><div><span class='name-of-item'>Actual Price:</span>"
	  	    	+"<strike><i class='fa fa-rupee'></i><span class='actual-value'>"+data.deals[i].actual_price+"</span></strike></div><div><i class='fa fa-tag'>"
	  	    	+"</i><span class='name-of-item'>Final Price:</span><span class='final-price'><i class='fa fa-rupee'>"
	  	    	+"</i><span class='final-value'>"+finalPrice+"</span></span></div><div><div class='discount'>"+data.deals[i].discount+
	  	    	" off</div><div class='likes'><i class='fa fa-thumbs-o-up'></i><span class='no-of-likes'></span></div></div></div></div></li>");
			
			$('.rating').each(function(){
				var $this = $(this);

				if($this.text() > 0 && $this.text() <= 1){
					$this.siblings('.star1').addClass('star-active');

				}
				else if($this.text() > 1 && $this.text() <= 2){
					$this.siblings('.star1').addClass('star-active');
					$this.siblings('.star2').addClass('star-active');
				}
				else if($this.text() > 2 && $this.text() <= 3){
					$this.siblings('.star1').addClass('star-active');
					$this.siblings('.star2').addClass('star-active');
					$this.siblings('.star3').addClass('star-active');
				}
				else if($this.text() > 3 && $this.text() <= 4){
					$this.siblings('.star1').addClass('star-active');
					$this.siblings('.star2').addClass('star-active');
					$this.siblings('.star3').addClass('star-active');
					$this.siblings('.star4').addClass('star-active');
				}
				else if($this.text() > 4 && $this.text() <= 5){
					$this.siblings('.star1').addClass('star-active');
					$this.siblings('.star2').addClass('star-active');
					$this.siblings('.star3').addClass('star-active');
					$this.siblings('.star4').addClass('star-active');
					$this.siblings('.star5').addClass('star-active');
				}
				else{
					$this.siblings('.star1').removeClass('star-active');
					$this.siblings('.star2').removeClass('star-active');
					$this.siblings('.star3').removeClass('star-active');
					$this.siblings('.star4').removeClass('star-active');
					$this.siblings('.star5').removeClass('star-active');
				}
			});
			// var listLength = $('.lists').length; 
			$('.lists').each(function(){
				$thiss = $(this);
				index = $thiss.index();
				$likeBtn = $thiss.find('.likes span');
			});
			if(index==0){
					$likeBtn.text(5);
				}
				else if(index==1){
					$likeBtn.text(10);
				}
				else if(index==2){
					$likeBtn.text(1);
				}
				else if(index==3){
					$likeBtn.text(4);
				}
				else if(index==4){
					$likeBtn.text(3);
				}
				else if(index==5){
					$likeBtn.text(2);
				}
	  	   
	  	    if(i<data.deals.length){
	  			i++;
	  		}
	  		
	
	  	});
		var counter = 0;
		var countLike = parseInt($('#totalCnt').text());
		$('.likes').on('click', function(){
			$this1 = $(this);
			var newNum = parseInt($this1.find('.no-of-likes').text());

			if($this1.hasClass('likes-clicked')){
				$this1.removeClass('likes-clicked');
				$this1.find('.no-of-likes').text(newNum - 1);
				counter-=1;
				
			}
			else{
				$this1.addClass('likes-clicked');
				$this1.find('.no-of-likes').text(newNum + 1);
				counter+=1;
				
			}
			$('#totalCnt').text(countLike + counter);
		});
		
			
			
	  });
		// var likes = [5, 10, 1, 4, 3, 2];
		// 	var text ="";

		// 	for(var j=0; j<likes.length; j++){
		// 		text += likes[j];
		// 		console.log($('.lists').index());
		// 		// $likeBtn.find('.likes span').text(text);
		// 	}
	console.log("\t\t\t\t\t%c    Developed by ~ Sumit Sahay", "color:blue; font-weight:bold");
	console.log("\t\t\t\t\t\t\t\tMobile Number:");
	console.log("\t\t\t\t\t%c   		 	+919886538652", "color:green; font-weight:bold");
	console.log("\n\t\t\t\t%c               Kindly run on server", "color:black; font-weight:bold");
});