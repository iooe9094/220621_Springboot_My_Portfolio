<template>
  <div class="container mt-5 pt-5">
    <div>
      <h1>자유게시판</h1>
      <br />
    </div>
    <div class="col-md-8">
      <div class="input-group mb-3">
        <!-- TODO: 수정 시작 #1 -->
        <input
          type="text"
          class="form-control"
          placeholder="Search by Title"
          v-model="searchTitle"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="
              page = 1;
              retrieveFreeboard();
            "
          >
            Search
          </button>
        </div>
        <!-- TODO: 수정 끝 #1 -->
      </div>
    </div>

    <div class="'col-md-12">
      <div class="mb-3">
        Items per Page:
        <select v-model="pageSize" @change="handlePageSizeChange($event)">
          <!-- pageSizes : [3, 6, 9] -->
          <option v-for="size in pageSizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </div>
      <!-- page: 현재페이지, count: 총 데이터 건수 -->
      <!-- pageSize: 1페이지 당 개수(건수) -->
      <b-pagination
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        @change="handlePageChange"
      >
      </b-pagination>
    </div>

    <div id="content">
      <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">No(NO)</th>
            <th scope="col">제목(TITLE)</th>
            <th scope="col">Complain 내용(CONTENT)</th>
            <th scope="col">작성자(WRITER)</th>
          </tr>
        </thead>
        <!--      조회 데이터 생성 부분-->
        <tbody v-for="(freeboard, index) in freeboards" :key="index">
          <tr>
            <td>{{ freeboard.no }}</td>
            <td>{{ freeboard.title }}</td>
            <td>{{ freeboard.content }}</td>
            <td>{{ freeboard.writer }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import FreeboardDataService from "@/services/FreeboardDataService";

/* eslint-disable */
export default {
  name: "freeboards",
  data() {
    // 변수 초기화
    return {
      freeboards: [],
      searchTitle: "",
      page: 1,
      count: 0,
      pageSize: 10,
      pageSizes: [3, 6, 9],
    };
  },
  methods: {
    getRequestParams(searchTitle, page, pageSize) {
      let params = {};

      if (searchTitle) {
        params["title"] = searchTitle;
      }
      if (page) {
        params["page"] = page - 1;
      }
      if (pageSize) {
        params["size"] = pageSize;
      }
      return params;
    },
    // 모든 회원 조회 서비스 호출
    retrieveFreeboard() {
      const params = this.getRequestParams(
        this.searchTitle,
        this.page,
        this.pageSize
      );

      // TODO: getAll() -> getAll(params)
      // axios로 spring에 모든 회원 조회 요청
      FreeboardDataService.getAll(params)
        // 성공하면 then으로 서버 데이터 전송
        // TODO: 아래 수정
        .then((response) => {
          // this.customers = response.data;
          const { freeboards, totalItems } = response.data;
          // springboot 받은 객체 정보
          this.freeboards = freeboards;
          // springboot에서 받은 페이지 총 개수
          this.count = totalItems;
        })
        // 실패하면 catch로 에러메세지 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    // TODO: 메소드 2개 추가, handlePageChange, handlePageSizeChange
    // 역할 : 현재 페이지 번호에 해당하는 데이터 다시 조회
    handlePageChange(value) {
      // 현재 페이지 변경
      this.page = value;
      // 다시 데이터 조회
      this.retrieveFreeboard();
    },
    // 페이지 사이즈(3,6,9) 변경 시 호출되는 메소드
    handlePageSizeChange(event) {
      this.pageSize = event.target.value; // select박스의 값
      this.page = 1;
      // 재 조회
      this.retrieveFreeboard();
    },
  },
  //화면이 뜨자마자 실행되는 이벤트(모든 회원조회가 실행됨)
  mounted() {
    this.retrieveFreeboard();
  },
};
</script>
