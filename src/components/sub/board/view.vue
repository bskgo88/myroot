<template>
  <div id="subpage" class="low">
    <SubBox class="Detail"/>
		<div class="MTView">
			<div class="VHeader">
				<strong class="VHText">{{$route.params.title}}</strong>
				<div class="VHDate">
					<span>게시일 : {{$route.params.create_date}}</span>
					<span>작성자 : {{$route.params.id}}</span>
				</div>
			</div>
			<div class="VText">
				{{$route.params.content}}
			</div>
			<div class="VBtn">
				<div class="VBLeft">
					<router-link to="/notice">수정</router-link>
					<router-link to="/notice">삭제</router-link>
				</div>
				<div class="VBRight"><span @click="this.$router.go(-1)">목록</span></div>
			</div>
		</div>
  </div><Footer />
</template>

<script>
import SubBox from '@/components/sub/subtopBox.vue';
import Footer from '@/include/footer.vue'; // 푸터

	export default {
		name: 'DetailPage',
		components: {
			SubBox,
			Footer,
		},
	}
</script>