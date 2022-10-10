<template>
    <div id="noticeCont">
        <div class="notice-left">
            <div class="notice-leftBox">
                <h3>종친회 소식</h3>
                <span>다양한 종친회의 소식을<br/> 전해드립니다.</span>
                <router-link to="/">더보기 <i :style="{'background-image': 'url(' + require('../assets/images/icon/more-arrow.png') + ')'}"></i></router-link>
            </div>
        </div>
        <div class="notice-right">
            <ul class="notice-tab">
                <li><router-link to="/">전체</router-link></li>
                <li><router-link to="/">공지사항</router-link></li>
                <li><router-link to="/">행사일정</router-link></li>
                <li><router-link to="/">자유게시판</router-link></li>
            </ul>
            <div class="notice-box">
                <ul>
                    <li>
                        <span>공지사항</span>
                        <b>인터넷족보 등록 및 신청요령</b>
                        <i>2022.07.21</i>
                        <u>최고관리자</u>
                        <router-link to=""></router-link>
                    </li>
                    <li>
                        <span>공지사항</span>
                        <b>인터넷족보 등록 및 신청요령</b>
                        <i>2022.07.21</i>
                        <u>최고관리자</u>
                        <router-link to=""></router-link>
                    </li>
                    <li>
                        <span>공지사항</span>
                        <b>인터넷족보 등록 및 신청요령</b>
                        <i>2022.07.21</i>
                        <u>최고관리자</u>
                        <router-link to=""></router-link>
                    </li>
                    <li>
                        <span>공지사항</span>
                        <b>인터넷족보 등록 및 신청요령</b>
                        <i>2022.07.21</i>
                        <u>최고관리자</u>
                        <router-link to=""></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'noticeItem',
    components: {
    }
}
</script>