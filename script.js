$(function(){
    $('input[type=file]').on('change',function(){
    var me=$(this).parent().parent().next();
    var file = $(this).prop('files')[0];
    var fr = new FileReader();
    if(file.type.match(/^image/)){
        me.children('.myimgs').remove();
        var imgtag=$('<img alt="test" class="myimgs">');
        me.append(imgtag);
        fr.onload = function() {
        imgtag.attr('src', fr.result);
        }
        fr.readAsDataURL(file);
    }
        if (document.getElementById('picture-error').innerHTML = "写真の投稿は必須です。") {
            document.getElementById('picture-error').innerHTML = "";
    }
    });
});

function validation() {
    var picture1 = document.getElementsByClassName('myimgs');
  
    var submitFlag = 0;
    if (picture1.length == 0) {
      submitFlag = 1;
      document.getElementById('picture-error').innerHTML = "写真の投稿は必須です。";
      //alert("picture");
    } else {
      document.getElementById('picture-error').innerHTML = "";
    }
  
    if (submitFlag == 0) {
        document.getElementsByClassName('js-modal-open')[0].click();
    } else {
      scrollTo(0, 0);
    }
  }
  
  $(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
  });
