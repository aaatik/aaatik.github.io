

$(document).ready(function () {   //dokumen ready maka akan menjalankan
 
    $.fn.uploadfoto = function () { //fungsi upload foto
        this.html(`<img src="img/im.png" alt="produk" id="produk" class="pointer" title="Upload foto Produk"/>
            <input type="file" id="upfoto" name="upfoto" class="hidden" accept="image/*">`); //image im ketika di klik akan upload

        function bacaGambar(input) { //fungsi baca gambar yg udh diupload
            if (input.files && input.files[0]) { //kalo filenya ada
                var reader = new FileReader();

                reader.onload = function (e) { 
                    $('#produk').attr('src', e.target.result); //ambil file foto
                    console.log(e.target.result);
                };

                reader.readAsDataURL(input.files[0]); //baca file foto
            }
        }

        $("#upfoto").change(function () {
              
        if (this.files[0].size > 3145728) {             // kalo file lebih dr 3mb atau 3145728 bytes
        alert("Gagal upload! File lebih dari 3MB!"); 
        } else { 
        bacaGambar(this);                             // kalo kurang dr 3mb nampilin gambar dan info
        $('#bawah').text("Nama file : " + this.files[0].name + " , size : " + this.files[0].size + " bytes" + " , tipe : " + this.files[0].type );    //nampilin info
      }
    });
    };

    $('.image').uploadfoto();    //menjalankan fungsi upload foto
});
