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
 // 要素を取得
 let element3 = document.getElementById('btn3');
 let element4 = document.getElementById('btn5');


 // display: noneを設定
element3.style.display = 'none';
element4.style.display = 'none';

let question = [
    [
        "メタルワンの社長は誰でしょう(2024年度時点)",
        "1.カルロスゴーン",
        "2.北村京介",
        "3.堀江貴文",
        "2"//正解を隠して保持
    ],
    [
        "メタルワンの創立年は？",
        "1.2003年",
        "2.2001年",
        "3.2009年",
        "1"//正解を隠して保持
    ],
    [
        "メタルワンの企業理念:地球市民、正々堂々、あと一つは？",
        "1.みんな違ってみんないい",
        "2.三方よし",
        "3.高志創造",
        "3"//正解を隠して保持

    ]];

   //console.log(question[0][4]);


   let quiz = document.getElementById('question');
   let ans1 = document.getElementById('ans1');
   let ans2 = document.getElementById('ans2');
   let ans3 = document.getElementById('ans3');

   let correct = 0;//正解数
   let quizCnt = 0;//カウント
    ///配列で管理
   function quizSet(){
    quiz.textContent = question[quizCnt][0];
    ans1.textContent = question[quizCnt][1];
    ans2.textContent = question[quizCnt][2];
    ans3.textContent = question[quizCnt][3];
   }

   quizSet();

//引数ansでボタンの値を取得
   function answerCheck(ans){
    
    if(ans == question[quizCnt][4]){
        alert("大正解！！");
        correct++;
    }else
    {
        alert("不正解、、");
        
    }
       quizCnt++;//クイズ数をプラス

    


       if(quizCnt == question.length){//クイズ数とカウント一緒になったら終了
          
       // 要素を取得
    let element = document.getElementById('answer1');

     // display: noneを設定
    element.style.display = 'none';

      // 要素を取得
      let element1 = document.getElementById('answer2');

      // display: noneを設定
     element1.style.display = 'none';

     
     let element2 = document.getElementById('answer3');

     // display: noneを設定
    element2.style.display = 'none';
        
    element3.style.display = 'block';
    element4.style.display = 'block';

        if(correct == "3"){
        quiz.textContent = 'あなたのランクは社長級！！';
        ans1.textContent = "";
        ans2.textContent = "";
        ans3.textContent = "";

        document.getElementById("answer1").style.display ="block";
        answer1.style.display ="none";
    
         }
         else if(correct == "2"){
            quiz.textContent = 'あなたのランクは部長級！！';
            ans1.textContent = "";
            ans2.textContent = "";
            ans3.textContent = "";

           
        }
        else if(correct == "1"){
                quiz.textContent = 'あなたのランクは主任級！！';
                ans1.textContent = "";
                ans2.textContent = "";
                ans3.textContent = "";
        }
        else if(correct == "0"){
                    quiz.textContent = 'あなたのランクは新卒級！！';
                    ans1.textContent = "";
                    ans2.textContent = "";
                    ans3.textContent = "";
        }
        
    

       }else
       {
        quizSet();
           
       }


   }

   //ページをリロード

   function reloadPage() {
    location.reload();
  }
  
  document.getElementById("btn4").addEventListener("click", reloadPage);
