<template>
  <div id="subpage" class="low">
    <SubBox/>
		<div class="MTView">
			<div class="VHeader">
				<strong class="VHText">제목이 들어가는 부분입니다. 제목이 들어가는 부분입니다.</strong>
				<div class="VHDate">
					<span>게시일 : 2022.10.11 13:16</span>
					<span>조회수 : 125</span>
				</div>
			</div>
			<div class="VText">
				<p>내용이 들어갑니다.</p>
				<p>내용이 들어갑니다.</p>
				<p>내용이 들어갑니다.</p>
				<p>내용이 들어갑니다.</p>
				<p>내용이 들어갑니다.</p>
				<p>내용이 들어갑니다.</p>
				<p>내용이 들어갑니다.</p>
				<p>내용이 들어갑니다.</p>
				<p>내용이 들어갑니다.</p>
			</div>
			<div class="VBtn">
				<div class="VBLeft">
					<router-link to="/notice">수정</router-link>
					<router-link to="/notice">삭제</router-link>
				</div>
				<div class="VBRight"><router-link to="/notice">목록</router-link></div>
			</div>
		</div>
  </div><Footer />
</template>

<script>
import SubBox from '@/components/sub/subtopBox.vue';
import Footer from '@/include/footer.vue'; // 푸터

	export default {
		name: 'BoardViewPage',
		components: {
			SubBox,
			Footer,
		},
		data (){
		return {
				}
		},
	}
</script>