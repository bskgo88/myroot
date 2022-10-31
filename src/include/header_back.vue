<template>
	<div id="header">
		<div class="top-head">
			<ul>
				<li><router-link to="/" @click="modallogin = true">로그인 / 회원가입</router-link></li>
			</ul>
		</div>
		<div class="bottom-head">
			<div class="bottom-headCont">
				<h1><router-link to="/"><img src="@/assets/images/logo.png" alt=""></router-link></h1>
				<ul>
					<li><router-link to="/info">파종회소개</router-link>
						<div class="depth">
							<ul>
								<li><router-link to="/info">파종회약사</router-link></li>
								<li><router-link to="/info2">인사말씀</router-link></li>
								<li><router-link to="/info3">회칙</router-link></li>
								<li><router-link to="/info4">임원명단</router-link></li>
								<li><router-link to="/info5">파종회사무실</router-link></li>
							</ul>
						</div>
					</li>
					<li><router-link to="/book1">선원보감</router-link>
							<div class="depth">
							<ul>
								<li><router-link to="/book1">원파기, 선원</router-link></li>
								<li><router-link to="/book2">선원계보도</router-link></li>
								<li><router-link to="/book3">선원선계</router-link></li>
								<li><router-link to="/book4">선원계</router-link></li>
								<li><router-link to="/book5">분산도 및 비명</router-link></li>
								<li><router-link to="/book6">열성실기 및 기적비명</router-link></li>
							</ul>
						</div>
					</li>
					<li><a href="https://myroot.co.kr/myroot_init" target="_blank">인터넷족보</a></li>
					<li><router-link to="/news1">파종회소식</router-link>
						<div class="depth">
							<ul>
								<li><router-link to="/news1">행사일정</router-link></li>
								<li><router-link to="/news2">행사갤러리</router-link></li>
								<li><router-link to="/news3">행사동영상</router-link></li>
							</ul>
						</div>
					</li>
					<li><router-link to="/databoard">자료실</router-link>
						<div class="depth">
							<ul>
								<li><router-link to="/databoard">보학자료</router-link></li>
								<li><router-link to="/databoard2">전통예절</router-link></li>
								<li><router-link to="/databoard3">계촌법</router-link></li>
								<li><router-link to="/databoard4">동서양 년대대조표</router-link></li>
							</ul>
						</div>
					</li>
					<li><router-link to="/notice">열린마당</router-link>
						<div class="depth">
							<ul>
								<li><router-link to="/notice">게시판</router-link></li>
								<li><router-link to="/notice2">자유게시판</router-link></li>
								<li><router-link to="/notice3">관련사이트</router-link></li>
								<li><router-link to="/notice4">갤러리</router-link></li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="black-bg" v-if="modallogin === true">
			<a href="#none" class="modal-exit-btn"  v-on:click="modallogin = false">X</a>
			<div class="poptabCont white-bg">
				<ul class="popTab">
					<li :class="{active:currentTab === 0}">
						<a href="#" @click.prevent="currentTab = 0">로그인</a>
					</li>
					<li :class="{active:currentTab === 1}">
						<a href="#" @click.prevent="currentTab = 1">회원가입</a>
					</li>
				</ul>
				<div class="popInItem">
					<div class="poptabBox">
						<form class="formCaptcha" id="submitLogin">
							<div class="poptabItem" v-if="currentTab == 0">
								<strong class="itemTitle">MYroot 로그인</strong>
								<div class="inpItem">
									<label>아이디</label>
									<input type="text" id="id" name="id"
										onkeydown="if(event.keyCode==13){$('#pw').focus();return false;}" placeholder="ID를 입력해 주세요."
										data-gtm-form-interact-field-id="0">
								</div>
								<div class="inpItem">
									<label>비밀번호</label>
									<input type="password" id="pw" name="pw" onkeydown="if(event.keyCode==13){login();}"
										placeholder="비밀번호를 입력해 주세요." data-gtm-form-interact-field-id="1">
								</div>
								<button type="button" id="loginButton" onclick="login()" name="loginButton" class="poponBtn">로그인
								</button>
								<div class="forgotBtn"><a href="#n" class="forgotPopon">아이디 / 비밀번호 찾기</a></div>
							</div>
							<div class="poptabItem" v-if="currentTab == 1">
								<strong class="itemTitle">MYroot 회원가입</strong>
								<div class="inpItem">
									<label>아이디</label>
									<input type="text" name="logID" id="logID" placeholder="ID를 입력해 주세요.">
								</div>
								<div class="inpItem">
									<label>비밀번호</label>
									<input type="password" name="logpass" id="logpass" placeholder="비밀번호를 입력해 주세요.">
								</div>
								<div class="inpItem">
									<label>비밀번호 확인</label>
									<input type="password" name="logpasscom" id="logpasscom" placeholder="비밀번호를 한번 더 입력해 주세요.">
								</div>
								<div class="inpItem">
									<label>이름</label>
									<input type="text" name="logname" id="logname" placeholder="이름을 입력해 주세요.">
								</div>
								<div class="inpItem">
									<label>이메일</label>
									<input type="email" name="logmail" id="logmail" placeholder="E-mail을 입력해 주세요">
								</div>
								<div class="inpItem">
									<label>닉네임</label>
									<input type="text" name="lognickname" id="lognickname" placeholder="사용하실 닉네임을 입력해 주세요">
								</div>
								<button type="button" onclick="signUpMyRoot()" class="poponBtn">회원가입</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HeaderItem',
  components: {
  },
	data() {
	return {

		currentTab: 0,
		modallogin: false, 
	};
},
}
</script>
