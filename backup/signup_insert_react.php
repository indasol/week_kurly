<?
    // 보내는 주소와 받는 주소가 다른 경우 cors 정책 Access-Control-Allow-Origin header 추가
    header("Access-Control-Allow-Origin:*" );
    header("Access-Control-Allow-Headers:*");
    // 1. 권한설정
    // php 변수는 반드시 첫글자 $ 사인 사용
    // 끝에는 ; 쎄미클론 반드시 사용한다.
    $DB_SERVER = 'localhost';
    $DB_USER_NAME = 'fnffn6935';
    $DB_USER_PW = 'myung917!!';
    $DB_NAME = 'fnffn6935';

     // 1-2. db 연결
     $conn = mysqli_connect($DB_SERVER, $DB_USER_NAME, $DB_USER_PW, $DB_NAME);
     mysqli_set_charset($conn,'utf-8');

    // 회원가입 폼에서 리액트 전송 받은 데이터
    // 변수에 데이터 
    $userId=$_POST['userId'];
    $userPw=$_POST['userPw'];
    $userName=$_POST['userName'];
    $userEmail=$_POST['userEmail'];
    $userHp=$_POST['userHp'];
    $userPostcode=$_POST['userPostcode'];
    $userAddr1=$_POST['userAddr1'];
    $userAddr2=$_POST['userAddr2'];
    $userGender=$_POST['userGender'];
    $userYear=$_POST['userYear'];
    $userMonth=$_POST['userMonth'];
    $userDate=$_POST['userDate'];
    $userChooga=$_POST['userChooga'];
    $userChamyeoEvent=$_POST['userChamyeoEvent'];
    $userChoochanginId=$_POST['userChoochanginId'];
    $userService=$_POST['userService'];

    

    $sql = "INSERT INTO user (userId, userPw,userName, userEmail, userHp,userPostcode, userAddr1,userAddr2, userGender,userYear,userMonth, userDate,userChooga, userChamyeoEvent,userChoochanginId,userService) VALUES ( '$userId', '$userPw','$userName', '$userEmail', '$userHp', '$userPostcode', '$userAddr1', '$userAddr2', '$userGender', '$userYear', '$userMonth', '$userDate', '$userChooga', '$userChamyeoEvent','$userChoochanginId',  '$userService' )";
    $result =mysqli_query($conn, $sql);

    if($result == true){
        echo "데이터베이스에 성공적으로 저장되었습니다";
    }
    else{
        echo "데이터베이스에 저장 실패하였습니다.";
    }
?>