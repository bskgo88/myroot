<template>
    <div id="subpage">
        <SubBox />
        <div class="infoBox">
            <SubSide />
            <div class="SubInBox">
                <SubHeader />
                <div class="SubFullBox">
                    <div class="SFBox">
                        <MTBoard />
                        <Paging />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import SubBox from '@/components/sub/subtopBox.vue';
import SubHeader from '@/components/sub/subHeader.vue';
import SubSide from '@/components/sub/subSideBox.vue';
import Footer from '@/include/footer.vue'; // 푸터
import MTBoard from '@/components/sub/board/mtboard.vue';
import Paging from '@/components/sub/board/paging.vue';

export default {
    name: 'infomationPage',
    components: {
        SubBox,
        SubSide,
        SubHeader,
        Footer,
        MTBoard,
        Paging,
    },
    data() {
        return {
        }
    },
    computed: {
        SubActive() {
            return this.$route.meta.headerSub;
        },
    },
}
</script>