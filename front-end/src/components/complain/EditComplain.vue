<template>
  <!--    기존 회원이 있을 경우 currentCustomer != null -->
  <div class="container mt-5 pt-5" v-if="currentComplain">
    <div>
      <h1>Complain 수정</h1>
      <br />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">제목</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="컴플레인 제목을 입력해 주세요."
        v-model="currentComplain.title"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">컴플레인 내용</label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="컴플레인 내용을 입력해 주세요."
        v-model="currentComplain.content"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">대상페이지</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="컴플레인 대상 페이지를 입력해 주세요."
        v-model="currentComplain.targetPage"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">작성자</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="작성자 이름을 입력해 주세요."
        v-model="currentComplain.writer"
      />
    </div>

    <div class="mb-3">
      <button @click="updateComplain" class="btn btn-primary me-3">
        Update
      </button>
      <button @click="deleteComplain" class="btn btn-danger">Delete</button>
    </div>
    <!--    수정버튼을 클릭후 성공했을때 아래가 보임 -->
    <div class="alert alert-success" role="alert" v-if="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
// 화면 설명 : 회원정보 수정 /삭제 화면
import ComplainDataService from "@/services/ComplainDataService";

export default {
  name: "edit-complain",
  data() {
    return {
      // 객체 ( 회원정보 )
      currentComplain: null,
      message: "",
    };
  },
  methods: {
    // id에 해당하는 회원정보를 조회하는 서비스를 요청(springboot)
    getComplain(id) {
      // axios 통신이용 서비스 호출( springboot )
      ComplainDataService.get(id)
        // 성공하면 then으로 결과 데이터가 들어옴( response.data )
        .then((response) => {
          this.currentComplain = response.data;
        })
        //  실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    //  회원정보 수정 서비스 요청( springboot )
    updateComplain() {
      //  axios 통신으로 수정 서비스 요청( springboot )
      ComplainDataService.update(this.currentComplain.id, this.currentComplain)
        //  성공하면 then 으로 결과 데이터가 들어옴
        .then(() => {
          this.message = "The complain was updated successfully!";
        })
        //  실패하면 catch 로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    //  회원삭제 서비스 요청(springboot)
    deleteComplain() {
      //  axios 이용해서 회원 삭제 요청( springboot )
      ComplainDataService.delete(this.currentComplain.id)
        //  성공하면 then으로 결과 데이터가 들어옴
        .then(() => {
          // router/index.js 안에 name
          // 화면 이동 : customers 화면으로 이동됨
          this.$router.push({ name: "complains" });
        })
        //  실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
          //  console.log(e)
        });
    },
  },
  //  화면이 뜨면 실행되는 이벤트
  //  http://localhost:8080/:id
  //  $route : router/index.js , params.id
  mounted() {
    this.getComplain(this.$route.params.id);
  },
};
</script>
