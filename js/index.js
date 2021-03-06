$(function(){
    $('.dropdwn li').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.dropdwn_menu",this).slideUp();
    });
});

$(function(){
	
	//高さの設定
	$('#slide').height($('#slide img').height());
	$(window).resize(function(){
		$('#slide').height($('#slide img').height());
	});
	
	//サムネイルをクリックしたときの処理
	$('#thumbnail a').click(function(){
		$('#slide img').before('<img src="'+$(this).attr('href')+'" alt="">');
		$('#slide img:last').fadeOut('fast', function(){
			$(this).remove();
		});
		return false;
	}).each(function(){
		//画像のプリロード
		$("<img>").attr("src", $(this).attr('href'));
	});
	
});

$(function(){
    $('#thumbnail li a').click(function(){
        $('#thumbnail li a').removeClass('show');
        $(this).addClass('show');
    });
});