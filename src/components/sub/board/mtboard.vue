<template>
  <div class="MTBoard">
      <div class="SearchBox">
          <div class="SBhit">
              <strong>{{info.length}}</strong>
              <span>건의 정보가 있습니다.</span>
          </div>
          <div class="SBSelBox">
              <select>
                  <option>제목</option>
              </select>
              <input/>
              <button :style="{'background-image': 'url(' + require('@/assets/images/icon/icon-subsearch.png') + ')'}"></button>
          </div>
      </div>
      <div class="MTBTable">
          <table>
              <colgroup>
                  <col width="80px"/>
                  <col width="120px"/>
                  <col width="*"/>
                  <col width="120px"/>
                  <col width="200px"/>
              </colgroup>
              <tr>
                  <th>번호</th>
                  <th>카테고리</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>날짜</th>
              </tr>
              <tr v-for="v in info" :key="v">
                  <td>{{v.no}}</td>
                  <td>자유</td>
                  <td class="left"><router-link :to="{name:'DetailPage', params:v}">{{v.title}}</router-link></td>
                  <td>{{v.id}}</td>
                  <td>{{v.create_date}}</td>
              </tr>
          </table>
      </div>
  </div>
</template>
<script>
  import axios from 'axios';
 
  export default {
    name: 'BoardPage',
    components: {
    },
    data (){
        return {
            info:'',
            pageNum: 0,
        }
    },
    mounted () {
        axios
        .get('https://myroot.co.kr/home/dist/lib/json.php?METHOD=GET&KEYWORD=')
        .then(
            response => (this.info = response.data.list),
        )
    }
  }
  </script>