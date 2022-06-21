<template>
  <div class="container mt-5 pt-5">
    <div>
      <h1>자유게시판 글쓰기</h1>
      <br />
    </div>
    <div v-if="!submitted">
      <div class="form-group">
        <label for="exampleFormControlInput1">제목</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="제목을 입력해 주세요."
          v-model="freeboard.title"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">내용</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="내용을 입력해 주세요."
          v-model="freeboard.content"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">작성자</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="작성자 이름을 입력해 주세요."
          v-model="freeboard.writer"
        />
      </div>
      <div class="mb-3">
        <button @click="saveFreeboard" class="btn btn-primary">Submit</button>
      </div>
    </div>

    <div v-else>
      <div class="alert alert-success" role="alert">Save successfully!</div>
      <button @click="newComplain" class="btn btn-primary">Add New</button>
    </div>
  </div>
</template>

<script>
import FreeboardDataService from "@/services/FreeboardDataService";

export default {
  name: "add-freeboard",
  data() {
    // 객체 , 변수 초기화
    return {
      freeboard: {
        no: null,
        title: "",
        content: "",
        writer: "",
      },
      submitted: false,
    };
  },
  methods: {
    // 저장 메소드 호출
    saveFreeboard() {
      //  회원 임시 객체 만들기
      var data = {
        title: this.freeboard.title,
        content: this.freeboard.content,
        writer: this.freeboard.writer,
      };
      //  임시 회원 객체를 서버쪽으로 전달해서 DB에 insert 요청
      FreeboardDataService.create(data)
        //  성공하면 then으로 들어옴
        .then((response) => {
          this.freeboard.no = response.data.no;
          this.submitted = true; // DB insert 성공
        })
        //  실패하면 catch으로 에러메세지가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    // 새 회원가입을 위한 빈 form을 만드는 메소드(변수 초기화)
    newComplain() {
      this.submitted = false;
      this.freeboard = {};
    },
  },
};
</script>
