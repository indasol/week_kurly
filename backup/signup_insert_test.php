<?
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

     // 회원가입 데이터 입력
     // 변수에 데이터 ㅏ가ㅏㅏㅏㅐ
    $userId="fnffn6935";
    $userPw="myung917!!";
    $userName="인다솔";
    $userEmail="fnffn6935@hanmail.net";
    $userHp="01012345678";
    $userPostcode="10000";
    $userAddr1="경기도 고양시 덕양구 화신로 311";
    $userAddr2="000-555";
    $userGender="여성";
    $userYear="2024";
    $userMonth="06";
    $userDate="29";
    $userChooga="TEST";
    $userChamyeoEvent="TE";
    $userChoochanginId="DD";
    $userService="SS";

    $sql = "INSERT INTO user (userId, userPw,userName, userEmail, userHp,userPostcode, userAddr1,userAddr2, userGender,userYear,userMonth, userDate,userChooga, userChamyeoEvent,userChoochanginId,userService) VALUES ( '$userId', '$userPw','$userName', '$userEmail', '$userHp', '$userPostcode', '$userAddr1', '$userAddr2', '$userGender', '$userYear', '$userMonth', '$userDate', '$userChooga', '$userChamyeoEvent','$userChoochanginId',  '$userService' )";
    $result =mysqli_query($conn, $sql);

    if($result == true){
        echo "데이터베이스에 성공적으로 저장되었습니다";
    }
    else{
        echo "데이터베이스에 저장 실패하였습니다.";
    }
?>