/**
 * $()
 *
 * $().on('click', function() {
 *
 * })
 *
 * const season = "";
 * let votesCount = "";
 *
 *
 * if() {
 *
 * } else if() {
 *
 * } else {
 *
 * }
 */
//コンソールという部分に46と表示される


    //$('#result').html(randomNumber);//1個目
    //console.log(Math.random());   

    ///ラジオボタン
    function Radio() {

     //どのラジオボタンがチェックされているか。（条件分岐で使用）
    check0 = document.RadioForm.normal.checked;  
    check1 = document.RadioForm.slope.checked;  
    check2 = document.RadioForm.man.checked;  
    check3 = document.RadioForm.random.checked; 

    var normal = document.querySelectorAll('.normal');
    var slope = document.querySelectorAll('.slope');
    var man = document.querySelectorAll('.man');
    var random = document.querySelectorAll('.random');



    }







    ///人数カウント部分
    let counter, btnAdd;
    let n;
 
    function addCount(){
    n++;
    counter.innerHTML = n;  
    }
 
    window.addEventListener("load", ()=>{
    // 起動時の処理
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btnAdd");
    n = 1;
 
    btnAdd.addEventListener("click", addCount);
    

    });


    



    ///割り勘スタートを押したとき
    $("#btn-start").on("click", function () {
        localStorage.setItem("todoText", 'シャンプーを買う');
    let element = document.getElementById('money');
    let counter= document.getElementById('counter');
    var r = $('input[name="choice"]:checked').val();
    var r1 = $('input[name="name"]:checked').val();
    console.log(r)
    console.log(r1)

    //const number = parseFloat(document.getElementById("money").value)

    //document.getElementById('result').textContent = `${money}`;

     console.log(element.value);
     
     console.log(n);
     
     
     
     const number1 = parseFloat(document.getElementById("money").value);
     


    if( r == "normal") {
    const money1 = number1/n;   
    $("#result").append(`<img src=""/>一人当たり${money1}円`);
    }
    
    else if (r == "slope") {
        const money1 = number1/n;   
        $("#result").append(`<img src=""/>一人当たり${money1}円`);
    }

    else if ( r == "man") {   
        
        const money1 = number1/n;   
        $("#result").append(`<img src=""/>一人当たり${money1}円`);
    }
    else if ( r == "random") {    

        var UserString = document.getElementById('name1').value;
       
        const members = [
            "春",
            "夏",
            "秋",
            "冬"
          ];
           
          // 配列からランダムに選ぶためのインデックス
          // ここを変更した
          const randomIndex = Math.floor(Math.random() * n);
          
          // ランダムに選ばれた seasons
          const currentmember = members[randomIndex];
           
          console.log(currentmember);
          
        $("#result").append(`<img src=""/>おごりは${currentmember}円`);
    }
        console.log(money1);
    
            

    
               
    
    
            
    });






    function addForm() {
        let child_length = document.querySelectorAll("div.member").length;
        let i = child_length+1;
    
        // 8人以上なら処理を終了する
        if (i > 8) {
            return;
    
        } else {
            // HTMLからtemplate要素を取得
            const template = document.getElementById("form-template");
    
            // templateの内容を複製
            const new_form = template.content.cloneNode(true);
    
            // 子要素を指定しname属性の値を変更
            const new_div = new_form.children[0];
            new_div.id = 'member-'+i;
    
            const new_form_name = new_form.children[0].children[0];
            new_form_name.name = 'name-'+i;
    
            const new_form_age = new_form.children[0].children[1];
            new_form_age.name = 'money'+i;
    
            const radio_male = new_form.children[0].children[2].children[0];
            radio_male.name = 'sex-'+i;
    
            const radio_female = new_form.children[0].children[3].children[0];
            radio_female.name = 'sex-'+i;
    
            //親要素を取得し 複製した要素を追加
            const parent = document.getElementById("input-form");
            parent.appendChild(new_form);
    
        }
    }
    
    //ページ読み込み時に関数addForm()を1回実行
    window.addEventListener('DOMContentLoaded', addForm);
    
    