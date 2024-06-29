import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setLogout } from '../../store/login';

export default function HeaderComponent(props) {
    const selector = useSelector((state) =>state.login);
    const loginId = selector.loginId;
    const loginName = selector.loginName;
    const admin = selector.admin;

    const dispatch = useDispatch();
    const [state, setState ] = React.useState({
        loginId : selector.loginId,
        loginName : selector.loginName,
        admin : selector.admin
    });

    const onClickLogin = (e) => {
        e.preventDefault();
        dispatch(setLogin());// redux 함수 호출 실행
    }

    const logout = (e) => {
        e.preventDefault();
        dispatch(setLogout());// redux 함수 호출 실행
    }

    return (
        <>
            <header id='header'>
                <div className='row1'>
                    <div className='container'>
                        <div className='content'>
                            <aside>
                                <ul>
                                    {
                                    loginId===null? 
                                        <>
                                        <li><a href='/sub5' className='on'>회원가입</a></li>
                                        <li><i>|</i></li>
                                        <li onClick={onClickLogin}><Link to='/sub6'>로그인</Link></li>
                                        </>
                                    :
                                        <>
                                        <li>
                                            <a href='?Page=/wrap/sub/signup.jsp' className='on'>{loginName} 님 <img width='8' src='./images/header/ico_down_16x10.png' alt='' /></a>
                                            <div className='aside-sub login'>
                                            { admin === false ?
                                                <>
                                                <ul>
                                                    <li><a href='!#'>주문 내역</a></li>
                                                    <li><a href='!#'>쿠폰</a></li>
                                                    <li><a href='!#'>찜한 상품</a></li>
                                                    <li><a href='!#'>자주 구매</a></li>
                                                    <li><a href='!#'>적립금 · 컬리캐시</a></li>
                                                    <li><a href='!#'>결제수단 · 컬리페이</a></li>
                                                    <li><a href='!#'>상품 후기</a></li>
                                                    <li><a href='!#'>선물 내역</a></li>
                                                    <li><a href='!#'>상품 문의</a></li>
                                                    <li><a href='!#'>컬리멤버스</a></li>
                                                    <li><a href='!#'>배송지 관리</a></li>
                                                    <li><a href='!#'>나의 컬리 스타일</a></li>
                                                    <li><a href='?Page=/wrap/sub/signup_info.jsp'>개인 정보 수정</a></li>
                                                    <li onClick={ logout }><a href='UserLogoutActionServlet.do'>로그아웃</a></li>	
                                                </ul>
                                                </>
                                                :
                                                <>
                                                <ul>
                                                    <li><a href='!#'>회원 목록</a></li>
                                                    <li><a href='?Page=/wrap/admin/signup_info.jsp'>개인 정보 수정</a></li>
                                                    <li onClick={ logout }><a href='AdminLogoutActionServlet.do'>로그아웃</a></li>	
                                                </ul>
                                                </>
                                                }
                                            </div>
                                        </li>		
                                        </>								
                                    }
                                    <li><i>|</i></li>
                                    <li>
                                        <a href='/sub7'>고객센터 <img width='8' src='./images/header/ico_down_16x10.png' alt='' /></a>
                                        <div className='aside-sub board'>
                                            <ul>
                                                <li><Link to='!#'>공지사항</Link></li>
                                                <li><Link to='!#'>자주하는 질문</Link></li>
                                                <li><Link to='!#'>1:1 문의</Link></li>
                                                <li><Link to='!#'>대량주문 문의</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
                <div className='row2'>
                    <div className='container'>
                        <div className='content'>
                            <div className='left'>
                                <h1 className='header-logo'>
                                    <img alt="logo" src="./images/main/logo.svg" />
                                    <Link to='/main'>마켓컬리</Link>
                                </h1>
                                <i>|</i>
                                <a href='!#'>뷰티컬리</a>
                            </div>
                            <div className='center'>
                                <input name='headerSearch' id='headerSearch' placeholder='검색어를 입력해주세요' />
                            </div>
                            <div className='right'>
                                <span>
                                    <a href='!#'><img alt="logo" src="./images/main/icon_delivery.svg" /></a>
                                    <a href='!#'><img alt="logo" src="./images/main/icon_heart.svg" /></a>
                                    <a href='!#'><img alt="logo" src="./images/main/icon_cart.svg" /></a>
                                </span>					
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row3'>
                    <div className='container'>
                        <div className='content'>
                            <div className='left'>
                                <a href='!#'>
                                    <img src='./images/main/icon_3bar.svg' alt='' />
                                    <strong>카테고리</strong>
                                </a>
                            </div>
                            <div className='center'>
                                <nav>
                                    <ul>
                                        <li><Link to='/sub1' className='main-btn'>신상품</Link></li>
                                        <li><Link to='/sub2' className='main-btn'>베스트</Link></li>
                                        <li><Link to='/sub3' className='main-btn'>알뜰상품</Link></li>
                                        <li><Link to='/sub4' className='main-btn'>특가/혜택</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='right'>
                                <span>
                                    <strong>샛별·하루</strong>
                                    <em>배송안내</em>
                                </span>
                            </div>
                        </div>
                    </div>	
                </div>
            </header>  
            <Outlet/>
        </>
    );
}

