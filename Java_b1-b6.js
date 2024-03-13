<!bai 1>
const form = document.querySelector('form');
const heSoAInput = document.querySelector('#he_so_a');
const heSoBInput = document.querySelector('#he_so_b');
const ketQuaDiv = document.querySelector('#ket_qua');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const heSoA = Number(heSoAInput.value);
  const heSoB = Number(heSoBInput.value);

  const nghiemX = -heSoB / heSoA;

  ketQuaDiv.innerHTML = `Nghiệm x = ${nghiemX}`;
});
    function bai2(){
    const name = document.getElementById("bai2-ten").value;
    const phone = document.getElementById("bai2-sdt").value;
    const email = document.getElementById("bai2-email").value;
    const option = document.getElementById("bai2-option");
    const optionText = option.options[option.selectedIndex].text;
    const mathe = document.getElementById("bai2-mathe").value;   
    const invoiceid = document.getElementById("bai2-invoiceid").value;
    const textarea = document.getElementById("input-description").value;
    window.alert("Họ và tên" +name +"\n Mã thẻ:" + mathe +"\n Số điện thoại:"+ phone +"Email:" +email +"\n 123"+"\n Loại KH" +optionText +"\n Nội dung góp ý "+ textarea
    );

}
<!bai 3>
function {
    const hoten = document.getElementById("B3-ten").value;
    const email = document.getElementById("B3-email").value;
    const title = document.getElementById("B3-title").value;
    const textarea = document.getElementById("B3-input-description").value;
    
    const confirmBox = confirm(
        "Họ và tên" +hoten +"Email:" +email  +"\n Nội dung góp ý "+ textarea
    );
    }
    <!---Bai4--->
    function calculate() {
        let weight = document.getElementById('weight').value
        let height= document.getElementById('height').value /100
        let bmi = (weight / (height * height))
        
        document.getElementById('bmi-output').innerHTML= 'Your BMI is' +" "+ bmi.toFixed(2)
        // tofixed làm tròn 
    
        if(bmi < 18.5){
            document.getElementById('total').innerHTML =  'Tình trạng : Dưới chuẩn '
        } else if (bmi >= 18.5 && bmi <= 24.9 ){
            document.getElementById('total').innerHTML =  'Tình trạng : Bình thường '
        } else if (bmi >= 25 && bmi <= 29.9){
            document.getElementById('total').innerHTML =  'Tình trạng : Thừa cân '
        } else if(bmi>=30 && bmi<34.9){
            document.getElementById('total').innerHTML =  'Tình trạng : Béo phì cấp độ 1'
        } else if(bmi>=35&&bmi<=39.9){
            document.getElementById('total').innerHTML =  'Tình trạng : Béo phì cấp độ 2 ' 
        } else if(bmi>=40){
            document.getElementById('total').innerHTML =  'Tình trạng : Béo phì cấp độ 3 ' 
    
        }
        
        if(weight == "" || height =="" || isNaN(weight) || isNaN(height) ){
            document.getElementById('total').innerHTML =  'vui lòng nhập đúng thông tin'
            document.getElementById('bmi-output').innerHTML= 'No calculate'
            
        }
    }
    
    <!---Bai5>
    function login(){
        var matkhau = document.form5.pass.value;
        var tendangnhap = document.form5.username.value;

        if(tendangnhap==""&& matkhau == ""){
            alert('Thông tin đăng nhập không để trống');
            return;
        }

        var co = confirm('Bạn muốn hiện mật khẩu' );
            if(co=1){
                confirm('mật khẩu:\n' + matkhau);
            }


    }
    
