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
                <li v-for="(tab, index) in tabList" :key="index" :class="{active:currentTab === index}">
                    <a href="#" @click.prevent="currentTab = index">{{ tab }}</a>
                </li>
            </ul>
            <div class="notice-box tab-cont"  v-if="currentTab == 0">
                <ul>
                    <li>
                        <span>공지사항</span>
                        <b>인터넷족보 등록 및 신청요령</b>
                        <i>2022.07.21</i>
                        <u>최고관리자</u>
                        <router-link to=""></router-link>
                    </li>
                    <li>
                        <span>행사일정</span>
                        <b>인터넷족보 등록 및 신청요령</b>
                        <i>2022.07.21</i>
                        <u>최고관리자</u>
                        <router-link to=""></router-link>
                    </li>
                    <li>
                        <span>자유게시판</span>
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
            <div v-if="currentTab == 1" class="notice-box tab-cont"><ul>
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
            </ul></div>
            <div v-if="currentTab == 2" class="notice-box tab-cont"><ul>
                <li>
                    <span>행사일정</span>
                    <b>인터넷족보 등록 및 신청요령</b>
                    <i>2022.07.21</i>
                    <u>최고관리자</u>
                    <router-link to=""></router-link>
                </li>
                <li>
                    <span>행사일정</span>
                    <b>인터넷족보 등록 및 신청요령</b>
                    <i>2022.07.21</i>
                    <u>최고관리자</u>
                    <router-link to=""></router-link>
                </li>
                <li>
                    <span>행사일정</span>
                    <b>인터넷족보 등록 및 신청요령</b>
                    <i>2022.07.21</i>
                    <u>최고관리자</u>
                    <router-link to=""></router-link>
                </li>
                <li>
                    <span>행사일정</span>
                    <b>인터넷족보 등록 및 신청요령</b>
                    <i>2022.07.21</i>
                    <u>최고관리자</u>
                    <router-link to=""></router-link>
                </li>
            </ul></div>
            <div v-if="currentTab == 3" class="notice-box tab-cont"><ul>
                <li>
                    <span>자유게시판</span>
                    <b>인터넷족보 등록 및 신청요령</b>
                    <i>2022.07.21</i>
                    <u>최고관리자</u>
                    <router-link to=""></router-link>
                </li>
                <li>
                    <span>자유게시판</span>
                    <b>인터넷족보 등록 및 신청요령</b>
                    <i>2022.07.21</i>
                    <u>최고관리자</u>
                    <router-link to=""></router-link>
                </li>
                <li>
                    <span>자유게시판</span>
                    <b>인터넷족보 등록 및 신청요령</b>
                    <i>2022.07.21</i>
                    <u>최고관리자</u>
                    <router-link to=""></router-link>
                </li>
                <li>
                    <span>자유게시판</span>
                    <b>인터넷족보 등록 및 신청요령</b>
                    <i>2022.07.21</i>
                    <u>최고관리자</u>
                    <router-link to=""></router-link>
                </li>
            </ul></div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'noticeItem',
    components: {
    },
    data() {
        return {
            currentTab: 0,
            tabList: [
                '전체',
                '공지사항',
                '행사일정',
                '자유게시판'
            ]
        }
    }
}
</script>