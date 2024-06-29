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

    if($conn == false){
        echo "데이터베이스 연결 실패";
    }
    else{
        echo "데이터베이스 연결 성공";
    }
    // 2. 본문

    // 3. 결문
?>