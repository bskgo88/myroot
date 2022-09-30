<template>
	<div id="header">
		<ul>
			<li><router-link to="/">파종회소개</router-link></li>
			<li><router-link to="/sub1">선원보감</router-link></li>
			<li><router-link to="/sub1">인터넷족보</router-link></li>
			<li><router-link to="/sub1">파종회소식</router-link></li>
			<li><router-link to="/sub1">자료실</router-link></li>
			<li><router-link to="/sub1">열린마당</router-link></li>
				
			<li>
				<router-link to="/test">테스트</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'HeaderItem',
  components: {
  }
}
</script>
