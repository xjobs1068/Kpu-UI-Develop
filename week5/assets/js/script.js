    $('.work').click(function(){
        let src = $(this).css('background-image');
        $('.modal .imgContainer').css('background-image',src)
        $('.modal').show();
    })
    $('.modal .img').click(function(event){
        $('.modal').hide();
        return false;
    })
    $('.modal').click(function(event){
        $('.modal').hide();
    })

    let urls = [
        'https://i.imgur.com/W56VkaT.jpg',
        'https://i.imgur.com/Y5JrEPB.jpg',
        'https://i.imgur.com/OD6uAcV.jpg',
        'https://i.imgur.com/wVVGZXP.jpg',
        'https://i.imgur.com/8Ansxnk.jpg',
        'https://i.imgur.com/KhTSDJi.jpg',
        'https://i.imgur.com/pOOKpng.jpg',
        'https://i.imgur.com/DGyKuyv.jpg',
        'https://i.imgur.com/InSk3Fi.jpg',
        'https://i.imgur.com/b9yZovM.jpg',
        'https://i.imgur.com/hQUk2em.jpg',
        'https://i.imgur.com/mksrbOg.jpg',
        'https://i.imgur.com/5UWcrWZ.jpg',
        'https://i.imgur.com/SE634r5.jpg',
        'https://i.imgur.com/RxfDDCz.jpg',
    ]
    $('.work').each(function(i,e){
        let url = urls[i];
        $(e).css('background-image','url('+url+')')
    })
