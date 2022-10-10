<template>
	<div id="header">
		<div class="top-head">
			<ul>
				<li><router-link to="/">로그인</router-link></li>
				<li>/</li>
				<li><router-link to="/">회원가입</router-link></li>
			</ul>
		</div>
		<div class="bottom-head">
			<div class="bottom-headCont">
				<h1><router-link to="/"><img src="@/assets/images/logo.png" alt=""></router-link></h1>
				<ul>
					<li><router-link to="/info">파종회소개</router-link></li>
					<li><a href="https://myroot.co.kr/myroot_init" target="_blank">선원보감</a></li>
					<li><a href="https://myroot.co.kr/myroot_init" target="_blank">인터넷족보</a></li>
					<li><a href="https://myroot.co.kr/myroot_init" target="_blank">파종회소식</a></li>
					<li><router-link to="/databoard">자료실</router-link></li>
					<li><router-link to="/notice">열린마당</router-link></li>					
					<!--<li><router-link to="/test">테스트</router-link></li>-->
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HeaderItem',
  components: {
  }
}
</script>
