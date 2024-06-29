import React from 'react';
import './scss/SubPublicComponent.scss';
import './scss/sub5.scss';
import axios from 'axios';

export default function Sub5Component(props) {
    /*
    idx 자동증가번호 auto increasement
    아이디 userId String 문자열 15
    비밀번호 userPw String 문자열16
    이름 userName String 문자열 50
    이메일 userEmail 문자열 250
    휴대폰 userHp 숫자만입력 11
    우편번호 userPostcode 문자열5
    주소1 userAddr1 문자열250
    주소2 userAddr2 문자열250
    성별 userGender 문자열4
    생년 userYear 숫자
    생월 userMonth 숫자
    생일  userDate 숫자
    추가입력사항1 userChooga 문자열50
    참여이벤트명 userChamyeoEvent 문자열200
    츄촌안어아다 userChoochanginId 문자열16
    이용약관동의 userService 문자열 500
    가입일 userGaib timestamp now()
    */
    // 상태관리 변수
    const [state ,setState ] = React.useState({
        userId : '',
        userPw : '',
        userPw1 : '',
        userPw2 : '',
        userName : '',
        userEmail : '',
        userHp : '',
        userPostcode : '',
        userAddr1 : '',
        userAddr2 : '',
        userGender : '',
        userYear : '',
        userMonth : '',
        userDate : '',
        userChooga : '',
        userChamyeoEvent : '',
        userChoochanginId : '',
        userService : '',
        userGaib  : '',
    });

    // 아이디 입력상자 이벤트
    const onChange = (e,type) => {
        console.log(e.target.value)
        if(type == 'userId'){
            setState({
                ...state,
                userId : e.target.value
            });
        }
        else if(type == 'userPw1'){
            setState({
                ...state,
                userPw1 : e.target.value
            });
        }
        else if(type == 'userPw2'){
            setState({
                ...state,
                userPw2 : e.target.value
            });
        }
        else if(type == 'userName'){
            setState({
                ...state,
                userName : e.target.value
            });
        }
        else if(type == 'userEmail'){
            setState({
                ...state,
                userEmail : e.target.value
            });
        }
        else if(type == 'userHp'){
            setState({
                ...state,
                userHp : e.target.value
            });
        }
        else if(type == 'userPostcode'){
            setState({
                ...state,
                userPostcode : e.target.value
            });
        }
        else if(type == 'userAddr1'){
            setState({
                ...state,
                userAddr1 : e.target.value
            });
        }
        else if(type == 'userAddr2'){
            setState({
                ...state,
                userAddr2 : e.target.value
            });
        }
        else if(type == 'userGender'){
            setState({
                ...state,
                userGender : e.target.value
            });
        }
        else if(type == 'userYear'){
            setState({
                ...state,
                userYear : e.target.value
            });
        }

        else if(type == 'userMonth'){
            setState({
                ...state,
                userMonth : e.target.value
            });
        }
        else if(type == 'userDate'){
            setState({
                ...state,
                userDate : e.target.value
            });
        }
        else if(type == 'userChooga'){
            setState({
                ...state,
                userChooga : e.target.value
            });
        }
        else if(type == 'userChamyeoEvent'){
            setState({
                ...state,
                userChamyeoEvent : e.target.value
            });
        }
        else if(type == 'userChoochanginId'){
            setState({
                ...state,
                userChoochanginId : e.target.value
            });
        }
        else if(type == 'userService'){
            setState({
                ...state,
                userService : e.target.value
            });
        }
        else if(type == 'userGaib'){
            setState({
                ...state,
                userGaib : e.target.value
            });
        }
    };

    const onSubmitSignUp = (e) => {
        e.preventDefault();
        // 폼 전송하기
        let formData = new FormData();
        formData.append('userId', state.userId);
        formData.append('userPw', state.userPw1);
        formData.append('userName', state.userName);
        formData.append('userEmail', state.userEmail);
        formData.append('userHp', state.userHp);
        formData.append('userPostcode', state.userPostcode);
        formData.append('userAddr1', state.userAddr1);
        formData.append('userAddr2', state.userAddr2);
        formData.append('userGender', state.userGender);
        formData.append('userYear', state.userYear);
        formData.append('userMonth', state.userMonth);
        formData.append('userDate', state.userDate);
        formData.append('userChooga', state.userChooga);
        formData.append('userChamyeoEvent', state.userChamyeoEvent);
        formData.append('userChoochanginId', state.userChoochanginId);
        formData.append('userService', state.userService);

        axios({
            url : 'http://indasol.co.kr/week_kurly/signup_insert_react.php',
            method:'POST',
            data : {}
        })
        .then((res) => {
            console.log("success");
        })
        .catch((err) => {
            console.log("fail" + err);
        })
    }

    return (
        <div id='sub5' className='sub'>
            <section id="signUp">
                <div className="container">

                    <div className="title">
                        <h2 className="title-text">회원가입</h2>
                        <div className="sub-title">
                            <h3><i>*</i><span>필수입력사항</span></h3>
                        </div>
                    </div>
                    
                    <div className="content sub5-content">
                       <form  onSubmit={onSubmitSignUp}>
                            <ul className='signup-form'>
                                <li className='list'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userId"><span>아이디</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <input 
                                                type="text" 
                                                maxLength={16}
                                                name='userId' 
                                                id='userId' 
                                                placeholder='아이디를 입력해주세요' 
                                                onChange={ (e) =>{ onChange(e,'userId')}}
                                                value={state.userId}
                                            />
                                        </div>

                                        <div className="right-box">
                                            <button >중복확인</button>
                                        </div>
                                        <p className='guid-text'></p>  
                                    </div>
                                </li>
                                <li className='list'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userPw1"><span>비밀번호</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <input 
                                                type="password"
                                                maxLength={16}   
                                                name='userPw1' 
                                                id='userPw1' 
                                                placeholder='비밀번호를 입력해주세요'
                                                onChange={ (e) =>{ onChange(e,'userPw1')}}
                                                value={state.userPw1}
                                            />
                                        </div>

                                        <div className="right-box">
                                           
                                        </div>
                                        <p className='guid-text'></p> 
                                    </div>
                                </li>
                                <li className='list'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userPw2"><span>비밀번호확인</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <input 
                                                type="password" 
                                                maxLength={16}  
                                                name='userPw2' 
                                                id='userPw2' 
                                                placeholder='비밀번호를 한번 더 입력해주세요' 
                                                onChange={ (e) =>{ onChange(e,'userPw2')}}
                                                value={state.userPw2}
                                            />
                                        </div>

                                        <div className="right-box">
                                            
                                        </div>
                                        <p className='guid-text'></p>
                                    </div>
                                </li>
                                <li className='list'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userName"><span>이름</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <input 
                                                type="text"   
                                                name='userName' 
                                                id='userName' 
                                                placeholder='이름을 입력해주세요' 
                                                onChange={ (e) =>{ onChange(e,'userName')}}
                                                value={state.userName}
                                            />
                                        </div>

                                        <div className="right-box">
                                            
                                        </div>
                                        <p className='guid-text'></p> 
                                    </div>                                   
                                </li>
                                <li className='list'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userEmail"><span>이메일</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <input 
                                                type="text"   
                                                name='userEmail' 
                                                id='userEmail' 
                                                placeholder='이메일을 입력해주세요'  
                                                onChange={ (e) =>{ onChange(e,'userEmail')}}
                                                value={state.userEmail}
                                            />
                                        </div>

                                        <div className="right-box">
                                            <button>중복확인</button>
                                        </div>
                                        <p className='guid-text'></p> 
                                    </div>
                                </li>
                                <li className='list hp1'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userHp"><span>휴대폰</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <input 
                                                type="text" 
                                                maxLength={11}  
                                                name='userHp' 
                                                id='userHp' 
                                                placeholder='숫자만 입력해주세요' 
                                                onChange={ (e) =>{ onChange(e,'userHp')}}
                                                value={state.userHp}
                                            />
                                        </div>

                                        <div className="right-box">
                                            <button className='hp-btn'>인증번호받기</button>
                                        </div>
                                        <p className='guid-text'></p>  
                                    </div>
                                </li>

                                            <li className='list hp2'>
                                                <div className="list-box">
                                                
                                                    <div className="input-box">
                                                        <input 
                                                            type="text"   
                                                            name='userHpAuthen' 
                                                            id='userHpAuthen' 
                                                            placeholder='인증번홓를 입력해주세요'  
                                                            onChange={ (e) =>{ onChange(e,'userHpAuthen')}}
                                                            value={state.userHpAuthen}
                                                        />
                                                        <span className='time-box'><em>03</em><em>00</em></span>
                                                    </div>

                                                    <div className="right-box">
                                                        <button>인증번호확인</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='list hp3'>
                                                <div className="list-box">
                                                    
                                                    <p className='guid-text show'>
                                                        인증번호가 오지 않는다면, 통신사 스팸 차단 서비스 혹은 휴대폰 번호 차단 여부를 확인해주세요. (컬리 1644-1107)
                                                    </p>
                                                                                        
                                                </div>
                                            </li>


                                <li className='list address1'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor=""><span>주소</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">                                            
                                            
                                            <button className='address-search-btn'>주소검색</button>
                                            
           
                                            <input 
                                                type="text"   
                                                name='userAddr1' 
                                                id='userAddr1' 
                                                placeholder='검색 주소' 
                                                onChange={ (e) =>{ onChange(e,'userAddr1')}}
                                                value={state.userAddr1}
                                            />

                                        </div>

                                        <div className="right-box">
                                            <button>재검색</button>
                                        </div>

                                    </div>
                                </li>
                                            <li className='list address2'>
                                                <div className="list-box">
                                                
                                                    <div className="input-box">
                                                        <input 
                                                            type="text"   
                                                            name='userAddr2' 
                                                            id='userAddr2' 
                                                            placeholder='나머지 주소를 입력하세요'  
                                                            onChange={ (e) =>{ onChange(e,'userAddr2')}}
                                                            value={state.userAddr2}
                                                        />
                                                    </div>
                                                    
                                                </div>
                                            </li>
                                            <li className='list address3'>
                                                <div className="list-box">
                                                
                                                    <p className='guid-text show'>
                                                        <strong>샛별배송</strong>
                                                        배송지에 따라 상품 정보가 달라질 수 있습니다.
                                                    </p>

                                                </div>
                                            </li>

                                <li className='list radio gender'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label><span>성별</span></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <label htmlFor="userMale">
                                                <input 
                                                    type="radio"   
                                                    name='userGender' 
                                                    id='userMale' 
                                                    value={'남자'} 
                                                    onChange={ (e) =>{ onChange(e,'userGender')}}
                                                />
                                                <span>남자</span>
                                            </label>
                                            <label htmlFor="userFemale">
                                                <input 
                                                    type="radio"  
                                                    name='userGender' 
                                                    id='userFemale' 
                                                    value={'여자'} 
                                                    onChange={ (e) =>{ onChange(e,'userGender')}}
                                                />
                                                <span>여자</span>
                                            </label>
                                            <label htmlFor="userNone">
                                                <input 
                                                    type="radio"   
                                                    name='userGender' 
                                                    id='userNone' 
                                                    value={'선택안함'}  
                                                    onChange={ (e) =>{ onChange(e,'userGender')}}
                                                />
                                                <span>선택안함</span>
                                            </label>
                                        </div>
                                    </div>      
                                </li>
                                <li className='list birth'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userYear"><span>생년월일</span></label>
                                        </div>                                       
                                        <div className="input-box">
                                            <ul>
                                                <li>
                                                    <input 
                                                        type="text" 
                                                        maxLength={4}   
                                                        name='userYear' 
                                                        id='userYear' 
                                                        placeholder='YYY'  
                                                        onChange={ (e) =>{ onChange(e,'userYear')}}
                                                    />
                                                </li>
                                                <li><i>/</i></li>
                                                <li>
                                                    <input 
                                                        type="text" 
                                                        maxLength={2}  
                                                        name='userMonth' 
                                                        id='userMonth' 
                                                        placeholder='MM' 
                                                        onChange={ (e) =>{ onChange(e,'userMonth')}}
                                                    />
                                                </li>
                                                <li><i>/</i></li>
                                                <li>
                                                    <input 
                                                        type="text" 
                                                        maxLength={2}  
                                                        name='userDate' 
                                                        id='userDate' 
                                                        placeholder='DD' 
                                                        onChange={ (e) =>{ onChange(e,'userDate')}}
                                                    />
                                                </li>
                                            </ul>                                            
                                        </div>
                                        <p className='guid-text'></p> 
                                    </div>        
                                </li>
                                <li className='list radio chooga'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label><span>추가입력사항</span></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <label htmlFor="userChooga1">
                                                <input 
                                                    type="radio"   
                                                    name='userChooga1' 
                                                    id='userChooga1' 
                                                    value={'친구초대 추천인 아이디'} 
                                                    onChange={ (e) =>{ onChange(e,'userChooga')}}
                                                />
                                                <span>친구초대 추천인 아이디</span>
                                            </label>
                                            <label htmlFor="userChamyeoEvent">
                                                <input 
                                                    type="radio"  
                                                    name='userChamyeoEvent' 
                                                    id='userChamyeoEvent' 
                                                    value={'참여 이벤트명'} 
                                                    onChange={ (e) =>{ onChange(e,'userChamyeoEvent')}}
                                                />
                                                <span>참여 이벤트명</span>
                                            </label>                                            
                                        </div>
                                    </div>      
                                </li>
                                        <li className='list chooga userChoogaId'>
                                            <div className="list-box">
                                            
                                                <div className="input-box">
                                                    <input 
                                                        type="text"   
                                                        name='userChoochanginId' 
                                                        id='userChoochanginId' 
                                                        placeholder='추천인 아이디를 입력해주세요' 
                                                        onChange={ (e) =>{ onChange(e,'userChoochanginId')}}
                                                    />
                                                </div>
                                                <div className="right-box">
                                                    <button>아이디 확인</button>
                                                </div>
                                                <p className='guid-text show'>
                                                    가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.
                                                </p> 

                                            </div>                                   
                                        </li>                      
                                    
                                        <li className='list chooga userChoogaEvent'>
                                            <div className="list-box">
                                            
                                                <div className="input-box">
                                                    <input 
                                                        type="text"   
                                                        name='userChamyeoEvent1' 
                                                        id='userChamyeoEvent1' 
                                                        placeholder='참여 이벤트명을 입력해주세요' 
                                                        onChange={ (e) =>{ onChange(e,'userChamyeoEvent')}}
                                                    />
                                                </div>                                        
                                                <p className='guid-text show'>
                                                    추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.<br/>
                                                    가입 이후는 수정이 불가능 합니다.<br/>
                                                    대소문자 및 띄어쓰기에 유의해주세요.
                                                </p> 

                                            </div>                                   
                                        </li>    

                                <li className='list hr'>
                                    <div className="list-box">
                                        <hr />
                                    </div>
                                </li>

                                <li className='list servie servie1'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label><span>이용약관동의</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <label htmlFor="userServiceAll">
                                                <input 
                                                    type="checkbox"   
                                                    name='userServiceAll' 
                                                    id='userServiceAll' 
                                                    value={'전체 동의합니다.'} 
                                                    onChange={ (e) =>{ onChange(e,'userService')}}
                                                />
                                                <span>전체 동의합니다.</span>
                                            </label>
                                        </div>                                        
                                        <p className='guid-text show'>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>  
                                    </div>
                                </li>
                                <li className='list servie'>
                                    <div className="list-box">
                                       
                                        <div className="input-box">
                                            <label htmlFor="userService1">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService1' 
                                                    value={'이용약관 동의(필수)'} 
                                                    onChange={ (e) =>{ onChange(e,'userService')}}
                                                />
                                                <span>이용약관 동의</span>
                                            </label>
                                            <em>(필수)</em>
                                        </div>  

                                        {/* 약관보기 */}
                                        <button className='service-view'><span>약관보기</span><img src="http://localhost:3000/images/sub/sub5/icon_arrow_right.svg" alt="" /></button>
                                    </div>
                                </li>
                                <li className='list servie'>
                                    <div className="list-box">
                                       
                                        <div className="input-box">
                                            <label htmlFor="userService2">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService2' 
                                                    value={'개인정보 수집∙이용 동의(필수)'} 
                                                    onChange={ (e) =>{ onChange(e,'userService')}}
                                                />
                                                <span>개인정보 수집∙이용 동의</span>
                                            </label>
                                            <em>(필수)</em>
                                        </div>                                        

                                        {/* 약관보기 */}
                                        <button className='service-view'><span>약관보기</span><img src="http://localhost:3000/images/sub/sub5/icon_arrow_right.svg" alt="" /></button>

                                    </div>
                                </li>
                                <li className='list servie'>
                                    <div className="list-box">
                                       
                                        <div className="input-box">
                                            <label htmlFor="userService3">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService3' 
                                                    value={'개인정보 수집∙이용 동의(선택)'} 
                                                    onChange={ (e) =>{ onChange(e,'userService')}}
                                                />
                                                <span>개인정보 수집∙이용 동의</span>
                                            </label>
                                            <em>(선택)</em>
                                        </div>             
                                       
                                        {/* 약관보기 */}
                                        <button className='service-view'><span>약관보기</span><img src="http://localhost:3000/images/sub/sub5/icon_arrow_right.svg" alt="" /></button>
                           
                                    </div>
                                </li>
                                <li className='list servie'>
                                    <div className="list-box">
                                       
                                        <div className="input-box">
                                            <label htmlFor="userService4">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService4' 
                                                    value={'무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)'} 
                                                    onChange={ (e) =>{ onChange(e,'userService')}}
                                                />
                                                <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</span>
                                            </label>
                                            <em>(선택)</em>
                                        </div>                                        
                                    </div>
                                </li>
                                <li className='list servie servie5'>
                                    <div className="list-box">
                                        <div className="input-box">
                                            <label htmlFor="userService5">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService5' 
                                                    value={'SNS'} 
                                                />
                                                <span>SNS</span>
                                            </label>
                                            <label htmlFor="userService6">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService6' 
                                                    value={'이메일'} 
                                                />
                                                <span>이메일</span>
                                            </label>
                                        </div>                                        
                                        <p className='guid-text show'>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>  
                                    </div>
                                </li>
                                <li className='list servie'>
                                    <div className="list-box">
                                      
                                        <div className="input-box">
                                            <label htmlFor="userService7">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService7' 
                                                    value={'본인은 만 14세 이상입니다.(필수)'} 
                                                />
                                                <span>본인은 만 14세 이상입니다.</span>
                                            </label>
                                            <em>(필수)</em>
                                        </div>                                        
                                    </div>
                                </li>                               
                            </ul>
                            <div className="button-box">
                                <button type='submit'>가입하기</button>
                            </div>
                       </form>
                    </div>

                </div>
            </section>
        </div>
    );
}