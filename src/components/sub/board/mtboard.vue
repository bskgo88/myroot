<template>
    <div class="MTBoard">
        <div class="SearchBox">
            <div class="SBhit">
                <strong>125</strong>
                <span>건의 정보가 있습니다.</span>
            </div>
            <div class="SBSelBox">
                <select>
                    <option>제목</option>
                </select>
                <input/>
                <button></button>
            </div>
        </div>
        <div class="MTBTable">
            <colgroup>
                <col width="80px"/>
                <col width="100%"/>
                <col width="120px"/>
                <col width="120px"/>
            </colgroup>
            <table>
                <tr>
                    <th>카테고리</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>날짜</th>
                </tr>
                <tr v-for="item in 10" :key="item">
                    <td>공지</td>
                    <td><router-link to="/view">제목이 들어가는 부분입니다. 제목이 들어가는 부분입니다.</router-link></td>
                    <td>최고관리자</td>
                    <td>2022.08.15</td>
                </tr>
            </table>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'BoardPage',
    components: {
    },
    data (){
    return {
        }
    },
  }
  </script>