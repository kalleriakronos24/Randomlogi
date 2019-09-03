$(document).ready(function(){
    

    $('#btn-to-display-modal').on('click', function(){
        $('.choose_img_modal').css('display', 'block');
        $('.modal-wrap').css('display', 'block');
    })
    $('.modal-wrap').on('click', function(){
        $('.choose_img_modal').css('display', 'none');
        $('.modal-wrap').css('display', 'none');
    })

       

        $(document).on("click","#thanbel img",function(){
            $('#btn-to-display-modal').text('Selected ✔');
            $('btn-to-display-modal').css('border-bottom', '1px solid blue');
            $(this).css("border","1px solid blue");
            $('#btn_next_modal').css('border', '1px solid blue');
            $('#btn_next_modal').css('transition', '0.5s');
            $('#btn_next_modal').css('cursor', 'pointer');
            $("#thanbel img").not($(this)).css("border","none");

                  
        });

            $(document).on('click','#btn_next_modal', () => {
                $('.modal-wrap').css('display', 'none');
                $('#thanbel').css('display', 'none');
            })

          $(document).on('click','#imagee', () =>{
              var imgz = $('#imagee').attr('src');
                $('#test').val(imgz);
          })

          $(document).on('click','#imagee-1', () =>{
            var imgz1 = $('#imagee-1').attr('src');
              $('#test').val(imgz1);
        })
        $(document).on('click','#imagee-2', () =>{
            var imgz2 = $('#imagee-2').attr('src');
              $('#test').val(imgz2);
        })
        $(document).on('click','#imagee-3', () =>{
            var imgz3 = $('#imagee-3').attr('src');
              $('#test').val(imgz3);
        })
        $(document).on('click','#imagee-4', () =>{
            var imgz4 = $('#imagee-4').attr('src');
              $('#test').val(imgz4);
        })

        $('#form-submit').submit(function(e) {
            e.preventDefault();
            var fd = new FormData($(this)[0]);
            $.ajax({
                url: '/user/sign-up',
                data: fd,
                processData:false,
                contentType: false,
                type: 'POST',
                success : (data) => {
                   $('#unhide-this').css('display','block');
                   $('#this-too').css('display','block');
                   $('#and-this-one').css('display','block');
                   $('#form-submit').css('display','none');
                }
            })
        })

        $('#msform-1').submit(function(e) {
            e.preventDefault();
            var fd = new FormData($(this)[0]);
            $.ajax({
                url: '/posts/store/vid',
                data: fd,
                processData:false,
                contentType: false,
                type: 'POST',
                success : (data) => {
                   $('#alert-success').css('display','block');
                }
            })
        })

        $('#msform-2').submit(function(e) {
            e.preventDefault();
            var fd = new FormData($(this)[0]);
            $.ajax({
                url: '/posts/store/pic',
                data: fd,
                processData:false,
                contentType: false,
                type: 'POST',
                success : (data) => {
                   $('#alert-success').css('display','block');
                }
            })
        })
        $('#msform-3').submit(function(e) {
            e.preventDefault();
            var fd = new FormData($(this)[0]);
            $.ajax({
                url: '/posts/edit/vid',
                data: fd,
                processData:false,
                contentType: false,
                type: 'POST',
                success : (data) => {
                   $('#alert-success').css('display','block');
                }
            })
        })

    $('.notif-signed-in a[href*=" "]').prop('href', (i, v) => {
        return v.replace(/%20/g,'');
    })

    var container = document.getElementsByClassName('container-fluid');
        if(container.length == 0){
           
            document.getElementById('container-fluid').style.display = "block"
        }else{
            document.getElementById('container-fluid').style.display = "none"
        }

})